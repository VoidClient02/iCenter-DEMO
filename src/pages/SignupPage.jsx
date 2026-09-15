import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bannerImg from '../assets/signup-banner.png'

export default function SignupPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState('student')
  const [form, setForm] = useState({
    studentNumber: '',
    name: '',
    surname: '',
    course: '',
    level: '',
    email: '',
    cell: '',
    password: '',
    confirm: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) {
      alert("Passwords don't match")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert(`Account created for ${form.name} ${form.surname} as ${role}!`)
      navigate('/login')
    }, 1200)
  }

  return (
    <div className="w-screen min-h-screen bg-[#9CC3E5] flex flex-col overflow-y-auto overflow-x-hidden font-sans">
      {/* TOP HEADER - Register Portal */}
      <header className="w-full h-[48px] bg-white flex items-center justify-between px-6 lg:px-10 border-b border-[#E5E7EB] shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#1E5BDA] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <p className="text-[13px] font-bold text-[#0F172A]">Register Portal</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#94A3B8]">
            <div className="w-[500px] h-[28px] rounded-[4px] border border-[#E5E7EB] bg-[#F8FAFC]"></div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input placeholder="Search portal..." className="h-[28px] w-[160px] pl-7 pr-2 rounded-[4px] border border-[#E5E7EB] bg-white text-[11px] placeholder:text-[#94A3B8]" />
            </div>
            <button className="w-7 h-7 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-6 9-6 9h18s-6-2-6-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <button className="h-[28px] px-3 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] flex items-center gap-1.5 text-[11px] font-medium text-[#0F172A]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="8" r="0.5" fill="currentColor"/></svg>
              Account
            </button>
          </div>
        </div>
      </header>

      {/* BANNER ILLUSTRATION */}
      <div className="w-full bg-[#E0F2F1] border-b border-[#B2DFDB] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative">
          <img src={bannerImg} alt="Welcome banner" className="w-full h-[280px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-6">
            <div className="bg-white/90 backdrop-blur rounded-[10px] shadow-lg border border-[#E2E8F0] px-6 py-3 flex flex-col items-center">
              <p className="text-[16px] font-extrabold tracking-tight text-[#0F172A]">WELCOME!</p>
              <p className="text-[10px] font-bold tracking-wide text-[#0F172A]">SELECT YOUR PATH</p>
              <div className="grid grid-cols-4 gap-2 mt-3">
                {[
                  { label: "BROWSE COURSES", icon: "📖", color: "bg-[#1E5B5A] text-white" },
                  { label: "REGISTER NOW", icon: "📅", color: "bg-[#F59E0B] text-white" },
                  { label: "VIEW SCHEDULE", icon: "🗓️", color: "bg-[#E2E8F0] text-[#475569]" },
                  { label: "GET SUPPORT", icon: "🎧", color: "bg-[#CCFBF1] text-[#0F766E]" },
                ].map((b,i)=>(
                  <div key={i} className={`w-[90px] h-[54px] rounded-[8px] ${b.color} flex flex-col items-center justify-center border border-black/5`}>
                    <span className="text-[16px]">{b.icon}</span>
                    <span className="text-[7px] font-bold tracking-wide mt-0.5 text-center leading-none">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 bg-white rounded-[8px] shadow-md border border-[#E2E8F0] px-4 py-2 flex items-center gap-3">
              <p className="text-[9px] font-bold text-[#0F172A]">COURSES & REGISTRATION</p>
              <div className="w-20 h-1 bg-[#E2E8F0] rounded-full overflow-hidden"><div className="w-2/3 h-full bg-[#1E5BDA]"></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <main className="flex-1 w-full max-w-[640px] mx-auto px-6 py-8">
        <div className="mb-6">
          <span className="inline-flex items-center gap-1 text-[10px] tracking-widest uppercase font-semibold text-[#1E5BDA]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Portal Access
          </span>
          <h1 className="text-[18px] font-bold text-[#0F172A] mt-1">Create your account</h1>
          <p className="text-[11px] text-[#475569] mt-1">Select your role and provide your academic details to join the portal.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Role Toggle */}
          <div className="grid grid-cols-2 gap-1 p-1 rounded-[4px] bg-[#E2E8F0] border border-[#CBD5E1]">
            <button type="button" onClick={()=>setRole('student')} className={`h-[30px] rounded-[3px] text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors ${role==='student' ? 'bg-white text-[#1E5BDA] shadow-sm border border-[#E2E8F0]' : 'text-[#64748B]'}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Student Assistant
            </button>
            <button type="button" onClick={()=>setRole('supervisor')} className={`h-[30px] rounded-[3px] text-[11px] font-medium flex items-center justify-center gap-1.5 transition-colors ${role==='supervisor' ? 'bg-white text-[#1E5BDA] shadow-sm border border-[#E2E8F0]' : 'text-[#64748B]'}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Supervisor
            </button>
          </div>

          <div>
            <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><span className="text-[#94A3B8]">#</span> Student Number <span className="text-[#EF4444]">*</span></label>
            <input name="studentNumber" value={form.studentNumber} onChange={handleChange} placeholder="e.g. 202400123" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1E5BDA]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-medium text-[#0F172A]">Name <span className="text-[#EF4444]">*</span></label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="John" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] focus:outline-none focus:border-[#1E5BDA]" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[#0F172A]">Surname <span className="text-[#EF4444]">*</span></label>
              <input name="surname" value={form.surname} onChange={handleChange} placeholder="Doe" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] focus:outline-none focus:border-[#1E5BDA]" />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Course <span className="text-[#EF4444]">*</span></label>
            <input name="course" value={form.course} onChange={handleChange} placeholder="BSc Computer Science" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1E5BDA]" />
          </div>

          <div>
            <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Level of Study <span className="text-[#EF4444]">*</span></label>
            <div className="relative mt-1">
              <select name="level" value={form.level} onChange={handleChange} required className="w-full h-[32px] px-3 pr-8 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] focus:outline-none focus:border-[#1E5BDA] appearance-none">
                <option value="">Select current year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="postgrad">Postgraduate</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#475569]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Student Email <span className="text-[#EF4444]">*</span></label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john.doe@university.edu" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1E5BDA]" />
          </div>

          <div>
            <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Cell Number <span className="text-[#EF4444]">*</span></label>
            <input name="cell" value={form.cell} onChange={handleChange} placeholder="+1 (555) 000-0000" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#1E5BDA]" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Password <span className="text-[#EF4444]">*</span></label>
              <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="•••••••" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] focus:outline-none focus:border-[#1E5BDA]" />
            </div>
            <div>
              <label className="flex items-center gap-1 text-[11px] font-medium text-[#0F172A]"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Confirm Password <span className="text-[#EF4444]">*</span></label>
              <input name="confirm" type="password" value={form.confirm} onChange={handleChange} placeholder="•••••••" required className="mt-1 w-full h-[32px] px-3 rounded-[4px] border border-[#CBD5E1] bg-white text-[11px] focus:outline-none focus:border-[#1E5BDA]" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="mt-4 w-full h-[36px] rounded-[4px] bg-[#1565C0] text-white text-[11px] font-semibold flex items-center justify-center gap-2 hover:bg-[#0D47A1] disabled:opacity-60 transition-colors">
            {loading ? 'Registering...' : <>Complete Registration <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></>}
          </button>

          <div className="border-t border-[#CBD5E1] pt-4 mt-2 flex flex-col items-center gap-2">
            <p className="text-[9px] text-[#64748B] text-center max-w-[420px] leading-snug">
              By clicking "Complete Registration", you agree to the EduRegister Portal Terms of Service and Privacy Policy.
            </p>
            <p className="text-[10px] text-[#64748B]">
              Already have an account? <Link to="/login" className="font-semibold text-[#1E5BDA] hover:underline">Sign In</Link>
            </p>
          </div>
        </form>
      </main>

      {/* HELP SECTION */}
      <section className="w-full bg-[#9CC3E5] border-t border-[#E2E8F0] py-10">
        <div className="max-w-[640px] mx-auto px-6 flex gap-3">
          <div className="w-8 h-8 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E5BDA" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-[#0F172A]">Need help with registration?</p>
            <p className="text-[9px] text-[#475569] mt-1 leading-snug max-w-[420px]">If you encounter any issues with the institutional verification or cannot find your course, please reach out to our admissions helpdesk.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#B8D0E8] border-t border-[#9CC3E5]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-6 text-[9px] text-[#475569]">
          <div>
            <p className="font-bold text-[#0F172A] text-[10px]">© 2026 Register Portal</p>
            <p className="mt-1 max-w-[320px] leading-snug">All rights reserved. Empowering academic institutions with seamless user management and streamlined registration workflows.</p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="font-bold tracking-widest uppercase text-[8px] text-[#64748B]">Support</p>
              <div className="mt-2 space-y-1">
                <p className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> support@register.edu</p>
                <p className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> +1 (555) 012-3456</p>
              </div>
            </div>
            <div>
              <p className="font-bold tracking-widest uppercase text-[8px] text-[#64748B]">Resources</p>
              <div className="mt-2 space-y-1">
                <p className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> Institutional Help Center <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></p>
                <p className="flex items-center gap-1"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg> Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
