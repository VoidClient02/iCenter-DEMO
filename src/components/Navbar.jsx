import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'

  if (isAuthPage) return null

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft">
            <span className="text-white font-bold text-[18px] tracking-tight">iC</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-[18px] text-primary tracking-tight">iCenter</span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-secondary uppercase">DEMO</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-[14px] font-medium transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}>Home</Link>
          <a href="#features" className="text-[14px] font-medium text-slate-500 hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-[14px] font-medium text-slate-500 hover:text-primary transition-colors">How it Works</a>
          <a href="#contact" className="text-[14px] font-medium text-slate-500 hover:text-primary transition-colors">Support</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="px-5 py-2.5 text-[14px] font-semibold text-primary hover:bg-slate-50 rounded-full transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-2.5 text-[14px] font-semibold text-white bg-secondary hover:bg-secondary-dark rounded-full shadow-soft transition-all hover:shadow-medium"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium">Home</Link>
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium text-slate-600">Features</a>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-[15px] font-medium text-slate-600">How it Works</a>
          <div className="flex gap-3 pt-4 border-t border-slate-100">
            <button onClick={() => { navigate('/login'); setMobileOpen(false) }} className="flex-1 py-3 rounded-full border border-slate-200 font-semibold text-[14px]">Login</button>
            <button onClick={() => { navigate('/signup'); setMobileOpen(false) }} className="flex-1 py-3 rounded-full bg-secondary text-white font-semibold text-[14px]">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  )
}
