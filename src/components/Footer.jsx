import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-primary text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-[18px]">iC</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-[18px] tracking-tight">iCenter</span>
                <span className="text-[10px] font-semibold tracking-[0.18em] text-blue-200 uppercase">DEMO</span>
              </div>
            </div>
            <p className="text-[14px] text-blue-100/80 max-w-[380px] leading-relaxed">
              Streamlining Student Assistant workforce management with smart absence tracking, leave approvals, and real-time reporting.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs">𝕏</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs">in</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs">✉</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[13px] tracking-widest uppercase text-blue-200 mb-4">Product</h4>
            <ul className="space-y-3 text-[14px] text-blue-100/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Login Portal</Link></li>
              <li><Link to="/signup" className="hover:text-white transition-colors">Create Account</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[13px] tracking-widest uppercase text-blue-200 mb-4">Support</h4>
            <ul className="space-y-3 text-[14px] text-blue-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><span className="text-blue-100/50">support@icenter.edu</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-blue-200/60">© 2026 iCenter DEMO. Student Assistant Management System.</p>
          <p className="text-[12px] text-blue-200/60">Built for academic excellence • v2.4.1</p>
        </div>
      </div>
    </footer>
  )
}
