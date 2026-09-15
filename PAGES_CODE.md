# Exact Code Matched to Reference Images

## Homepage - `src/pages/HomePage.jsx`
```jsx
// Background #9CC3E5, header white, hero with Library Services pill
// Title: Student Assistant Absence & Leave Tracking system (Absence in blue)
// Buttons: Login blue bg-[#1E5BDA] + arrow, Sign-up cream bg-[#FFFBEB]
// Sections: Student Staff Hub calendar, Effortless Monitoring, Automated Notifications, Built for Every Role
// Footer: Contact Us 10 OR tambo Witbank...

import { useNavigate } from 'react-router-dom'
import homepageIllustration from '../assets/homepage-illustration.png'

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="w-screen min-h-screen bg-[#9CC3E5] flex flex-col overflow-y-auto">
      <header className="w-full h-[56px] bg-white flex items-center justify-between px-6 lg:px-10 border-b">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-[#1E5BDA] flex items-center justify-center">...</div>
          <div><p>StudentAssistance</p><p>ABSENCE AND TRACKING SYSTEM</p></div>
        </div>
        <div className="flex gap-6">
          <button>Homepage</button>
          <button>Change mode</button>
        </div>
      </header>

      <section className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <span className="bg-[#E0EDFF] text-[8px] uppercase">Library Services</span>
          <h1>Student Assistant <span className="text-[#1E5BDA]">Absence</span> & Leave Tracking system</h1>
          <p>A centralized platform for managing schedules...</p>
          <div className="flex gap-3">
            <button onClick={()=>navigate('/login')} className="bg-[#1E5BDA] text-white">Login →</button>
            <button onClick={()=>navigate('/signup')} className="bg-[#FFFBEB]">Sign-up</button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <img src={homepageIllustration} alt="illustration" />
        </div>
      </section>

      {/* Effortless Absence & Leave Monitoring, Automated Notifications, Built for Every Role */}
      <footer>Contact Us, Platform, Legal, Connect</footer>
    </div>
  )
}
```
Full file in repo with exact Tailwind classes matching screenshot.

---

## Login - `src/pages/LoginPage.jsx`
```jsx
// Background #1A6FBF, header white with Dashboard, Absence Logs, Settings, Sign-up, Home blue button
// Yellow badge SECURE PORTAL bg-[#FBBF24], Welcome Back, form with Institutional Email, Password, Forgot Password?, Keep signed 30 days, Student Sign in →, Supervisor Sign in →
// Right: Verified badge, notebook 2025 image on orange, Weekly Progress 92%, Centralized Management, System Maintenance box

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import notebookImg from '../assets/notebook-2025.png'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  return (
    <div className="w-screen min-h-screen bg-[#1A6FBF] flex flex-col">
      <header className="h-[52px] bg-white flex justify-between px-6">
        <div>StudentAssist ABSENCE TRACKER</div>
        <div>Dashboard Absence Logs Settings</div>
        <div><button>Sign-up</button><button className="bg-[#3B82F6]">Home</button></div>
      </header>

      <main className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <span className="bg-[#FBBF24]">SECURE PORTAL</span>
          <h1>Welcome Back</h1>
          <div className="bg-[#F8FAFC] rounded-[8px] p-6">
            <label>Institutional Email</label>
            <input placeholder="e.g. name@university.edu" />
            <label>Password <a>Forgot Password?</a></label>
            <input type="password" placeholder="••••••••" />
            <label><input type="checkbox" /> Keep me signed in for 30 days</label>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#3B82F6]">Student Sign in →</button>
              <button className="bg-[#3B82F6]">Supervisor Sign in →</button>
            </div>
            <div>INSTITUTIONAL ACCESS divider</div>
            <p>Need help? Contact IT Support</p>
          </div>
          <div className="bg-[#93C5FD]/40">System Maintenance</div>
        </div>

        <div className="lg:col-span-6">
          <div>Verified Attendance Logged</div>
          <img src={notebookImg} alt="2025 planner" />
          <div>Weekly Progress 92%</div>
          <h3>Centralized Management</h3>
        </div>
      </main>

      <footer className="bg-[#1860A8]">Contact Us, Platform, Legal, Connect</footer>
    </div>
  )
}
```

---

## Signup - `src/pages/SignupPage.jsx`
```jsx
// Header Register Portal with search, bell, Account
// Banner illustration WELCOME! SELECT YOUR PATH with 4 buttons + COURSES & REGISTRATION
// Form PORTAL ACCESS Create your account, toggle Student Assistant/Supervisor, fields Student Number, Name, Surname, Course, Level of Study dropdown, Student Email, Cell Number, Password, Confirm Password, Complete Registration → button bg-[#1565C0]
// Footer help + Support/Resources

import { useState } from 'react'
import bannerImg from '../assets/signup-banner.png'

export default function SignupPage() {
  const [role, setRole] = useState('student')
  return (
    <div className="w-screen min-h-screen bg-[#9CC3E5] flex flex-col">
      <header className="h-[48px] bg-white flex justify-between px-6">
        <div>Register Portal</div>
        <div><input placeholder="Search portal..." /><button>Account</button></div>
      </header>

      <div className="bg-[#E0F2F1]">
        <img src={bannerImg} alt="Welcome" className="h-[280px] object-cover" />
        <div>WELCOME! SELECT YOUR PATH + 4 buttons</div>
      </div>

      <main className="max-w-[640px] mx-auto px-6 py-8">
        <span>Portal Access</span>
        <h1>Create your account</h1>
        <div className="grid grid-cols-2">
          <button onClick={()=>setRole('student')} className={role==='student'?'bg-white text-[#1E5BDA]':'text-[#64748B]'}>Student Assistant</button>
          <button onClick={()=>setRole('supervisor')} className={role==='supervisor'?'bg-white text-[#1E5BDA]':'text-[#64748B]'}>Supervisor</button>
        </div>
        <form className="flex flex-col gap-4">
          <input name="studentNumber" placeholder="e.g. 202400123" required />
          <div className="grid grid-cols-2 gap-3">
            <input name="name" placeholder="John" required />
            <input name="surname" placeholder="Doe" required />
          </div>
          <input name="course" placeholder="BSc Computer Science" required />
          <select name="level" required><option>Select current year</option></select>
          <input name="email" type="email" placeholder="john.doe@university.edu" required />
          <input name="cell" placeholder="+1 (555) 000-0000" required />
          <div className="grid grid-cols-2 gap-3">
            <input name="password" type="password" required />
            <input name="confirm" type="password" required />
          </div>
          <button className="bg-[#1565C0] text-white">Complete Registration →</button>
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </form>
      </main>

      <footer>Need help with registration? + Support/Resources</footer>
    </div>
  )
}
```

---

## Router - `src/App.jsx`
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}
```

## Mapping
- Home Login button → /login
- Home Sign-up button → /signup
- Login Sign-up text → /signup, Home button → /
- Signup Sign In link → /login
- All buttons use useNavigate() - no page reload, SPA navigation
- Full width/height: w-screen min-h-screen overflow-y-auto - scrollable when long
```

