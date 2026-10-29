# 🕵️ OSINT Cheatsheet

## 🔍 Google Dorks (Google Hacking)
Use these operators to find sensitive information indexed by Google.

| Operator | Description | Example |
|----------|-------------|---------|
| `site:` | Limit search to a specific domain. | `site:example.com` |
| `filetype:` | Search for specific file extensions. | `filetype:pdf`, `filetype:docx`, `filetype:xls` |
| `intitle:` | Search for text in the page title. | `intitle:"index of"` |
| `inurl:` | Search for text in the URL. | `inurl:admin`, `inurl:login` |
| `intext:` | Search for text in the body of the page. | `intext:"password"` |
| `cache:` | View Google's cached version of a page. | `cache:example.com` |

### Useful Dork Combinations
- **Publicly exposed documents:** `site:target.com filetype:pdf`
- **Directory listing:** `intitle:"index of" "parent directory"`
- **Config files:** `filetype:env "DB_PASSWORD"`
- **Login pages:** `site:target.com inurl:login`
- **SSH keys:** `intitle:"index of" id_rsa`

---

## 👤 Username Search
Find profiles across social media platforms.

| Tool | Description | Command / URL |
|------|-------------|---------------|
| **Sherlock** | Hunt down social media accounts by username. | `python3 sherlock.py <USERNAME>` |
| **Namechk** | Check username availability across many sites. | [namechk.com](https://namechk.com/) |
| **WhatsMyName** | Fast username enumeration. | [whatsmyname.app](https://whatsmyname.app/) |

---

## 📧 Email OSINT
Gather information about email addresses.

| Tool | Description | Command / URL |
|------|-------------|---------------|
| **Hunter.io** | Find email addresses associated with a domain. | [hunter.io](https://hunter.io/) |
| **HaveIBeenPwned** | Check if email was in a data breach. | [haveibeenpwned.com](https://haveibeenpwned.com/) |
| **Epieos** | Google account lookup (Calendar, Maps reviews). | [epieos.com](https://epieos.com/) |
| **theHarvester** | Gather emails, subdomains, hosts. | `theHarvester -d <DOMAIN> -b all` |

---

## 🌐 Domain & IP Recon
Analyze domains and infrastructure.

| Tool | Description | Command / URL |
|------|-------------|---------------|
| **Whois** | Domain registration info. | `whois <DOMAIN>` |
| **DNSDumpster** | Visual DNS mapping. | [dnsdumpster.com](https://dnsdumpster.com/) |
| **Shodan** | Search engine for IoT/Servers. | [shodan.io](https://www.shodan.io/) |
| **Wayback Machine** | View historical versions of websites. | [archive.org](https://archive.org/) |
| **CRT.sh** | Certificate transparency search (subdomains). | [crt.sh](https://crt.sh/) |
| **Dig** | DNS lookup. | `dig <DOMAIN> ANY +noall +answer` |

---

## 🖼️ Image Intelligence (IMINT)
Analyze images for location and metadata.

| Tool | Description | URL |
|------|-------------|-----|
| **Google Images** | Reverse image search. | [images.google.com](https://images.google.com/) |
| **Yandex Images** | Often better for facial recognition/Russia. | [yandex.com/images](https://yandex.com/images/) |
| **TinEye** | Reverse image search engine. | [tineye.com](https://tineye.com/) |
| **ExifTool** | View image metadata (GPS, Camera, etc.). | `exiftool <IMAGE_FILE>` |

---

## 🐦 Social Media (Twitter/X)
Advanced search operators for Twitter.

| Operator | Description | Example |
|----------|-------------|---------|
| `from:` | Tweets from a user. | `from:elonmusk` |
| `to:` | Tweets sent to a user. | `to:elonmusk` |
| `since:` | Tweets after a date. | `since:2023-01-01` |
| `until:` | Tweets before a date. | `until:2023-12-31` |
| `geocode:` | Tweets from a location. | `geocode:37.77,-122.41,1km` |
