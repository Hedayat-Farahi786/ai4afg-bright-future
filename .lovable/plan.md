## AI4Afghanistan — Full website build

Using the selected "Modern confident" direction (Instrument Sans display + Inter body, burnt-orange `#c2410c` brand on warm off-white, sticky nav, rounded cards, generous whitespace) as the locked visual system across every page.

### Design system (src/styles.css)
- `--color-brand: #c2410c`, `--color-surface: #fcfcfc`, `--color-ink: #18181b`
- Display font Instrument Sans (500/600), body Inter (400/500) loaded via `<link>` in `__root.tsx`
- Map to shadcn tokens via `@theme inline`; light mode only initially
- Shared `<SiteHeader />`, `<SiteFooter />`, `<PageHero />`, `<Section />` components

### Routes (src/routes/)
Public pages:
- `/` — homepage (port the chosen prototype exactly: hero, What/How/Why, mission block, programs preview, transparency strip)
- `/about` — Founding Story (full long-form), Mission, Vision, Values, with anchor jumps to sub-sections
- `/about/team` — Executive Board, Scientific Advisory Board (Interim), Program Development Team, Operations & Resource Mobilization Team (cards with placeholders for photos)
- `/about/donors` — Our Donors (placeholder)
- `/about/partners` — Our Institutional Partners (placeholder)
- `/about/transparency` — Transparency & Accountable Management (full legal/registration text, Freistellungsbescheid link)
- `/programs` — Training & Capacity-Building plus full programs list
- `/get-involved` — Why volunteer + volunteer application form (static, with radio for age category)
- `/donate` — Donation info, bank details (IBAN placeholders), monthly amount example
- `/partner-with-us` — Partnership pitch + train-the-trainer initiatives
- `/blog` — Empty-state placeholder ("Career Opportunities" style placeholder per doc)
- `/contact` — Contact form (static) + address, phone, email, newsletter signup
- `/legal/imprint` — Impressum (board members, register entry, tax info)
- `/legal/privacy` — Full Privacy Policy (all 17 sections from doc)
- `/legal/disclaimer` — Disclaimer / Legal Notice

Each route file:
- Has its own `head()` with route-specific title, description, og:title, og:description
- Uses `<SiteHeader />` + `<SiteFooter />` shell
- Real content from the docx (mission, vision, values, founding story, privacy text, etc.) — no lorem ipsum
- Anchors for in-page sub-sections under About and Privacy

### Imagery
- Generate one hero image (Afghan high-school students grades 10–12 in a bright classroom with a laptop, dignified, natural light) → `src/assets/hero-students.jpg`
- Generate one programs image (learning materials + tablet with code) → `src/assets/program-training.jpg`
- Generate one mentorship image (collaborative workspace) → `src/assets/program-mentorship.jpg`
- Team photos and donor/partner logos: render as initial-letter placeholders with the brand styling (no fake stock photos)

### Forms (static, no backend)
- Contact, volunteer, and newsletter forms render with the proper fields from the doc but show a toast "Thanks — we'll be in touch" on submit. No data persistence (per the user's choice). Easy to wire to Lovable Cloud later.

### Out of scope (this build)
- No database, no email sending, no auth (forms are display-only)
- No CMS for blog posts — `/blog` shows an empty-state per the brief
- Tax number, IBAN, bank, Freistellungsbescheid date are rendered as visible "to be provided" placeholders matching the `xxxx` markers in the doc

### Technical notes
- TanStack Start file-based routes; nested About sub-routes use dot-separated filenames (`about.team.tsx`, etc.)
- All `<Link>` navigation type-safe via `@tanstack/react-router`
- Semantic HTML, single H1 per route, alt text on all images
