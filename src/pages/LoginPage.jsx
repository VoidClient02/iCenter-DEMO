import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', role: 'student_assistant', remember: false })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Simulate success - navigate to home with toast
      alert(`Welcome back! Logged in as ${form.role.replace('_',' ')}`)
      navigate('/')
    }, 1200)
  }

  return (
    <div className="w-screen min-h-screen flex bg-[#F8FAFC] overflow-hidden">
      {/* Left Branding Panel - Desktop only */}
      <div className="hidden lg:flex w-[46%] min-h-screen bg-primary relative overflow-hidden flex-col justify-between p-10">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-white/[0.06] blur-[80px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[70px] translate-y-1/3 -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/5" />

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
              Manage your<br />
              <span className="text-blue-200">attendance</span><br />
              seamlessly.
            </h1>
            <p className="text-[15px] text-blue-100/70 leading-relaxed mt-4 max-w-[360px]">
              Trusted by 12 departments to track 500+ Student Assistants daily. Secure, fast, and built for academic workflows.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-[20px] border border-white/10 p-5 max-w-[380px]">
            <div className="flex gap-3">
              <img src={`https://i.pravatar.cc/100?img=32`} alt="" className="w-10 h-10 rounded-full border-2 border-white/20" />
              <div>
                <p className="text-[13px] text-white leading-snug font-medium">“iCenter cut our monthly reporting time from 8 hours to 20 minutes. Game changer for our lab.”</p>
                <p className="text-[11px] text-blue-200/70 mt-2 font-semibold tracking-wide">— Dr. Mensah, Supervisor • CS Dept</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-blue-200/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            System operational • 99.9% uptime • Encrypted
          </div>
        </div>

        <div className="relative z-10 flex justify-between items-center text-[11px] text-blue-200/50">
          <span>© 2026 iCenter DEMO</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 min-h-screen flex flex-col bg-white lg:bg-[#F8FAFC] overflow-y-auto">
        {/* Mobile Header */}
        <div className="lg:hidden w-full px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 z-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-[16px]">iC</span>
            </div>
            <span className="font-display font-bold text-[16px] text-primary">iCenter</span>
          </Link>
          <Link to="/" className="text-[13px] font-semibold text-slate-600">Back to Home</Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-10 lg:py-12">
          <div className="w-full max-w-[420px] flex flex-col">
            {/* Desktop back */}
            <Link to="/" className="hidden lg:inline-flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-primary mb-8 w-fit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to homepage
            </Link>

            <div className="mb-8">
              <h2 className="font-display font-bold text-[28px] tracking-tight text-primary leading-none">Welcome back</h2>
              <p className="text-[14px] text-slate-500 mt-2.5">Sign in to your Student Assistant portal</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Role Selector */}
              <div>
                <label className="text-[12px] font-semibold tracking-wide uppercase text-slate-600 mb-2 block">I am a</label>
                <div className="grid grid-cols-3 gap-2 p-1 rounded-full bg-slate-100 border border-slate-200">
                  {[
                    { id: 'student_assistant', label: 'SA' },
                    { id: 'supervisor', label: 'Supervisor' },
                    { id: 'admin', label: 'Admin' },
                  ].map(r => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, role: r.id }))}
                      className={`py-2.5 rounded-full text-[13px] font-semibold transition-all ${form.role === r.id ? 'bg-white shadow-card text-primary border border-slate-200' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[13px] font-medium text-slate-700 mb-1.5 block">University Email</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@university.edu"
                    className="w-full h-[48px] pl-11 pr-4 rounded-full border border-slate-200 bg-white text-[14px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[13px] font-medium text-slate-700">Password</label>
                  <a href="#" className="text-[12px] font-semibold text-secondary hover:text-secondary-dark">Forgot?</a>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </span>
                  <input
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    required
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full h-[48px] pl-11 pr-11 rounded-full border border-slate-200 bg-white text-[14px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPass ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.53 9.53a3 3 0 1 0 4.24 4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer group">
                <input name="remember" type="checkbox" checked={form.remember} onChange={handleChange} className="w-4 h-4 rounded border-slate-300 text-secondary focus:ring-secondary/20" />
                <span className="text-[13px] text-slate-600 group-hover:text-slate-800">Keep me signed in for 14 days</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-[48px] rounded-full bg-primary text-white font-semibold text-[14px] hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed shadow-soft hover:shadow-medium transition-all flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>Sign In →</>
                )}
              </button>

              <div className="relative my-1 flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-[11px] tracking-widest uppercase font-semibold text-slate-400">Or continue with</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="h-[44px] rounded-full border border-slate-200 bg-white flex items-center justify-center gap-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google
                </button>
                <button type="button" className="h-[44px] rounded-full border border-slate-200 bg-white flex items-center justify-center gap-2 text-[13px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                  <span className="w-[18px] h-[18px] rounded bg-primary text-white flex items-center justify-center text-[10px] font-bold">SSO</span>
                  University SSO
                </button>
              </div>

              <p className="text-center text-[13px] text-slate-500 mt-2">
                Don't have an account? <Link to="/signup" className="font-semibold text-secondary hover:text-secondary-dark">Create one</Link>
              </p>

              <div className="mt-4 p-3 rounded-2xl bg-blue-50 border border-blue-100 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center flex-shrink-0">💡</div>
                <p className="text-[11px] leading-relaxed text-slate-600"><span className="font-semibold text-primary">Demo credentials:</span> Use any email and password. Select role to preview different dashboards. Data is mocked for demonstration.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
