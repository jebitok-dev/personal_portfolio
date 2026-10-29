# Method & reporting

Blue-team reference built from hands-on Splunk investigations (phishing/BEC, a multi-host intrusion, a threat hunt). Method first, then references. Verify ATT&CK IDs against attack.mitre.org before citing.

### Investigation method

- Pattern-match, then verify. Form a hypothesis fast, then confirm or kill it against the log line. The log is the ground truth.
- Anchor on process relationships. Parent-to-child beats file names and hashes. Link events with `ProcessGuid`, not PID (PIDs are reused).
- Work the chain in order: initial access, execution, C2, persistence, discovery, credential access, lateral movement, collection, exfiltration.
- Separate noise from signal. Learn the baseline (scheduled traffic, vendor tools), then look for what breaks it.
- Say what you cannot prove. Credential source, command output, file contents and upload success are often not in the logs.
- Use event time, not queue time. Alert queues run minutes off the event timestamp.
- Treat external IOCs as leads, not findings. Confirm each one in your own data before reporting it.

### Case report template

```text
Alert:            [ID, rule name]
Verdict:          True positive / False positive
Escalation:       Yes / No
Time of activity: [event timestamp, ISO format]
Related entities: host, account, process (+GUID), parent, files, network
Reasons:          3+ checkable facts
Remediation:      contain -> eradicate -> prevent
Indicators:       commands, paths, IPs, domains (not hashes of legitimate tools)
Limitations:      what the logs could not show
```

### Honest wording

| Instead of | Write |
|---|---|
| Data was exfiltrated | Upload attempted; receipt by the server is unconfirmed |
| Credentials were stolen from the vault | Vault enumeration occurred; treat stored credentials as exposed; source of later credentials unconfirmed |
| The archive was created | The command wrote to this path; no file-create event found |
| The attacker compromised the domain controller | A remote session to DC-01 was attempted and denied (when the logs show denial) |
| Sophisticated attack | Describe what was observed; most chains use basic tooling |

### Time & counting tricks

- Elapsed time: subtract at full precision, then truncate or round exactly as the question says.
- Precision differs by source: Nginx logs whole seconds; Suricata and Sysmon carry microseconds.
- Hex PID to decimal: `0x139c` is 5020. This links a 4648 event to a Sysmon process.
- Sanity-check ordering: a record should not precede the command that caused it; treat near-equal times as one event.
- Beacons: use `stats count, min(_time), max(_time)` for count and span, then check gaps for the interval.
- Sum, do not count: for mailbox reads, add `OperationCount` across events.
- Reminders: helper processes (Office `ai.exe`, EC2 and SSM agents) are noise, do not flag them; do not list the hash of a legitimate tool (`7z.exe`, `VaultCmd.exe`) as an indicator.
- A watchlisted account that still works means containment did not happen. Noting what you could not prove makes the report stronger, not weaker.

# Splunk & Windows event IDs

### Search patterns that work

```text
index=* "keyword" | head 3 | table _raw          # first look: find the real field names
index=* EventCode=1 ProcessGuid="{...}"
  | table _time, Image, CommandLine, ParentImage, ParentCommandLine
index=* EventCode=3 DestinationIp="x.x.x.x"
  | stats count, min(_time) as first, max(_time) as last by Image, DestinationPort
  | eval first=strftime(first,"%Y-%m-%d %H:%M:%S")
index=* ... | sort 0 _time | table ...            # "sort 0" removes the row cap
| fillnull value="-"                              # keep rows when a stats field is blank
| rex field=_raw "\"Name\": \"OS\", \"Value\": \"(?<os>[^\"]+)\""   # nested JSON value
```

### Splunk pitfalls & fixes

