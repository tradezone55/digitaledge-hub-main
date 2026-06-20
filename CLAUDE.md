# CLAUDE.md — DigitalEdge Hub (tradezone55/digitaledge-hub-main)

This repo deploys **digitaledgeprep.com** root via Netlify.
Branch: `main`. Do not touch unrelated DigitalEdge repos.

## Front-door structure (locked)

| File | Role |
|---|---|
| `index.html` | Single canonical front door — Flight Deck chooser with two equal doors (Free Practice / Full Tutor) |
| `free-practice.html` | Free hub — practice system cards + study tools + honest tutor invite |
| `about.html` | About page (linked from chooser nav) |
| `support.html` | Support page (linked from chooser nav) |
| `analytics-dashboard.html` | Counter dashboard — feeds from the visitor counter Apps Script; do not break |

## Design system

Flight Deck / bridge-command aesthetic. Palette: gunmetal `#0a0b0e`, panels `#12141a`,
ember `#ff6b00`, cyan `#36d6ff`, text `#e8eaed`. Fonts: Orbitron (headers), Chakra Petch (body),
Share Tech Mono (mono/labels). Signature pill on every page footer. Match existing pages exactly.

## Live data endpoints

| Purpose | URL |
|---|---|
| Visitor / learner-visit counter | `https://script.google.com/macros/s/AKfycbywTtj1F7V_fdU6Lui3KBbKn1HEOecB8YMSJrlK4F7wjxWN8fggpikGainA6OJ-Nyzv/exec?action=getTotalCount` |
| Geolocation + per-launch analytics | `https://script.google.com/macros/s/AKfycbwYwwsWrTdCegf-G_05may_SvXwCasPmzCAn0n9Iq3qGj6FXOyV-nIBzrySSstsV1xg/exec` |

The counter returns `{status:"success", totalVisits: N}`. The analytics endpoint accepts
`?exam=NAME&city=X&region=X&country=X` via `fetch(..., {mode:'no-cors'})`.

## Rules for adding things

- **New cert practice sim** → add a card to `free-practice.html`. Keep it in the Practice Systems grid.
- **New tutor track** → belongs inside TUTOR COMMAND (`tutor.digitaledgeprep.com`), not a card here.
- **Different kind of product** (teacher tools, academic/partner work) → its own door on the chooser
  (`index.html`), not a card in the free hub.
- **Past ~12 practice cards** → group the `free-practice.html` grid by vendor section:
  CompTIA / Cisco / AWS / Python.

## Do not touch

- `netlify.toml` — Netlify build config and `/analytics` redirect; leave as-is.
- `embeds/` folder — standalone embed pages; independent of the front door.
- `analytics-dashboard.html` — the visitor counter feeds it; any break affects the live dashboard.
