# Scope & ethics

A methodology index that mirrors the blue-team sheet, mapping each offensive category to the blue-team parallel it produces. It indexes categories and tool names, not payloads, brute-force command lines or step-by-step attack instructions. For hands-on technique detail, work from your own authorized lab / CTF notes.

### Ground rules

- Only run offensive tooling against systems you are authorized to test: your own lab, a CTF box, or an engagement with signed scope.
- Bug-bounty work follows the program's published scope and rules of engagement; out-of-scope testing is itself a policy violation, not a finding.
- Treat your own notes as a personal reference, not a publishable attack guide, unless the room or program explicitly allows write-ups of that kind.
- The point of knowing this material as a blue teamer is recognition: matching the stage you see in a log to the tradecraft category that produced it.

# Recon & enumeration

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Host/port discovery | Service and version identification across a target or range | Sysmon 3 baselining, unexpected listening ports |
| Web content discovery | Finding hidden paths, files and parameters on a web app | Web access-log spikes of 404s/403s from one source |
| Service-specific enumeration | Pulling share names, users, banners from SMB/FTP/SNMP | 4624 Type 3 logons, 5140 share access from unfamiliar hosts |
| Metadata and OSINT | Public records, subdomains, employee/email patterns | Phishing lures crafted around real org details |

**Reading notes:** a full-range port scan from one source in a short window is itself a detection signal. Web directory brute-forcing produces a flat request-rate signature in access logs (many requests, similar size, short intervals). Service banner grabs and anonymous share/FTP logins are the recon equivalent of the "discovery" stage in the blue-team attack chain.

# Initial access & web exploitation

| Category | What it covers | Blue-team parallel |
|---|---|---|
| File upload abuse | Getting attacker-controlled code to execute via an upload feature | Sysmon 11 (file create) + 1 (process create) in quick succession |
| Web app classes (OWASP Top 10) | Injection, broken auth, SSRF, deserialization, XXE and similar | WAF/app logs, abnormal query parameters, outbound calls from a web process |
| Reverse / bind shells | A remote interactive shell back to an attacker listener | Unexpected outbound connection from a web or office-app process (Sysmon 3) |
| Phishing / lure delivery | Document- or link-based initial access | Headers, lure patterns, BEC indicators |

**Reading notes:** a reverse shell shows on the defender side as a process spawning a network connection it has no business making (same T1071/T1105 mappings). Upload-based access often lands with double extensions or renamed files to dodge extension filters; file-create events with mismatched extension vs. content are the tell.

# Credential attacks

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Online brute-force / password spray | Guessing credentials against a live login (SSH, HTTP, SMB) | 4625 clusters, 4648 bursts, a single source hitting many accounts |
| Offline hash cracking | Recovering plaintext from captured hashes with wordlists/rules | Not directly visible; infer from what a dumped hash set would expose |
| Credential dumping | Pulling credentials from memory, vaults or files on a host | Sysmon 10 LSASS access, vault/credential-manager reads |
| Kerberos attacks | Roasting and ticket abuse against AD authentication | 4768/4769 anomalies, RC4 encryption type, AS-REP preauth=0 |

**Reading notes:** a spray is distinguished from a brute force by shape — many accounts, few passwords each, vs. one account, many passwords. Offline cracking leaves no trace on the target; the only defender signal is the earlier dumping or ticket-extraction step.

# Privilege escalation

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Linux: misconfiguration abuse | Sudo rights, SUID binaries, writable cron/services, PATH abuse | Process lineage showing a low-priv shell spawning as root/SYSTEM |
| Linux: known-binary abuse (GTFOBins-style) | Using a binary's documented escape hatch to gain a shell | The abused binary appearing with a parent it never has in baseline |
| Windows: token/service abuse | Service misconfig, unquoted paths, token impersonation | 4697/7045 new service, binary path pointing somewhere unexpected |
| Enumeration scripts | Automated checks for common local misconfigurations | A single script executing a long, fast sequence of system commands |

**Reading notes:** the giveaway in logs is almost always a privilege *jump* in the process chain — a user-context process spawning a SYSTEM/root one with no legitimate service in between. Automated enumeration scripts are noisy: dozens of discovery commands in under a second is itself detectable.

# Active Directory attack paths

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Domain enumeration | Mapping users, groups, trusts and ACLs | 4798/4799 bursts, `net`/`nltest` sequences |
| Kerberoasting / AS-REP roasting | Requesting service tickets or AS-REQs to crack offline | 4769 RC4 service-ticket spikes, 4768 preauth=0 |
| DCSync / replication abuse | Pulling password hashes via directory replication rights | 4662 against the domain object, from a non-DC source |
| Credential relay/reuse | Reusing captured material across hosts (pass-the-hash/ticket) | 4648 explicit-credential logons, same account across many hosts in minutes |

**Reading notes:** the blue-team side already lists the exact event IDs these produce; the value here is naming which AD attack produces each one. A service account authenticating from a workstation it has never used, right after a credential-exposure event, is the AD lateral-movement signature.

# Lateral movement & pivoting

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Remote execution | WinRM, SMB/admin shares, RDP, remote service creation | 4624 Type 3/10, 5140/5145, 4697/7045 on the target |
| File transfer between hosts | Moving tools or staged data host to host | Sysmon 11 file create on the receiving host; unusual share write |
| Network pivoting/tunneling | Routing traffic through a compromised host to reach unreachable systems | A host originating connections to two unrelated network segments |
| C2 frameworks | Centralized command-and-control for remote tasking across hosts | Repeated beacon intervals to one external destination |

# Persistence (offensive side)

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Autostart locations | Run keys, startup folders, scheduled tasks | Sysmon 13 registry value set, 4698/4702 |
| Service-based persistence | Installing a malicious service for restart survival | 4697/7045 service install with an unusual binary path |
| Account-based persistence | New or modified accounts, added group membership | 4720/4722/4728-type account and group events |
| Logon-script/profile abuse | Hooking into legitimate startup or logon mechanisms | Modified GPO/logon-script files, unexpected file-create in profile paths |

# Exfiltration & cleanup

| Category | What it covers | Blue-team parallel |
|---|---|---|
| Staging | Compressing/archiving target data before moving it out | 7z/Compress-Archive on a project or share folder |
| Exfil channel | Sending staged data out, often over the same C2 channel | Upload-shaped request immediately after an archive write |
| Anti-forensics / cleanup | Clearing history, logs or artifacts to reduce traceability | 1102 audit log cleared, 4719 audit policy changed, missing expected telemetry |

**Reading notes:** log clearing is itself one of the strongest indicators available — the absence of expected telemetry right after known activity is as reportable as a confirmed event. Mirrors the "honest wording" principle: an exfil attempt is reportable as an attempt even when receipt by the attacker server cannot be confirmed from host logs alone.
