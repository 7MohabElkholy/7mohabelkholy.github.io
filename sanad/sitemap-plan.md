# سند — Sitemap Plan

> Standalone Arabic desktop app website. RTL, light-only. Tajawal typeface.
> Design system adapted from Coinbase-inspired tokens (DESIGN.md).
> No code/style from the original portfolio.

---

## 1. Overview

| Attribute        | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| **Product**      | Sanad — Center management desktop app (Windows/macOS)               |
| **Language**     | Arabic only (RTL)                                                   |
| **Mode**         | Light mode only (color-scheme: light)                               |
| **Audience**     | Arabic-speaking educational center managers, owners, administrators |
| **Site purpose** | Sales + Distribution + Onboarding + Support + Documentation + Trust |
| **Standalone**   | Independent site. No reference to original portfolio.               |

### Page directory

| #   | Page         | URL                                    | Pattern             |
| --- | ------------ | -------------------------------------- | ------------------- |
| 1   | Landing      | `/`                                    | Marketing           |
| 2   | Download     | `/download`                            | Marketing + Support |
| 3   | Pricing      | `/pricing`                             | Marketing           |
| 4   | How It Works | `/how-it-works`                        | Marketing           |
| 5   | Help Center  | `/help`                                | Support             |
| 6   | Academy      | `/academy`                             | Support             |
| 7   | Contact      | `/contact`                             | Support + Marketing |
| 8   | Legal        | `/privacy`, `/terms`, `/refund-policy` | Legal               |
| 9   | Changelog    | `/changelog`                           | Support             |
| 10  | Status       | `/status`                              | Utility (later)     |

---

## 2. Adapted Design System

The Coinbase-inspired design system from DESIGN.md is adapted for **Arabic RTL + light-only**.

### Color Palette (light-only, trimmed)

```
primary:           #0052ff   Coinbase Blue — single brand voltage
primary-active:    #003ecc   Press state darken
primary-disabled:  #a8b8cc   Faded tint

ink:               #0a0b0d   Display headings, nav, emphasis
body:              #5b616e   Running text
body-strong:       #0a0b0d   Strong emphasis (same as ink)
muted:             #7c828a   Subtitles, breadcrumbs, footer secondary
muted-soft:        #a8acb3   Disabled link text

canvas:            #ffffff   Page floor
surface-soft:      #f7f7f7   Subtle alternating band
surface-card:      #ffffff   Card surface
surface-strong:    #eef0f3   Secondary buttons, search pills, icon plates

on-primary:        #ffffff   Text on blue CTAs

hairline:          #dee1e6   Default 1px divider
hairline-soft:     #eef0f3   Lighter divider

semantic-up:       #05b169   Price up — text only
semantic-down:     #cf202f   Price down — text only

accent-yellow:     #f4b000   Illustrative-only (asset glyphs)

blue-splash:       #eef4ff   Hero background tint (NEW)
```

### Typography (adapted for Arabic RTL)

Font stack: `'Tajawal', -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`

| Token            | Font           | Size | Weight | Line Height | Letter Spacing | Use                |
| ---------------- | -------------- | ---- | ------ | ----------- | -------------- | ------------------ |
| `display-mega`   | Tajawal        | 80px | 700    | 1.3         | 0              | Homepage hero h1   |
| `display-xl`     | Tajawal        | 64px | 700    | 1.3         | 0              | Subsidiary heroes  |
| `display-lg`     | Tajawal        | 52px | 700    | 1.3         | 0              | Section heads      |
| `display-md`     | Tajawal        | 44px | 700    | 1.4         | 0              | CTA-band headlines |
| `display-sm`     | Tajawal        | 36px | 700    | 1.4         | 0              | Sub-section heads  |
| `title-lg`       | Tajawal        | 32px | 600    | 1.5         | 0              | Card group titles  |
| `title-md`       | Tajawal        | 18px | 600    | 1.6         | 0              | Component titles   |
| `title-sm`       | Tajawal        | 16px | 600    | 1.5         | 0              | List labels        |
| `body-md`        | Tajawal        | 16px | 400    | 1.8         | 0              | Default body       |
| `body-strong`    | Tajawal        | 16px | 700    | 1.8         | 0              | Emphasized body    |
| `body-sm`        | Tajawal        | 14px | 400    | 1.8         | 0              | Footer body        |
| `caption`        | Tajawal        | 13px | 400    | 1.6         | 0              | Photo captions     |
| `caption-strong` | Tajawal        | 12px | 600    | 1.6         | 0              | Badge pill labels  |
| `number-display` | JetBrains Mono | 18px | 500    | 1.5         | 0              | Numbers (tabular)  |
| `button`         | Tajawal        | 16px | 600    | 1.5         | 0              | CTA pills          |
| `nav-link`       | Tajawal        | 14px | 500    | 1.5         | 0              | Top nav items      |

