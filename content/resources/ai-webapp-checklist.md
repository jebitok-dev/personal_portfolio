## Web app + AI security checklist

A condensed, on-page version for quick reference - the critical items per area. The full checklist (with the reasoning behind each item, framework tags, attack scenarios and fintech/health variants) lives in the [AI-Security-Checklists repo](https://github.com/jebitok-dev/AI-Security-Checklists). Start with the repo's `core-ai/ai-guardrails.md`, then work this list.

### 1. Authentication & session

- [ ] Rate limit login attempts per IP and per account
- [ ] Lock account after N failed attempts; alert the user on lockout
- [ ] Enforce MFA, prefer TOTP over SMS OTP
- [ ] Regenerate session token after login (prevents fixation)
- [ ] Invalidate session server-side on logout
- [ ] Re-authenticate for sensitive actions (email, password, payment)
- [ ] CAPTCHA / proof-of-work on registration and OTP triggers

### 2. Authorisation & access control

- [ ] Enforce authorisation server-side on every request
- [ ] Store roles server-side only; never trust a role claim from the client
- [ ] Test horizontal privesc (can User A reach User B's data? IDOR)
- [ ] Test vertical privesc (can a low-priv user reach admin endpoints?)
- [ ] Non-sequential, non-enumerable IDs (UUIDs) for all resources
- [ ] Remove or gate all debug/dev endpoints before launch

### 3. Input validation & injection

- [ ] Validate all inputs server-side
- [ ] Parameterised queries everywhere; no string concatenation
- [ ] Whitelist upload content types by magic bytes, not extension
- [ ] Enforce upload size limits server-side; scan files before storage
- [ ] Allowlist URL schemes (block `file://`, `gopher://`, internal IPs) - SSRF

### 4. Prompt injection (AI layer)

- [ ] Treat every text field that reaches the AI as an injection point
- [ ] Test AI behaviour with adversarial inputs in every user flow
- [ ] Alert when AI output contains instruction-like patterns or other users' data

### 5. Output encoding & XSS

- [ ] HTML-encode all output rendered in the browser
- [ ] Configure and test a Content Security Policy
- [ ] Treat AI-generated content as untrusted; encode before rendering
- [ ] No `innerHTML` with user- or AI-controlled content
- [ ] Set `X-Frame-Options` / `frame-ancestors` (clickjacking)

### 6. Security headers

- [ ] HTTPS sitewide with HSTS
- [ ] Content-Security-Policy (start restrictive)
- [ ] `X-Content-Type-Options: nosniff`
- [ ] Referrer-Policy and Permissions-Policy configured
- [ ] No server/framework versions or internal hostnames in headers

### 7. API security

- [ ] Auth required on every endpoint; map every route
- [ ] Rate limit all endpoints (per-user, per-IP, global)
- [ ] Return only fields the user is authorised to see (no over-fetching)
- [ ] CORS explicitly configured, never wildcard on authenticated endpoints
- [ ] Request size limits; disable deprecated API versions

### 8. AI context isolation & data handling

- [ ] Scope each user's AI session to their authenticated identity
- [ ] AI cannot query data stores directly - mediate via the app layer
- [ ] Filter RAG results by user permissions before passing to the AI

### 9. Error handling & disclosure

- [ ] Generic errors to users; detailed errors to server logs only
- [ ] No sensitive data in URLs (use POST body or headers)
- [ ] No secrets in client-side code or HTML source
- [ ] No verbose debug info in production responses

### 10. Dependency & supply chain

- [ ] Pin all dependencies to specific versions
- [ ] Run a CVE scan before every release (`npm audit`, `pip-audit`, …)
- [ ] No secrets in version control (scan with gitleaks / trufflehog)
- [ ] Subresource Integrity on third-party scripts; maintain an SBOM

### 11. Logging, monitoring & IR

- [ ] Centralised logging for all auth events (ID, IP, timestamp)
- [ ] Alerts on error spikes, unusual auth patterns, high AI query volume
- [ ] Incident-response runbook documented and tested
- [ ] Log retention policy defined and enforced

### Pre-launch minimum (before real users)

- [ ] All CRITICAL items above addressed
- [ ] Prompt injection tested on every field that reaches the AI
- [ ] Cross-tenant AI context leakage tested
- [ ] Dependency CVE scan clean (no critical/high)
- [ ] No secrets in the codebase or version control
- [ ] Security headers configured and verified
- [ ] Privacy notice + consent live; AI use disclosed to users
- [ ] Incident-response runbook written
- [ ] Debug endpoints removed or gated
