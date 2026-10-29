# 🌐 Networking & Ports Cheatsheet

## 🚪 Common Ports & Services

| Port | Protocol | Service | Attack Vectors / Notes |
|------|----------|---------|------------------------|
| **21** | TCP | FTP | Anonymous login, cleartext creds, brute force. |
| **22** | TCP | SSH | Brute force, key theft, old versions. |
| **23** | TCP | Telnet | Cleartext creds, sniffing. |
| **25** | TCP | SMTP | User enumeration (`VRFY`), open relay, phishing. |
| **53** | UDP/TCP | DNS | Zone transfer (`dig axfr`), DNS poisoning. |
| **80** | TCP | HTTP | Web attacks (SQLi, XSS, RCE), directory busting. |
| **110** | TCP | POP3 | Cleartext email retrieval. |
| **111** | TCP/UDP | RPC | Enumeration (`rpcinfo`), NFS shares. |
| **139** | TCP | NetBIOS | SMB enumeration, null sessions. |
| **143** | TCP | IMAP | Cleartext email access. |
| **443** | TCP | HTTPS | Same as HTTP but encrypted (check SSL/TLS bugs). |
| **445** | TCP | SMB | **Critical**: EternalBlue, PsExec, null sessions. |
| **3306** | TCP | MySQL | Brute force, SQL injection, UDF exploits. |
| **3389** | TCP | RDP | BlueKeep, brute force, screenshotting. |
| **5900** | TCP | VNC | Weak passwords, no auth. |
| **8080** | TCP | HTTP-Proxy | Often Tomcat/Jenkins (check default creds). |

---

## 🛠️ Networking Commands

### IP & Interface Info
```bash
# Modern (Linux)
ip a
ip route

# Legacy (Linux/Mac)
ifconfig
netstat -rn
```

### Connections & Listening Ports
```bash
# Show listening ports (TCP/UDP) with PID
ss -lntp

# Legacy netstat
netstat -antp

# List open files/ports by process
lsof -i -P -n
```

### DNS Lookup
```bash
# Basic lookup
nslookup <DOMAIN>

# Detailed lookup
dig <DOMAIN> ANY +noall +answer

# Zone Transfer
dig axfr @<DNS_SERVER_IP> <DOMAIN>
```

---

## 🚇 Port Forwarding & Tunneling

### SSH Forwarding
#### Local Port Forwarding
Access a service on the target machine (e.g., internal web server on port 8080) from your local machine (port 9090).
```bash
ssh -L 9090:127.0.0.1:8080 <USER>@<TARGET_IP>
```
*Access via `localhost:9090`*

#### Remote Port Forwarding
Expose your local service (e.g., listener on 4444) to the target machine (port 5555).
```bash
ssh -R 5555:127.0.0.1:4444 <USER>@<TARGET_IP>
```

#### Dynamic Port Forwarding (SOCKS Proxy)
Create a SOCKS proxy on your local machine (port 9050) to route traffic through the target.
```bash
ssh -D 9050 <USER>@<TARGET_IP>
```
*Use with `proxychains`*

### Socat Forwarding
Forward local port 8080 to target IP port 80.
```bash
socat TCP-LISTEN:8080,fork TCP:<TARGET_IP>:80
```