**Changes from original DESIGN.md:**

- Coinbase Display/Sans → Tajawal (Arabic-native)
- Display weight 400 → 700 (Arabic needs heavier weight for equivalent editorial presence)
- Negative letter-spacing → 0 (Arabic script connects letters; negative tracking breaks rendering)
- Line-height display 1.0 → 1.3 (Arabic ascenders/descenders need breathing room)
- Line-height body 1.5 → 1.8 (Arabic text legibility benefits from generous leading)

### Components (adapted, light-only + RTL)

_Removed all dark variants. Replaced signature dark hero with blue-splash hero._

| Component                           | Changes from DESIGN.md                                               |
| ----------------------------------- | -------------------------------------------------------------------- |
| `top-nav-light`                     | RTL layout: wordmark right, nav right-to-left, CTAs left             |
| `button-primary`                    | Unchanged — blue pill, 44px height                                   |
| `button-primary-active`             | Unchanged                                                            |
| `button-primary-disabled`           | Unchanged                                                            |
| `button-secondary-light`            | Unchanged — gray pill on white                                       |
| `button-tertiary-text`              | Unchanged — inline blue link                                         |
| `button-pill-cta`                   | Unchanged — large 56px hero CTA                                      |
| `hero-band-blue-splash`             | **NEW** — `background: linear-gradient(135deg, #eef4ff, #ffffff)`    |
| `hero-band-light`                   | Unchanged — white canvas hero                                        |
| `product-ui-card-light`             | Unchanged — white card, 24px radius, hairline border                 |
| `feature-card`                      | Unchanged — white card, 32px padding, 24px radius                    |
| `asset-row`                         | Unchanged — horizontal row, RTL: icon right, ticker right            |
| `price-up-cell` / `price-down-cell` | Unchanged — text color only                                          |
| `pricing-tier-card`                 | Unchanged — 1px hairline + 24px radius                               |
| `pricing-tier-featured`             | **REMOVED** (was dark) → replaced by featured badge on standard card |
| `text-input`                        | Unchanged — 12px radius, focus blue border                           |
| `search-input-pill`                 | Unchanged — 100px radius, gray bg                                    |
| `badge-pill`                        | Unchanged — uppercase pill label                                     |
| `asset-icon-circular`               | Unchanged — 32px circle                                              |
| `cta-band-soft`                     | **NEW** — `surface-soft` bg, 96px padding, centered                  |
| `footer-light`                      | Unchanged — 6-column link list (RTL reversed)                        |
| `footer-link`                       | Unchanged                                                            |
| `legal-band`                        | Unchanged                                                            |

### Rounded, Spacing (unchanged from DESIGN.md)

```
rounded:  none(0) xs(4) sm(8) md(12) lg(16) xl(24) pill(100) full(9999)
spacing:  xxs(4) xs(8) sm(12) base(16) md(20) lg(24) xl(32) xxl(48) section(96)
```

### Page rhythm (light-only)

```
Canvas → Blue-splash → Canvas → Soft-gray → Canvas → Soft-gray → Canvas → CTA-soft → Canvas
```

---

## 3. Page-by-Page Sitemap

---

### 3.1 Landing Page `/`

**Pattern:** Marketing — band rhythm
**Components:** `top-nav-light`, `hero-band-blue-splash`, `button-pill-cta`, `feature-card`, `cta-band-soft`, `footer-light`, `legal-band`

#### Sections

