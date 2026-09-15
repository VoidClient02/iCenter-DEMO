# iCenter DEMO - Student Assistant Absence & Leave Tracking System

A modern React-based attendance management system for Student Assistants, built with Vite + React + Tailwind CSS + React Router.

## 🌐 Live Preview
Dev server runs on `http://localhost:5173` - mapped via Arena preview.

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.jsx      # Global navigation (hidden on auth pages)
│   └── Footer.jsx      # Footer with links & branding
├── pages/
│   ├── HomePage.jsx    # Homepage - hero, stats, features, how it works
│   ├── LoginPage.jsx   # Login with role selector
│   └── SignupPage.jsx  # Signup with full validation
├── App.jsx             # Router mapping
├── main.jsx
└── index.css           # Tailwind + custom styles
```

## 🎨 Color Scheme (Matched to Reference)
- **Primary**: #0B2A4A (Deep Navy) - headers, CTAs, branding
- **Secondary**: #1E5BDA (Bright Blue) - buttons, links, highlights
- **Accent**: #2EC4B6 (Teal) - success states
- **Surface**: #F8FAFC (Light Gray) - page background
- **Muted**: #64748B - secondary text
- **White**: Cards, modals
- **Gradient**: from #EFF6FF via #F8FAFC to #FFFFFF (hero background)

Typography:
- Display: Plus Jakarta Sans (headings)
- Sans: Inter (body)

## 🔗 Page Mapping / Routing
| Route | Page | Links To |
|-------|------|----------|
| `/` | HomePage | Login (`/login`), Signup (`/signup`), Features (#features) |
| `/login` | LoginPage | Home (`/`), Signup (`/signup`), SSO |
| `/signup` | SignupPage | Home (`/`), Login (`/login`) |

All pages use `useNavigate()` and `<Link>` for SPA navigation. No page reload.

## 📐 Screen Dimensions
- **Width**: `w-screen` (100vw) fully encapsulates viewport
- **Height**: `min-h-screen` (100vh) minimum, `overflow-y-auto` for scrollable content
- **Max Content Width**: `max-w-[1440px]` centered container
- **Responsive**: Mobile (stacked), Tablet (grid), Desktop (12-col)
- **Scrollable**: Long pages (Home) naturally scroll; Auth pages scroll internally if content overflows (`overflow-y-auto` on form panel)

## 🚀 Getting Started
```bash
npm install
npm run dev    # starts on 0.0.0.0:5173
npm run build
npm run preview
```

## ✨ Features Implemented
### Homepage:
- Sticky navbar with logo, nav links, Login/Signup CTAs
- Hero with badge, headline, description, dual CTAs, social proof
- Live dashboard mock (Present, On Leave, Late, Absent cards + recent requests)
- Floating cards (approval notification, monthly report)
- Stats bar (attendance %, approval time, active SAs)
- Features grid (6 features with icons)
- How it Works (3 steps + pro tip)
- Final CTA gradient card
- Footer

### Login:
- Split screen: Left branding panel (navy with blurred orbs, testimonial)
- Right form: Role selector (SA/Supervisor/Admin), email, password with show/hide, remember me, forgot link, Sign In button with loading state, Google SSO, University SSO, signup link, demo credentials info box
- Fully responsive, scrollable

### Signup:
- Same split layout
- Role cards (SA vs Supervisor)
- Fields: Full Name, Student/Staff ID, Email, Department (select), Phone, Password, Confirm Password
- Password strength checklist (live)
- Terms checkbox
- Loading state, validation
- Login link

All forms have mock submit handling with alerts and navigation.

## 🛠️ Tech Stack
- React 19
- React Router DOM 7
- Tailwind CSS 3.4
- Vite 8

## 📝 Notes
- Color scheme kept close to reference images (deep navy + bright blue + white + soft grays)
- No external image dependencies - pure CSS + Tailwind + inline SVGs
- Accessibility: focus rings, semantic labels
- Production ready: `npm run build` succeeds
