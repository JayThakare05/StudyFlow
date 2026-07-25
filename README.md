# StudyFlow

> **Study Smarter. Not Harder.**

StudyFlow is a premium AI-powered study planner landing page built with React, Vite, Tailwind CSS, and Framer Motion. It showcases a modern SaaS product UI designed to help students organize tasks, track exams, visualize progress, and capture notes.

---

## Preview

| Section | Description |
|---|---|
| **Hero** | Animated headline, dual CTAs, live dashboard card with floating badges |
| **Trusted By** | 6 fictional universities in grayscale with hover effect |
| **Features** | 4 premium animated cards with per-card accent colors |
| **Dashboard Preview** | Full fake dashboard — calendar, bar chart, tasks, exams, progress bars |
| **Testimonials** | 3 student reviews with star ratings and coloured avatars |
| **CTA** | Indigo conversion panel with animated button |
| **Footer** | Brand column, 3-column nav, SVG social icons, copyright |

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI framework |
| [Vite](https://vitejs.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | latest | Animations |
| [Lucide React](https://lucide.dev) | latest | Icon library |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Typography (Google Fonts) |

---

## Features

- **Zero lorem ipsum** — all copy is product-grade and meaningful
- **Framer Motion animations** — fade-up, scale, whileInView, whileHover with cubic-bezier easing
- **Accessibility** — skip-to-content link, ARIA landmarks, focus-visible rings, semantic HTML
- **Clean architecture** — 9 focused, reusable components
- **Production ready** — builds to `dist/` with zero warnings
- **Desktop-first** — designed and optimized for desktop screens

---

## Folder Structure

```
studyflow/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with blur-on-scroll
│   │   ├── Hero.jsx            # Animated hero + mini dashboard card
│   │   ├── TrustedBy.jsx       # 6 universities, grayscale grid
│   │   ├── Features.jsx        # Section wrapper for feature cards
│   │   ├── FeatureCard.jsx     # Reusable animated feature card
│   │   ├── DashboardPreview.jsx# Full fake dashboard UI
│   │   ├── Testimonials.jsx    # 3-column testimonial cards
│   │   ├── CTA.jsx             # Conversion call-to-action panel
│   │   └── Footer.jsx          # Brand + nav + social + copyright
│   ├── App.jsx                 # Root layout with all sections
│   ├── index.css               # Global styles + Tailwind directives
│   └── main.jsx                # Vite entry point
├── index.html                  # SEO title + meta description
├── tailwind.config.js          # Brand palette + Inter font + shadow tokens
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Installation

### Prerequisites

- Node.js 18+
- npm 9+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/JayThakare05/StudyFlow.git
cd StudyFlow

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Vite dev server with HMR |
| Build | `npm run build` | Build production bundle to `dist/` |
| Preview | `npm run preview` | Preview the production build locally |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#4F46E5` | Buttons, links, accents |
| `accent` | `#6366F1` | Hover states |
| `surface` | `#F8FAFC` | Page background, card backgrounds |
| `ink` | `#111827` | Primary text |
| `muted` | `#6B7280` | Secondary text, labels |
| `border` | `#E5E7EB` | Card borders, dividers |

---

## Deployment

### Deploy to Vercel

Vercel is the recommended platform for this project. It detects Vite automatically.

#### Option 1 — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project root
vercel

# Follow the prompts:
# - Set up and deploy: Yes
# - Which scope: (your account)
# - Link to existing project: No
# - Project name: studyflow
# - Directory: ./
# - Override build settings: No (Vercel auto-detects Vite)
```

Your site will be live at `https://studyflow-<hash>.vercel.app`.

#### Option 2 — Vercel Dashboard (GUI)

1. Push your code to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **"Add New Project"**.
4. Import your GitHub repository `JayThakare05/StudyFlow`.
5. Vercel auto-detects Vite. **Do not change any build settings.**
6. Click **"Deploy"**.
7. Your site is live in ~30 seconds.

#### Build Configuration (auto-detected)

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

#### Custom Domain (optional)

1. In your Vercel project dashboard, go to **Settings → Domains**.
2. Add your custom domain (e.g. `studyflow.app`).
3. Follow the DNS configuration instructions shown.

---



*Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.*