| #   | Section            | Band          | Components                                                           | Content                                                                                                                                  |
| --- | ------------------ | ------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Top nav            | canvas        | `top-nav-light`                                                      | Logo right, 4 nav items RTL (الرئيسية / التحميل / الأسعار / طريقة العمل), search + CTA left                                              |
| 2   | Hero               | blue-splash   | `hero-band-blue-splash`, `button-pill-cta`, `button-secondary-light` | Headline `display-mega` (Cairo 700, 80px), subhead `body-md`, CTA pair (تحميل → /download + طلب عرض توضيحي), floating product screenshot |
| 3   | Problem → Solution | canvas        | `feature-card`                                                       | Split layout. Left: pain points (Attendance chaos, Manual payments…), Right: solution overview                                           |
| 4   | Features grid      | surface-soft  | `feature-card` 3-up                                                  | 9 feature cards: إدارة الطلاب / إدارة المعلمين / المجموعات / الجداول / الحضور / المدفوعات / التقارير / التراخيص / العمل بدون إنترنت      |
| 5   | Workflow           | canvas        | numbered steps                                                       | RTL step flow: إنشاء فصول → إضافة معلمين → إنشاء مجموعات → تسجيل طلاب → تتبع الحضور → إدارة المدفوعات                                    |
| 6   | Pricing preview    | surface-soft  | mini cards                                                           | 3 tier cards (مجاني / أساسي / احترافي), link → /pricing                                                                                  |
| 7   | FAQ preview        | canvas        | accordion                                                            | Top 5 questions, link → /help                                                                                                            |
| 8   | CTA footer         | cta-band-soft | `cta-band-soft`, `button-pill-cta`, `button-secondary-light`         | "ابدأ الآن مع سند ", two CTAs                                                                                                            |
| 9   | Footer             | canvas        | `footer-light`, `legal-band`                                         | 6-column RTL link list, copyright, legal links                                                                                           |
| 10  | Legal strip        | canvas        | `legal-band`                                                         | سياسة الخصوصية / الشروط / سياسة الاسترجاع                                                                                                |

**Breakpoints:** Hero h1 80→64→52→44→36px. Feature cards 3-up→2-up→1-up. Nav collapses to hamburger <768px (CTA stays visible).

**RTL notes:**

- Feature card icon on text right side
- Workflow step numbers: ٦ ← ٥ ← ٤ ← ٣ ← ٢ ← ١
- Product screenshot floats left of text (mirror of LTR layout)
- Footer columns: rightmost is column 1

---

### 3.2 Download Page `/download`

**Pattern:** Marketing + Support
**Components:** `top-nav-light`, `hero-band-light`, `button-primary`, `feature-card`, `footer-light`, `legal-band`

#### Sections

| #   | Section             | Band                 | Content                                                                                                |
| --- | ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------ |
| 1   | Top nav             | canvas               | Same as landing                                                                                        |
| 2   | Hero                | canvas / blue-splash | Headline `display-xl`: "حمّل سند الآن", subhead, download button                                       |
| 3   | Latest version      | canvas               | OS selector (Windows / macOS), version number (v1.0.0), download button (primary), file size, checksum |
| 4   | System requirements | surface-soft         | Card grid: إصدار ويندوز / الرام / المساحة التخزينية / متطلبات الإنترنت / سلوك العمل بدون إنترنت        |
| 5   | Install guide       | canvas               | Numbered steps RTL: تحميل → تثبيت → فتح → تفعيل → إنشاء مركز                                           |
| 6   | Install video       | surface-soft         | Embedded video player with step-by-step walkthrough                                                    |
| 7   | Release notes       | canvas               | Latest version notes + link → /changelog                                                               |

**RTL notes:**

- System requirements: RTL grid (icon + label right, value left)
- Install steps: RTL order, screenshots on left of text

---

### 3.3 Pricing `/pricing`

**Pattern:** Marketing
**Components:** `top-nav-light`, `hero-band-light`, `pricing-tier-card`, `feature-card`, `button-primary`, `button-secondary-light`, `cta-band-soft`, `footer-light`

#### Sections

| #   | Section          | Band         | Content                                                                                                                                                                          |
| --- | ---------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Top nav          | canvas       | Same                                                                                                                                                                             |
| 2   | Hero             | blue-splash  | Headline `display-xl`: "اختر الباقة المناسبة لمركزك"                                                                                                                             |
| 3   | Pricing cards    | canvas       | 3 tiers (مجاني / أساسي / احترافي) side-by-side. Featured: `pricing-tier-card` + blue border/badge instead of dark bg. Each: plan name, price (SAR/month), feature list, CTA pill |
| 4   | Comparison table | surface-soft | Full feature table: rows = features, columns = Free/Basic/Pro. Checkmark/X icons. RTL: feature name right, tiers left-to-right                                                   |
| 5   | FAQ              | canvas       | Accordion: Offline? Updates? License transfer? Monthly payment?                                                                                                                  |

