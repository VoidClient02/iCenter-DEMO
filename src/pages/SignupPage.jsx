import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignupPage() {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    studentId: '',
    email: '',
    department: '',
    phone: '',
    role: 'student_assistant',
    password: '',
    confirmPassword: '',
    agree: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match")
      return
    }
    if (!form.agree) {
      alert("Please agree to terms")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert(`Account created for ${form.fullName} as ${form.role}! Please login.`)
      navigate('/login')
    }, 1500)
  }

  return (
    <div className="w-screen min-h-screen flex bg-[#F8FAFC] overflow-hidden">
      {/* Left Panel */}
      <div className="hidden lg:flex w-[46%] min-h-screen bg-primary relative overflow-hidden flex-col justify-between p-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-white/[0.06] blur-[80px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[70px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
              <span className="text-primary font-bold text-[18px]">iC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-[18px] text-white tracking-tight">iCenter</span>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-blue-200 uppercase">DEMO</span>
            </div>
          </Link>
        </div>

        <div className="relative z-10 flex flex-col gap-8">
          <div>
            <h1 className="font-display font-bold text-[40px] leading-[0.95] tracking-tight text-white">
              Join 500+<br />
              <span className="text-blue-200">assistants</span><br />
              tracking smarter.
            </h1>
            <div className="mt-6 space-y-4">
              {[
                { t: "Setup in 2 minutes", d: "No paperwork, instant verification with university email" },
                { t: "Free for students", d: "Full access to leave tracking and absence history" },
                { t: "Supervisor approved", d: "Your department head gets notified automatically" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{item.t}</p>
                    <p className="text-[12px] text-blue-100/60 leading-snug">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[20px] p-4 max-w-[360px] shadow-medium">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold tracking-widest uppercase text-slate-500">Onboarding Progress</p>
              <span className="text-[11px] font-semibold text-secondary">Step 1 of 2</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-secondary rounded-full" />
            </div>
            <p className="text-[12px] text-slate-600 mt-3">You're creating your account. Next: verify email and complete profile.</p>
          </div>
        </div>

        <div className="relative z-10 text-[11px] text-blue-200/50 flex justify-between">
          <span>© 2026 iCenter DEMO</span>
          <span>Secure • Encrypted • FERPA Compliant</span>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 min-h-screen flex flex-col bg-white lg:bg-[#F8FAFC] overflow-y-auto">
        <div className="lg:hidden w-full px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-[16px]">iC</span>
            </div>
            <span className="font-display font-bold text-[16px] text-primary">iCenter</span>
          </Link>
          <Link to="/login" className="text-[13px] font-semibold text-slate-600">Login</Link>
        </div>

        <div className="flex-1 flex items-start justify-center px-6 py-8 lg:py-10">
          <div className="w-full max-w-[520px] flex flex-col">
            <Link to="/" className="hidden lg:inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-primary mb-6 w-fit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Back to homepage
            </Link>

            <div className="mb-6">
              <h2 className="font-display font-bold text-[28px] tracking-tight text-primary leading-none">Create account</h2>
              <p className="text-[14px] text-slate-500 mt-2.5">Start tracking your attendance in less than a minute</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Role */}
              <div>
                <label className="text-[12px] font-semibold tracking-wide uppercase text-slate-600 mb-2 block">Account Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'student_assistant', title: 'Student Assistant', desc: 'Track leave & attendance' },
                    { id: 'supervisor', title: 'Supervisor', desc: 'Approve & manage team' },
                  ].map(r => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, role: r.id }))}
                      className={`text-left p-3.5 rounded-2xl border-2 transition-all ${form.role === r.id ? 'border-secondary bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                    >
                      <p className={`text-[13px] font-semibold ${form.role === r.id ? 'text-primary' : 'text-slate-700'}`}>{r.title}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{r.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Full Name *</label>
                  <input name="fullName" required value={form.fullName} onChange={handleChange} placeholder="Alex Morgan" className="w-full h-[46px] px-4 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Student / Staff ID *</label>
                  <input name="studentId" required value={form.studentId} onChange={handleChange} placeholder="SA-2026-0842" className="w-full h-[46px] px-4 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" />
                </div>
              </div>

              <div>
                <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">University Email *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="alex.morgan@university.edu" className="w-full h-[46px] px-4 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" />
                <p className="text-[11px] text-slate-500 mt-1.5 ml-1">Must be your official .edu address for auto-verification</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Department *</label>
                  <select name="department" required value={form.department} onChange={handleChange} className="w-full h-[46px] px-4 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary">
                    <option value="">Select department</option>
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Business School</option>
                    <option>Library Services</option>
                    <option>Student Affairs</option>
                    <option>Research Lab</option>
                    <option>Administration</option>
                  </select>
                </div>
                <div>
                  <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Phone (optional)</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full h-[46px] px-4 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Password *</label>
                  <div className="relative">
                    <input name="password" type={showPass ? 'text' : 'password'} required value={form.password} onChange={handleChange} placeholder="Min. 8 characters" className="w-full h-[46px] px-4 pr-11 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">Confirm Password *</label>
                  <input name="confirmPassword" type="password" required value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" className="w-full h-[46px] px-4 rounded-full border border-slate-200 bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary" />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-[11px] font-semibold tracking-wide uppercase text-slate-600 mb-2">Password must contain:</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-500">
                  <span className={form.password.length >= 8 ? 'text-emerald-600 font-medium' : ''}>✓ 8+ characters</span>
                  <span className={/[A-Z]/.test(form.password) ? 'text-emerald-600 font-medium' : ''}>✓ Uppercase letter</span>
                  <span className={/[0-9]/.test(form.password) ? 'text-emerald-600 font-medium' : ''}>✓ Number</span>
                  <span className={/[^A-Za-z0-9]/.test(form.password) ? 'text-emerald-600 font-medium' : ''}>✓ Special character</span>
                </div>
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                <input name="agree" type="checkbox" checked={form.agree} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded border-slate-300 text-secondary focus:ring-secondary/20" />
                <span className="text-[12px] leading-snug text-slate-600">I agree to the <a href="#" className="font-semibold text-primary underline">Terms of Service</a> and <a href="#" className="font-semibold text-primary underline">Privacy Policy</a>. I confirm my department and role are accurate.</span>
              </label>

              <button type="submit" disabled={loading} className="w-full h-[48px] rounded-full bg-primary text-white font-semibold text-[14px] hover:bg-primary-dark disabled:opacity-60 shadow-soft hover:shadow-medium transition-all flex items-center justify-center gap-2 mt-2">
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>Create Account →</>
                )}
              </button>

              <p className="text-center text-[13px] text-slate-500">
                Already have an account? <Link to="/login" className="font-semibold text-secondary hover:text-secondary-dark">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
