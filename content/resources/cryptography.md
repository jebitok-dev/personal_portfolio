# 🔐 Cryptography Cheatsheet

## 🌐 Online Tools
| Tool | URL | Description |
|------|-----|-------------|
| **CyberChef** | [gchq.github.io/CyberChef](https://gchq.github.io/CyberChef/) | The "Swiss Army Knife" of crypto. Magic wand feature is great. |
| **dcode.fr** | [dcode.fr](https://www.dcode.fr/en) | Excellent for classical ciphers (Vigenère, Caesar, etc.). |
| **CrackStation** | [crackstation.net](https://crackstation.net/) | Massive rainbow table for un-salted hashes. |
| **Hashes.com** | [hashes.com](https://hashes.com/en/decrypt/hash) | Another good lookup service. |
| **Base64 Decode** | [base64decode.org](https://www.base64decode.org/) | Simple Base64 decoder. |

---

## 🆔 Hash & Encoding Examples

### Encodings (Not Encryption!)
| Type | Characteristics | Example |
|------|-----------------|---------|
| **Base64** | Ends with `=`, `==`. A-Z, a-z, 0-9, +, / | `SGVsbG8gV29ybGQ=` |
| **Base32** | A-Z, 2-7, ends with `=` | `JBSWY3DPEBLW64TMMQ======` |
| **Hex** | 0-9, A-F | `48656c6c6f20576f726c64` |
| **ROT13** | Caesar cipher shifted by 13 | `Uryyb Jbeyq` (Hello World) |

### Common Hashes
| Type | Length (Hex) | Characteristics | Example |
|------|--------------|-----------------|---------|
| **MD5** | 32 chars | Very common, broken. | `5d41402abc4b2a76b9719d911017c592` |
| **SHA1** | 40 chars | Deprecated. | `0a4d55a8d778e5022fab701977c5d840bbc486d0` |
| **SHA256** | 64 chars | Standard secure hash. | `a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e` |
| **NTLM** | 32 chars | Windows password hash. | `8846F7EAEE8FB117AD06BDD830B7586C` |

---

## 💻 Terminal Decryption & Decoding

### Base64 Decoding
```bash
echo "SGVsbG8gV29ybGQ=" | base64 -d
```

### ROT13 Decoding
```bash
echo "Uryyb Jbeyq" | tr 'A-Za-z' 'N-ZA-Mn-za-m'
```

### Hex Decoding
```bash
echo "48656c6c6f20576f726c64" | xxd -r -p
```

### OpenSSL Decryption (AES-256-CBC)
```bash
openssl enc -d -aes-256-cbc -in encrypted.file -out decrypted.file -k <PASSWORD>
```

---

## 🔨 Cracking Tools (Hashcat & John)

### Hashcat Modes
| Mode | Hash Type |
|------|-----------|
| 0 | MD5 |
| 100 | SHA1 |
| 1400 | SHA256 |
| 1000 | NTLM |
| 1800 | sha512crypt $6$, SHA512 (Unix) |
| 3200 | bcrypt $2*$, Blowfish (Unix) |

### Hashcat Examples
#### Basic Dictionary Attack
```bash
hashcat -m 0 -a 0 <HASH_FILE> /usr/share/wordlists/rockyou.txt
```

#### Rule-Based Attack (Best for variations)
```bash
hashcat -m 0 -a 0 <HASH_FILE> /usr/share/wordlists/rockyou.txt -r /usr/share/hashcat/rules/best64.rule
```

### John the Ripper
#### Auto-detect and crack
```bash
john --wordlist=/usr/share/wordlists/rockyou.txt <HASH_FILE>
```

#### Show cracked passwords
```bash
john --show <HASH_FILE>
```

---

## 🧂 Salting Explained

**What is a Salt?**
A salt is random data added to a password *before* hashing. It prevents rainbow table attacks (pre-computed hashes) because every user has a unique salt, meaning two users with the same password will have different hashes.

**Example:**
- Password: `password123`
- Salt: `Xy9z`
- Input to Hash: `password123Xy9z`
- Result: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`

**Cracking Salted Hashes:**
You MUST know the salt to crack the hash.

#### Hashcat with Salt
Format usually: `hash:salt` or `salt:hash` depending on the algorithm.

**Example (MD5 with Salt):**
If the format is `pass:salt` (Mode 10 or 20 usually, check `hashcat --help`):
```bash
hashcat -m 10 -a 0 hashes.txt rockyou.txt
```
*(Note: You often need to format the file correctly so hashcat knows which part is the salt)*