**RTL notes:**

- Comparison table: feature labels on right, tiers flow leftward
- Pricing cards: RTL card order (الأساسية first, rightmost)

---

### 3.4 How It Works `/how-it-works`

**Pattern:** Marketing (business flow, not docs)
**Components:** `top-nav-light`, `hero-band-light`, `feature-card`, `cta-band-soft`, `footer-light`

#### Sections

| #   | Section       | Band                              | Content                                                                                                                                   |
| --- | ------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Top nav       | canvas                            | Same                                                                                                                                      |
| 2   | Hero          | blue-splash                       | Headline `display-xl`: "كيف يعمل سند "                                                                                                    |
| 3–9 | Flow sections | alternating canvas / surface-soft | Each: إعداد المركز → إضافة معلمين → إنشاء مجموعات → إضافة طلاب → الحضور → المدفوعات → التقارير. Each section: Text + GIF/Screenshot/Video |
| 10  | CTA           | cta-band-soft                     | "ابدأ الآن"                                                                                                                               |

**Design:** Each flow section is a 2-up split (RTL: text right, visual left)

---

### 3.5 Help Center `/help`

**Pattern:** Support (knowledge base)
**Components:** `top-nav-light`, `search-input-pill`, `badge-pill`, `footer-light`, `legal-band`

#### Sections

| #   | Section           | Content                                                                                              |
| --- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| 1   | Top nav           | canvas                                                                                               |
| 2   | Hero              | blue-splash — "كيف يمكننا مساعدتك؟" + search bar `search-input-pill`                                 |
| 3   | Category grid     | 8 cards: التثبيت / التفعيل / الطلاب / المعلمين / المجموعات / المدفوعات / التحديثات / استكشاف الأخطاء |
| 4   | Featured articles | Top 3 most-read articles                                                                             |
| 5   | Contact CTA       | "لم تجد إجابتك؟" → /contact                                                                          |

**Article pages** (`/help/:slug`): Single-column layout, breadcrumb, TOC right, content body `body-md`, `text-input` for feedback (Was this helpful?).

---

### 3.6 Academy `/academy`

**Pattern:** Support (video library)
**Components:** `top-nav-light`, `search-input-pill`, `feature-card`, `footer-light`

#### Sections

| #   | Section        | Content                                                                                                                                   |
| --- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Top nav        | canvas                                                                                                                                    |
| 2   | Hero           | blue-splash — "أكاديمية سند ", search                                                                                                     |
| 3   | Category cards | ابدأ هنا (التثبيت / التفعيل / التشغيل الأول), العمليات اليومية (الطلاب / المعلمين / الحضور), متقدم (التقارير / الترحيل / النسخ الاحتياطي) |
| 4   | Featured video | Hero video card                                                                                                                           |

**Video page** (`/academy/:slug`): Video player, description, related videos sidebar (RTL).

---

### 3.7 Contact `/contact`

**Pattern:** Support + Marketing
**Components:** `top-nav-light`, `text-input`, `button-primary`, `footer-light`

#### Sections

| #   | Section         | Content                                                                                                                           |
| --- | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Top nav         | canvas                                                                                                                            |
| 2   | Hero            | blue-splash — "تواصل معنا"                                                                                                        |
| 3   | Contact methods | Email + WhatsApp + Support hours + Sales inquiry                                                                                  |
| 4   | Contact form    | `text-input` fields: الاسم / البريد الإلكتروني / الموضوع / الرسالة + `button-primary` إرسال. Labels right, inputs full width RTL. |

---

### 3.8 Legal Pages `/privacy`, `/terms`, `/refund-policy`

**Pattern:** Legal (minimal, typography-heavy)
**Components:** `top-nav-light`, `footer-light`, `legal-band`

#### Layout

Single-column, max-width ~800px centered, RTL text. Headings `display-sm`, body `body-md`, last-updated date in `caption`. No hero band — minimal nav + content + footer.

---

### 3.9 Changelog `/changelog`

**Pattern:** Support
**Components:** `top-nav-light`, `badge-pill`, `footer-light`

