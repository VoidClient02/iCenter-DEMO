import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notebookImg from '../assets/notebook-2025.png'

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', keepSigned: false })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(null) // 'student' or 'supervisor'

  const handleSubmit = (role) => {
    if (!form.email || !form.password) {
      alert('Please enter email and password')
      return
    }
    setLoading(role)
    setTimeout(() => {
      setLoading(null)
      alert(`Signed in as ${role}!`)
      navigate('/')
    }, 1000)
  }

  return (
    <div className="w-screen min-h-screen bg-[#1A6FBF] flex flex-col overflow-y-auto overflow-x-hidden font-sans">
      {/* HEADER */}
      <header className="w-full h-[52px] bg-white flex items-center justify-between px-6 lg:px-8 border-b border-[#E5E7EB] shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#1E5BDA] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14l2 2 4-4"/></svg>
          </div>
          <div className="leading-none">
            <p className="text-[13px] font-bold text-[#0F172A] tracking-tight">StudentAssist</p>
            <p className="text-[8px] font-bold tracking-[0.15em] text-[#64748B] uppercase">Absence Tracker</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#0F172A]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Dashboard
          </button>
          <button className="text-[12px] font-medium text-[#64748B]">Absence Logs</button>
          <button className="flex items-center gap-1 text-[12px] font-medium text-[#64748B]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 9 15a1.65 1.65 0 0 0-1-1.51V13a2 2 0 0 1 4 0v.49c.3.2.6.5.9.9"/></svg>
            Settings
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/signup')} className="text-[12px] font-medium text-[#475569] hover:text-[#0F172A]">Sign-up</button>
          <button onClick={() => navigate('/')} className="h-[30px] px-5 rounded-[6px] bg-[#3B82F6] text-white text-[12px] font-semibold hover:bg-[#2563EB] transition-colors">Home</button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT FORM */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#FBBF24] text-[9px] font-bold tracking-wide uppercase text-[#0F172A]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              Secure Portal
            </span>
            <h1 className="text-[28px] font-bold text-[#0F172A] mt-3 tracking-tight">Welcome Back</h1>
            <p className="text-[12px] text-[#475569]/80 mt-2 leading-relaxed max-w-[400px]">
              Sign in to your StudentAssist account to manage absences, approvals, and schedules.
            </p>
          </div>

          <div className="bg-[#F8FAFC] rounded-[8px] border border-[#E2E8F0] p-6 shadow-sm max-w-[480px]">
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[11px] font-medium text-[#0F172A]">Institutional Email</label>
                <div className="relative mt-1.5">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e)=>setForm({...form, email:e.target.value})}
                    placeholder="e.g. name@university.edu"
                    className="w-full h-[36px] pl-9 pr-3 rounded-[6px] border border-[#E2E8F0] bg-white text-[11px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label className="text-[11px] font-medium text-[#0F172A]">Password</label>
                  <Link to="#" className="text-[10px] font-semibold text-[#1E5BDA] hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative mt-1.5">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </span>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e)=>setForm({...form, password:e.target.value})}
                    placeholder="••••••••"
                    className="w-full h-[36px] pl-9 pr-9 rounded-[6px] border border-[#E2E8F0] bg-white text-[11px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6]"
                  />
                  <button type="button" onClick={()=>setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#475569]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.keepSigned} onChange={(e)=>setForm({...form, keepSigned:e.target.checked})} className="w-3.5 h-3.5 rounded border-[#CBD5E1] text-[#3B82F6] focus:ring-[#3B82F6]/20" />
                <span className="text-[11px] text-[#475569]">Keep me signed in for 30 days</span>
              </label>

              <div className="grid grid-cols-2 gap-3 mt-1">
                <button onClick={()=>handleSubmit('Student')} disabled={loading} className="h-[36px] rounded-[6px] bg-[#3B82F6] text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#2563EB] disabled:opacity-60 transition-colors">
                  {loading === 'Student' ? 'Signing...' : <>Student Sign in <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
                </button>
                <button onClick={()=>handleSubmit('Supervisor')} disabled={loading} className="h-[36px] rounded-[6px] bg-[#3B82F6] text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-[#2563EB] disabled:opacity-60 transition-colors">
                  {loading === 'Supervisor' ? 'Signing...' : <>Supervisor Sign in <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
                </button>
              </div>

              <div className="relative flex items-center gap-3 py-2">
                <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#64748B]">Institutional Access</span>
                <div className="flex-1 h-px bg-[#E2E8F0]"></div>
              </div>

              <p className="text-[10px] text-center text-[#64748B]">
                Need help accessing your account? <a href="#" className="font-semibold text-[#1E40AF] hover:underline">Contact IT Support</a>
              </p>
            </div>
          </div>

          <div className="bg-[#93C5FD]/40 backdrop-blur rounded-[10px] border border-[#60A5FA]/30 p-3.5 flex gap-3 max-w-[480px]">
            <div className="w-7 h-7 rounded-full bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#0F172A]">System Maintenance</p>
              <p className="text-[10px] text-[#475569]/80 mt-0.5 leading-snug">The StudentAssist portal will be undergoing scheduled updates this Sunday from 2:00 AM to 4:00 AM EST.</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end gap-6">
          {/* Verified badge */}
          <div className="hidden lg:flex bg-white rounded-[14px] shadow-lg border border-[#E2E8F0] p-3 items-center gap-2.5 self-end mr-8">
            <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14l2 2 4-4"/></svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#0F172A] leading-none">Verified</p>
              <p className="text-[8px] text-[#64748B] mt-0.5">Attendance Logged</p>
            </div>
          </div>

          {/* Main image card */}
          <div className="relative w-full max-w-[420px]">
            <div className="absolute -inset-6 bg-[#60A5FA]/20 rounded-[24px] blur-2xl"></div>
            <div className="relative bg-[#F59E0B] rounded-[14px] overflow-hidden shadow-xl border border-[#FBBF24]/30">
              <img src={notebookImg} alt="2025 planner" className="w-full h-[260px] object-cover" />
            </div>

            {/* Weekly Progress card floating */}
            <div className="absolute -left-6 -bottom-8 bg-[#FFFBEB] rounded-[12px] shadow-lg border border-[#FDE68A] p-3.5 w-[200px]">
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-semibold text-[#0F172A]">Weekly Progress</p>
                <span className="text-[10px] font-bold text-[#1E5BDA]">92%</span>
              </div>
              <div className="mt-2 h-1.5 bg-[#FEF3C7] rounded-full overflow-hidden">
                <div className="h-full w-[92%] bg-[#FBBF24] rounded-full"></div>
              </div>
              <p className="text-[8px] text-[#78716C] mt-2 leading-snug">Departmental assistants have reached target attendance milestones for the current semester.</p>
              <div className="mt-2 w-full h-[14px] bg-gradient-to-r from-[#FBBF24]/30 to-[#F59E0B]/10 rounded blur-[2px]"></div>
            </div>
          </div>

          <div className="mt-10 text-center max-w-[320px]">
            <h3 className="text-[15px] font-bold text-[#0F172A]">Centralized Management</h3>
            <p className="text-[11px] text-[#475569]/70 mt-1.5 leading-relaxed">The primary tool for managing student assistant leave requests, absence tracking, and departmental scheduling efficiency.</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#1860A8] border-t border-[#1E6CB6] mt-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-[13px] font-bold text-[#0F172A]">Contact Us</p>
            <div className="mt-4 space-y-2.5 text-[10px] text-[#1E3A5F]/70">
              <div className="flex gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>10 OR tambo Witbank, Emalahleni, 1034, South Africa.</span>
              </div>
              <div className="flex gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+27 (0)86 110 2421</span>
              </div>
              <div className="flex gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:general@tut.ac.z" className="underline text-[#93C5FD]">general@tut.ac.z</a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-bold text-[#0F172A]">Platform</p>
            <ul className="mt-4 space-y-2 text-[10px] text-[#1E3A5F]/60">
              <li>Features</li>
              <li>Documentation</li>
              <li>Support Center</li>
              <li>Status</li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold text-[#0F172A]">Legal</p>
            <ul className="mt-4 space-y-2 text-[10px] text-[#1E3A5F]/60">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Security</li>
              <li>Administration</li>
            </ul>
          </div>

          <div>
            <p className="text-[13px] font-bold text-[#0F172A]">Connect</p>
            <div className="flex gap-3 mt-4 text-[#1E3A5F]/50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>
            </div>
            <p className="text-[9px] text-[#1E3A5F]/50 mt-4 leading-snug max-w-[200px]">Ensuring seamless academic scheduling and management for all departments.</p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-4 border-t border-[#1E5A9A] flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-[#1E3A5F]/50">
          <span>© 2026 StudentAssist Absence Tracker. All rights reserved.</span>
          <div className="flex gap-4">
            <span>Accessibility</span>
            <span>Contact Support</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