| Pitfall | Fix |
|---|---|
| `host=` returned nothing; the field held the ingest endpoint | Filter on IPs, ProcessGuid, file paths or keywords; check the field sidebar first |
| `stats ... by field` dropped events with blank fields | `fillnull` before `stats` |
| Newest-first sort made the bottom row look earliest | `sort 0 _time` ascending |
| `Message` held the text, not `ScriptBlockText` | Open one raw event and use the real field name |
| Counts looked doubled | Sysmon 1 and Security 4688 log the same process; dedupe by source |
| Time off by hours | Compare raw UTC fields (`UtcTime`, `CreationTime`) not displayed `_time` |
| Simulation restart shifted timestamps | Re-read event times from the current session |
| Only page 1 of results was read | Check page controls; verify with a `head` or `stats` query |
| An index name seen inside the raw JSON returned zero results | That text was a field, not the Splunk index; keep `index=*` |

### Sysmon event IDs

| ID | Event | Use it for |
|---|---|---|
| 1 | Process create | Command line, parent, user, hashes |
| 3 | Network connection | C2 beacons, counts, intervals |
| 5 | Process terminated | Confirm a PID's lifetime |
| 10 | Process access | LSASS access (credential dumping); filter out Defender and svchost |
| 11 | File create | Dropped scripts, archives |
| 13 | Registry value set | Run keys, service paths, task cache |
| 15 | File stream hash | Zone.Identifier and download source |
| 22 | DNS query | Domain behind an IP |
| 23 | File delete | Cleanup |

### Windows Security & PowerShell event IDs

| ID | Event |
|---|---|
| 4624 / 4625 | Logon success / failure (see logon types) |
| 4648 | Logon with explicit credentials (credential reuse) |
| 4688 | Process creation |
| 4697 / 7045 | Service installed |
| 4698 / 4702 | Scheduled task created / updated |
| 4768 / 4769 | Kerberos TGT / service ticket |
| 4776 | NTLM credential validation |
| 5140 / 5145 | Share access / detailed file share access |
| 4662 | Directory object operation (DCSync shows here) |
| 4798 / 4799 | Local user / group enumeration |
| 1102 / 4719 | Audit log cleared / audit policy changed |
| PS 4104 | Script block text: the best evidence of what a script did |
| PS 4103 | Module and pipeline logging |
| PS 4100 | Error: shows failed actions, such as a denied remote session |

### Logon types

| Type | Meaning | Note |
|---|---|---|
| 2 | Interactive | Console |
| 3 | Network | SMB, WinRM, remote service creation |
| 4 / 5 | Batch / Service | Scheduled tasks and services |
| 7 | Unlock | |
| 8 | Network cleartext | Credentials sent in clear |
| 9 | NewCredentials | `runas /netonly`, pass-the-hash tooling |
| 10 | RemoteInteractive | RDP |
| 11 | CachedInteractive | Offline domain logon |

### Credential attack indicators

| Attack | What to look for |
|---|---|
| Kerberoasting | 4769 with RC4 ticket encryption (0x17) for a service account SPN, many in a short time |
| AS-REP roasting | 4768 with pre-authentication type 0 |
| Pass-the-hash | 4624 type 3 with NTLM from an unexpected source, or type 9 |
| DCSync | 4662 with replication property GUIDs (1131f6aa-…, 1131f6ad-…) from a non-DC account |
| LSASS dumping | Sysmon 10 on `lsass.exe` from an unusual source image; `comsvcs.dll`, procdump |
| Explicit credential reuse | 4648 naming a service account from a user process |

### Persistence locations

- Registry Run and RunOnce keys (HKCU and HKLM), Winlogon Shell and Userinit.
- Services (4697, 7045) whose binary path is a command line, not an executable.
- Scheduled tasks (4698, `schtasks /Create`), including delayed or time-triggered ones.
- Startup folder, WMI event subscriptions, DLL hijacking locations.

### Microsoft 365 operations