#### Layout

Reverse-chronological list. Each entry: version tag (`badge-pill`), date, bullet points. Headings `title-lg`. Link to download latest from each entry.

---

### 3.10 Status Page `/status` (later)

**Pattern:** Utility
**Components:** `top-nav-light`, `feature-card`, `footer-light`

#### Layout

Dashboard-style cards showing: Licensing API status, Update server status, Activation server status. Green/red indicator dots per card.

---

## 4. Page Templates

### 4.1 Marketing Template

Used by: Landing, Download hero, Pricing, How It Works

```
[top-nav-light]                     ← canvas, 64px
[hero-band-blue-splash]             ← blue gradient
  headline display-mega/xl
  subhead body-md
  CTA: button-pill-cta
  optional: screenshot/illustration

[band: canvas]                      ← section, 96px padding
  2-up or 3-up grid

[band: surface-soft]                ← alternating band, 96px padding
  content block

[band: canvas]                      ← section, 96px padding
  content block

[cta-band-soft]                     ← surface-soft, 96px padding
  headline + CTA pair

[footer-light]                      ← canvas, 64px padding
[legal-band]                        ← canvas, caption text
```

### 4.2 Support Template

Used by: Help Center, Academy, Changelog

```
[top-nav-light]                     ← canvas, 64px
[hero: blue-splash compact]         ← shorter hero, 48px padding
  headline display-md
  search-input-pill (help/academy only)

[band: canvas]                      ← content area
  grid or list of cards/articles

[footer-light]
[legal-band]
```

### 4.3 Legal Template

Used by: Privacy, Terms, Refund Policy

```
[top-nav-light]
[band: canvas]                      ← max-width 800px centered
  last-updated (caption)
  h1 (display-sm)
  body (body-md)
  sections with h2 (title-lg)
[footer-light]
[legal-band]
```

---

## 5. Responsive Strategy

| Breakpoint | Width       | Key changes                                                           |
| ---------- | ----------- | --------------------------------------------------------------------- |
| Mobile     | <640px      | Hero h1 80→40px. Cards 1-up. Content stack vertical. Nav → hamburger. |
| Tablet     | 640–1024px  | Hero h1 64px. Cards 2-up. Feature grids compress.                     |
| Desktop    | 1024–1280px | Full hero h1 80px. 3-up grids. Full layouts.                          |
| Wide       | >1280px     | Content caps at 1200px centered.                                      |

**Arabic-specific responsive notes:**

- Arabic text is typically 25% longer than English at same point size → more aggressive truncation/clamping on cards
- Hero headlines may need earlier breakpoint downsizing (80→52 at 900px instead of 640px)
- Button text may overflow at small sizes → use shorter Arabic CTA copy or `min-width: 0` + `text-overflow`

---

## 6. RTL Token Reference

All horizontal spacing tokens explicitly mirrored for RTL:

### Layout direction

```css
html {
  direction: rtl;
}
```

### Padding (mirrored)

| Context     | LTR value   | RTL equivalent            |
| ----------- | ----------- | ------------------------- |
| Button pill | `12px 20px` | `12px 20px` (symmetrical) |
| Card        | `32px`      | `32px` (symmetrical)      |
| Text input  | `14px 16px` | `14px 16px` (symmetrical) |
| Search pill | `12px 20px` | `12px 20px` (symmetrical) |
| Footer      | `64px 48px` | `64px 48px` (symmetrical) |

Most Coinbase tokens use symmetrical horizontal padding (same left/right), so no change needed.

### Margin / flex order

| Element                    | LTR                     | RTL                     |
| -------------------------- | ----------------------- | ----------------------- |
| Nav: logo → menu → CTA     | Logo left               | Logo right              |
| Split layout: text + image | Text left, image right  | Text right, image left  |
| Feature card: icon + text  | Icon left, text right   | Icon right, text left   |
| Step numbers               | 1 → 2 → 3               | ٣ ← ٢ ← ١               |
| Footer columns             | Col 1 leftmost          | Col 1 rightmost         |
| Table: label + value       | Label left, value right | Label right, value left |

### CSS logical properties (recommended)

Use these instead of physical `left`/`right`:

