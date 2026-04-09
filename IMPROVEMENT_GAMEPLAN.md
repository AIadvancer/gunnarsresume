# Portfolio Improvement Game Plan

## 1) Brainstorm: front-end and back-end upgrades

### UX / Visual
- Add polished favicon + web manifest so the tab and saved-site icon feel production-ready.
- Add a quick contact composer so recruiters can launch a prefilled email quickly.
- Add light/dark theme toggle with localStorage persistence.
- Add micro-interactions for section transitions and button states.

### Performance
- Convert heavy media assets to modern formats and load them lazily.
- Add image dimension hints to reduce layout shift.
- Set long-cache headers for static assets through hosting config.

### Back-end / Data
- Add serverless contact endpoint (email relay + spam protection).
- Add structured analytics pipeline for page-section engagement.
- Add CMS-style content source (JSON/Markdown) so resume entries are easier to update.

### SEO / discoverability
- Add sitemap.xml and robots.txt.
- Expand schema.org with `sameAs` and role history.
- Add canonical/alternate metadata for future localized pages.

### Quality / Reliability
- Add lint + formatting + build checks in CI.
- Add Lighthouse CI budget checks.
- Add uptime monitor ping and broken-link detection.

---

## 2) Pseudocode game-plan for next iterations

### A) Serverless contact form with anti-spam
```pseudo
on POST /api/contact:
  parse payload {name, email, subject, message, honeypot, timestamp}
  if honeypot is not empty -> reject as spam
  if current_time - timestamp < 4 seconds -> reject as bot
  validate all required fields and email format
  sanitize message fields
  send email through provider (Resend/SendGrid)
  store lead in lightweight DB table
  return success JSON
```

### B) Content-driven resume sections
```pseudo
load content from /content/resume.json
for each section in content:
  render section heading
  render cards ordered by `priority` or `startDate`
if content schema fails validation:
  fallback to safe defaults
  log a warning for maintainer
```

### C) Analytics events for portfolio funnel
```pseudo
on page_view:
  track {path, referrer, device_type}

on CTA click (email, phone, resume download):
  track {cta_name, page_section, timestamp}

nightly job:
  aggregate events into dashboard metrics
  compute conversion rates by section
```

### D) Asset/version strategy
```pseudo
during build:
  fingerprint css/js/media filenames
  generate manifest map
  inject hashed paths into HTML templates

on deploy:
  set immutable caching for hashed assets
  set short cache for HTML entrypoint
```