| Operation | What to read |
|---|---|
| UserLoggedIn | `ErrorNumber` (50140 is the keep-me-signed-in prompt, not a failure), `RequestType`, IP, user agent, device OS |
| MailItemsAccessed | Sum `OperationCount` for the number of items; compare against the mailbox's normal baseline |
| New-InboxRule | `SubjectContainsWords`, `DeleteMessage`, `StopProcessingRules`: a hiding rule |
| Message trace | Delivery status and time; match sender and subject to a rule |
| Teams MessageCreatedHasLink | `MessageFiles` and `MessageURLs` hold the link target |

### Common ports

88 Kerberos · 135 RPC · 139/445 SMB · 389/636 LDAP · 3268 Global Catalog · 3389 RDP · 5985/5986 WinRM · 8080/8443 common alternate web ports (often used for C2).

# Attack chain & ATT&CK mapping, LOLBins

### The nine stages

| # | Stage | What it looks like | ATT&CK |
|---|---|---|---|
| 1 | Initial access / lure | Document, shortcut or script opened by a user | T1566 Phishing; T1204.002 User Execution: Malicious File |
| 2 | Execution | Hidden or encoded PowerShell; Office spawning a shell | T1059.001 PowerShell; T1027 Obfuscated Files; T1218.005 mshta |
| 3 | Command and control | Repeated beacons at a fixed interval to one IP | T1071.001 Web Protocols; T1105 Ingress Tool Transfer |
| 4 | Persistence | Run key, scheduled task, service | T1547.001 Run Keys; T1053.005 Scheduled Task; T1543.003 Windows Service |
| 5 | Discovery | `whoami`, `net user /domain`, `nltest`, `net group` | T1033; T1087.002; T1482; T1069.002 |
| 6 | Credential access | vaultcmd, LSASS access, explicit-credential logons | T1555.004 Windows Credential Manager; T1003.001 LSASS Memory |
| 7 | Lateral movement | `sc \\host create`, WinRM, SMB shares, RDP | T1021.006 WinRM; T1021.002 SMB/Admin Shares; T1021.001 RDP; T1569.002 Service Execution |
| 8 | Collection | 7-Zip or Compress-Archive on a project folder | T1005 Local Data; T1074.001 Local Staging; T1560.001 Archive via Utility |
| 9 | Exfiltration | `curl --upload-file`, `Invoke-RestMethod -Method Post` to the C2 | T1041 Exfiltration Over C2 Channel |

Other mappings: T1564.008 email hiding rules (BEC), T1078 valid accounts, T1114 email collection, T1012/T1016 registry and network discovery. When a platform dropdown offers only parent techniques, choose the parent that contains the sub-technique you mean (e.g. Remote Services for WinRM or SMB). Use failed-attempt wording when a remote session was denied.

### LOLBins to recognise (lolbas-project.github.io)

| Binary | Abused for | Tell in the log |
|---|---|---|
| `mshta.exe` | Run HTA or script from a shortcut or URL | Parent `explorer.exe`; URL or script in the command line |
| `certutil.exe` | Download | `-urlcache -f <url>` |
| `bitsadmin.exe` | Download | `/transfer` with a URL |
| `curl.exe` | Download or upload | `--upload-file`, `--insecure` |
| `powershell.exe` | Everything | `-NoP -W Hidden -ExecutionPolicy Bypass -Enc` |
| `rundll32.exe` | Proxy execution | Unusual DLL and export |
| `schtasks.exe` / `sc.exe` | Persistence, remote execution | `/Create`; `\\host create ... binpath=` |
| `7z.exe` | Staging | On a build or project folder |
| `net.exe` / `nltest.exe` | Discovery | Bursts of commands in under a second |

Legitimate binaries are not malicious by hash, so judge them by parent, arguments and destination.

### Reading a chain: what to confirm at each link

- Launcher: parent process and its command line (Explorer, Word, Task Scheduler, a service).
- Decode: Base64 `-Enc` is UTF-16LE; decode before judging.
- Same actor? The same script name, process GUID, IP or account across hosts links alerts.
- Direction: which host is the source and which is the target of each remote action.
- Outcome: did it succeed, fail or get denied? Failed attempts change the story.