```css
/* Instead of margin-left / margin-right */
margin-inline-start
margin-inline-end

/* Instead of padding-left / padding-right */
padding-inline-start
padding-inline-end

/* Instead of border-left / border-right */
border-inline-start
border-inline-end

/* Instead of left / right for positioning */
inset-inline-start
inset-inline-end

/* Text alignment */
text-align: start  /* = right in RTL */
text-align: end    /* = left in RTL */

/* Flex order — use row by default, order maps RTL naturally */
flex-direction: row  /* = row, but main-start is right in RTL */

/* Transforms — mirror directional icons */
transform: scaleX(-1)  /* flip horizontal for directional SVGs */
```

---

## 7. Design Gaps & Action Items

From Web Interface Guidelines review of DESIGN.md:

| #   | Gap                               | Details                                                                                                                                                                                            | Priority |
| --- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| G1  | **Hover states missing**          | DESIGN.md: "Hover state never documented. Only Default and Active/Pressed." Guidelines require hover states with increased contrast on all interactive elements.                                   | High     |
| G2  | **Animation out of scope**        | DESIGN.md: "Animation timings out of scope." Guidelines require `prefers-reduced-motion`, compositor-friendly properties (transform/opacity only), interruptible animations, no `transition: all`. | High     |
| G3  | **No touch interaction guidance** | No `touch-action: manipulation`, no `-webkit-tap-highlight-color`, no `overscroll-behavior: contain` on modals. Needed for mobile visitors.                                                        | Medium   |
| G4  | **No safe area insets**           | Full-bleed layouts need `env(safe-area-inset-*)` for notched devices.                                                                                                                              | Medium   |
| G5  | **Form validation incomplete**    | DESIGN.md covers focus state only. Guidelines require: inline error messages, `autocomplete` attributes, correct `type`/`inputmode`, focus first error on submit, no paste blocking.               | High     |
| G6  | **Copy & content rules missing**  | No enforcement of: `…` not `...`, curly quotes, active voice, numerals for counts, specific button labels, second person.                                                                          | Medium   |
| G7  | **Image handling not specified**  | No guidance on explicit `width`/`height`, `loading="lazy"`, `fetchpriority="high"`.                                                                                                                | Medium   |
| G8  | **Font loading not specified**    | No `preconnect`, `preload` as font, `font-display: swap` for Tajawal/JetBrains Mono.                                                                                                               | High     |
| G9  | **No dark mode**                  | Explicitly light-only, but should set `color-scheme: light` on `<html>`, `<meta name="theme-color">` to `#ffffff`.                                                                                 | Medium   |
| G10 | **Keyboard accessibility**        | DESIGN.md doesn't specify focus-visible ring styles, skip links, heading hierarchy. Guidelines require all interactive elements have visible focus.                                                | High     |

### Action items to resolve gaps

1. Add hover states to all DESIGN.md interactive components (links, buttons, cards with CTA)
2. Document animation guidelines: `prefers-reduced-motion`, composite-only properties, no `transition: all`
3. Add `touch-action: manipulation` to interactive elements
4. Add `env(safe-area-inset-*)` to full-bleed bands
5. Document form validation patterns (inline errors, autocomplete, inputmode)
6. Add content style guide (typographic quotes, active voice, second person)
7. Add image component guidelines (dimensions, lazy/priority)
8. Add font loading performance guidelines (preconnect Tajawal CDN, preload, swap)
9. Set color-scheme + theme-color meta tags
10. Add focus-visible ring tokens to the design system

---

## 8. File Tree

```
sanad/
├── index.html              ← Landing page (/)
├── download.html           ← Download page (/download)
├── pricing.html            ← Pricing page (/pricing)
├── how-it-works.html       ← How It Works (/how-it-works)
├── help/
│   ├── index.html          ← Help Center (/help)
│   └── *.html              ← Article pages (/help/:slug)
├── academy/
│   ├── index.html          ← Video library (/academy)
│   └── *.html              ← Video pages (/academy/:slug)
├── contact.html            ← Contact page (/contact)
├── privacy.html            ← Privacy policy (/privacy)
├── terms.html              ← Terms of service (/terms)
├── refund-policy.html      ← Refund policy (/refund-policy)
├── changelog.html          ← Changelog (/changelog)
├── status.html             ← Status page (/status) [later]
├── DESIGN.md               ← Design system reference
├── MUST READ.md            ← Standalone site constraint
└── sitemap-plan.md         ← This file
```
