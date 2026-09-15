# StudentAssist - Absence & Leave Tracking System (iCenter DEMO)

Exact pixel-matched implementation of the 3 reference designs (Visily) using React + Vite + Tailwind CSS.

## 🎯 Reference Matching

This project models **texts, fonts, color schemes, and button layouts** exactly as in the provided images:

### 1. Homepage (`visily-homepage (1).png`)
- **Background**: `#9CC3E5` light blue
- **Header**: White, logo `StudentAssistance` + `ABSENCE AND TRACKING SYSTEM`, nav `Homepage`, `Change mode`
- **Hero**: `Library Services` pill, Title `Student Assistant Absence & Leave Tracking system` with `Absence` in blue `#1E5BDA`, subtitle, `Login` blue button `bg-[#1E5BDA]` + arrow, `Sign-up` cream button `bg-[#FFFBEB]`
- **Sections**:
  - Student Staff Hub calendar mock
  - Effortless Absence & Leave Monitoring with 4 check bullets
  - Automated Notifications & Alerts with 2 cards (Instant Alerts, Status Updates) + phone mock
  - Built for Every Role - 3 cards (Administrators, Supervisors, Student Assistant) with Learn More links
- **Footer**: Contact Us `10 OR tambo Witbank, Emalahleni, 1034, South Africa. +27 (0)86 110 2421 general@tut.ac.za`, Platform, Legal, Connect

### 2. Login (`visily-login (1).png`)
- **Background**: `#1A6FBF` deep blue
- **Header**: White, logo `StudentAssist ABSENCE TRACKER`, center nav `Dashboard`, `Absence Logs`, `Settings`, right `Sign-up` + `Home` blue button
- **Left**: Yellow badge `SECURE PORTAL` `bg-[#FBBF24]`, `Welcome Back` title, form card white:
  - `Institutional Email` with mail icon, placeholder `e.g. name@university.edu`
  - `Password` with lock + eye, `Forgot Password?` link
  - Checkbox `Keep me signed in for 30 days`
  - Two buttons side-by-side: `Student Sign in →` and `Supervisor Sign in →` both `bg-[#3B82F6]`
  - Divider `INSTITUTIONAL ACCESS`, help text `Contact IT Support`
- **Right**: `Verified Attendance Logged` badge, orange notebook image `2025`, `Weekly Progress 92%` card, `Centralized Management` text
- **Info**: `System Maintenance` light blue box
- **Footer**: Dark blue `#1860A8`, same contact info

### 3. Signup (`visily-signup-form.png`)
- **Header**: White `Register Portal` with graduation icon, search `Search portal...`, bell, `Account`
- **Banner**: Illustration with `WELCOME! SELECT YOUR PATH` + 4 buttons `BROWSE COURSES`, `REGISTER NOW`, `VIEW SCHEDULE`, `GET SUPPORT` + `COURSES & REGISTRATION` bar
- **Form**: `PORTAL ACCESS` label, `Create your account` title, toggle `Student Assistant` / `Supervisor`, fields:
  - `Student Number *` `e.g. 202400123`
  - `Name *` / `Surname *`
  - `Course *` `BSc Computer Science`
  - `Level of Study *` dropdown `Select current year`
  - `Student Email *` `john.doe@university.edu`
  - `Cell Number *` `+1 (555) 000-0000`
  - `Password *` / `Confirm Password *`
  - `Complete Registration →` blue button `bg-[#1565C0]`
  - Terms text + `Already have an account? Sign In`
- **Help**: `Need help with registration?` + footer with Support `support@register.edu +1 (555) 012-3456` and Resources

## 🎨 Color Scheme (Exact from Images)
- Homepage bg: `#9CC3E5`
- Login bg: `#1A6FBF`
- Login button: `#3B82F6` → hover `#2563EB`
- Secure badge: `#FBBF24` yellow
- Signup banner: `#E0F2F1` mint + illustration
- Signup form bg: `#9CC3E5`
- Signup button: `#1565C0`
- Text primary: `#0F172A`
- Text secondary: `#475569` / `#64748B`
- Borders: `#E2E8F0` / `#CBD5E1`
- White cards: `#FFFFFF` / `#F8FAFC`

## 🔤 Fonts
- Family: `Inter`, system-ui, sans-serif (matches Visily sans)
- Sizes: 7px-13px for meta, 11px for form labels, 13px-18px for titles, 28px-38px for hero
- Weights: 400 regular, 500 medium, 600 semibold, 700 bold, 800 extrabold
- Tracking: tight for headings `tracking-tight`, wide for labels `tracking-widest uppercase`

## 🔘 Button Layout (Exact)
- **Homepage**: `Login` 36px height, 4px radius, blue bg, white text 11px semibold + arrow icon, `Sign-up` cream bg with border
- **Login**: Two equal 36px buttons side-by-side, 6px radius, blue bg, white 11px semibold + arrow
- **Signup**: Full-width 36px, 4px radius, dark blue bg `#1565C0`, white 11px semibold + arrow, disabled opacity 60%

## 📐 Screen Dimensions
- `w-screen` (100vw) + `min-h-screen` (100vh) fully encapsulates viewport
- `overflow-y-auto` + `overflow-x-hidden` - scrollable when long
- `max-w-[1200px]` centered container for content
- Header `h-[48px]` / `h-[52px]` / `h-[56px]` sticky top
- Form cards `max-w-[480px]` / `max-w-[640px]` centered

## 🔗 Page Mapping
```
/ → HomePage (has Login → /login, Sign-up → /signup)
/login → LoginPage (Sign-up → /signup, Home → /)
/signup → SignupPage (Sign In → /login)
```
All use `useNavigate()` and `<Link>` - no reloads.

## 🚀 Tech Stack (Frontend Only, No Database)
- React 19
- React Router DOM 7
- Tailwind CSS 3.4
- Vite 8
- No backend, no database - pure frontend with mock handlers (alert + navigate)

## 📦 Run
```bash
npm install
npm run dev   # 0.0.0.0:5173
npm run build
```

## 📁 Structure
```
src/
├── assets/
│   ├── notebook-2025.png (generated)
│   ├── homepage-illustration.png (generated)
│   └── signup-banner.png (generated)
├── pages/
│   ├── HomePage.jsx (matches homepage.png)
│   ├── LoginPage.jsx (matches login.png)
│   └── SignupPage.jsx (matches signup.png)
├── App.jsx (router)
├── main.jsx
└── index.css (tailwind + Inter font)
```

All pages are 100% frontend, modeled exactly from provided screenshots.
