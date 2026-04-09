# Portfolio Improvement Game Plan (v2)

## Brainstorm backlog (anything on the table)

### High-impact front-end ideas
- **Command palette** (`⌘/Ctrl + K`) for quick navigation + actions.
- **Theme switcher** with persisted preference and animated transitions.
- **Case-study pages** for major projects/events (before/after, metrics, media).
- **Testimonials section** with credibility signals (logos, quotes, references).
- **Accessibility score pass** (contrast checks, landmark improvements, ARIA review).

### Back-end / platform ideas
- **Serverless contact API** (Resend/SendGrid) replacing `mailto` dependency.
- **Spam filtering** (honeypot + simple rate limit + challenge when suspicious).
- **Headless content source** (JSON/Markdown) so experience updates are content-only.
- **Analytics endpoint** for CTA and section interaction insights.
- **Deploy previews + CI quality gates** (Lighthouse, link checks, HTML validation).

### SEO / growth ideas
- `sitemap.xml`, `robots.txt`, canonical URL checks, richer schema.
- Structured project metadata for richer search snippets.
- Auto-generated Open Graph images by page/section.

---

## Pseudocode game-plan

### 1) Contact API with anti-spam
```pseudo
route POST /api/contact
  payload = parse_json(request)
  if payload.honeypot is not empty: reject(400, "spam")
  if now - payload.submitted_at < 4s: reject(429, "too fast")
  validate(payload.email, payload.subject, payload.message)
  sanitized = sanitize(payload)
  email_provider.send(to=owner, reply_to=sanitized.email, body=sanitized.message)
  db.insert("leads", sanitized + metadata)
  return { ok: true }
```

### 2) Content-driven resume sections
```pseudo
content = fetch('/content/experience.json')
if schema_invalid(content):
  log_error('Invalid content schema')
  content = fallback_content
for section in content.sections:
  render_section(section.title)
  for role in sort_by(section.roles, role.start_date desc):
    render_role_card(role)
```

### 3) Analytics event model
```pseudo
on page_view(section): track('page_view', { section, device, referrer })
on cta_click(name): track('cta_click', { name, section, timestamp })
on resume_download(): track('resume_download', { timestamp })
nightly:
  aggregate conversion funnels
  send report email if conversion drops > threshold
```

### 4) Quality gates in CI
```pseudo
on pull_request:
  run lint + format check
  run html validation
  run lighthouse ci against preview URL
  fail PR if accessibility < 90 or performance < 85
```

---

## Implemented in this repo iteration
- Modern favicon + manifest support.
- Quick email launcher form (prefilled draft).
- Shareable link copy action.
- Remember last visited section via localStorage.
- Keyboard shortcuts (`1-5` to jump pages, `/` to focus skills search).
- Auto-rotating spotlight card with pause on hover/tab hidden.
- `robots.txt` + `sitemap.xml` for baseline SEO indexing.
