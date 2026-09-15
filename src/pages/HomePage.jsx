import { useNavigate } from 'react-router-dom'
import homepageIllustration from '../assets/homepage-illustration.png'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="w-screen min-h-screen bg-[#9CC3E5] flex flex-col overflow-y-auto overflow-x-hidden font-sans">
      {/* HEADER - 56px height, 100% width */}
      <header className="w-full h-[56px] min-h-[56px] bg-white flex items-center justify-between px-6 lg:px-10 border-b border-[#E5E7EB] sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#1E5BDA] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14l2 2 4-4"/></svg>
          </div>
          <div className="leading-none">
            <p className="text-[11px] font-bold text-[#0F172A] tracking-tight">Student Assistant</p>
            <p className="text-[7px] font-semibold tracking-[0.12em] text-[#64748B] uppercase">absence & leave tracking system</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-[11px] font-medium text-[#0F172A]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Homepage
          </button>
          <button className="flex items-center gap-1.5 text-[11px] font-medium text-[#64748B]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 9 15a1.65 1.65 0 0 0-1-1.51V13a2 2 0 0 1 4 0v.49c.38.2.72.47 1 1.51z"/></svg>
            Change mode
          </button>
        </div>
      </header>

      {/* HERO - Identical dimensions to reference: 1200px max-width, 100vw outer */}
      <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full bg-[#E0EDFF] text-[8px] font-bold tracking-widest uppercase text-[#1E5BDA] border border-[#BFDBFE]">Library Services</span>
            <h1 className="font-display font-extrabold text-[32px] lg:text-[38px] leading-[1.05] tracking-tight text-[#0F172A] mt-3">
              Student Assistant<br />
              <span className="text-[#1E5BDA]">absence & leave</span><br />
              tracking system
            </h1>
            <p className="text-[11px] leading-relaxed text-[#475569] mt-3 max-w-[380px]">
              A centralized platform for managing schedules, attendance, leave, shift exchanges and working hours across the iCenter. Part of Student Assistant absence & leave tracking system.
            </p>
          </div>

          <div className="flex gap-3 mt-2">
            <button onClick={() => navigate('/login')} className="h-[36px] px-6 rounded-[4px] bg-[#1E5BDA] text-white text-[11px] font-semibold flex items-center gap-1.5 hover:bg-[#1E40AF] transition-colors">
              Login
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button onClick={() => navigate('/signup')} className="h-[36px] px-6 rounded-[4px] bg-[#FFFBEB] border border-[#E5D3A0] text-[#92400E] text-[11px] font-semibold hover:bg-[#FEF3C7] transition-colors">
              Sign-up
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[480px] bg-white rounded-[8px] p-2 shadow-sm border border-[#E2E8F0]">
            <img src={homepageIllustration} alt="Student Assistant absence & leave tracking system illustration" className="w-full h-auto rounded-[6px] object-cover" />
          </div>
        </div>
      </section>

      {/* EFFORTLESS SECTION */}
      <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="bg-[#F1F5F9] rounded-[8px] border border-[#E2E8F0] p-4 shadow-sm">
            <p className="text-[8px] font-bold tracking-widest uppercase text-[#64748B] text-center mb-3">Student Assistant absence & leave tracking system - Staff Hub</p>
            <div className="bg-white rounded-[6px] border border-[#E2E8F0] p-3">
              <div className="flex justify-between items-center mb-3">
                <p className="text-[9px] font-bold text-[#0F172A]">APPROVED LEAVE</p>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-[8px] text-center text-[#64748B] mb-2">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-[8px]">
                {['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','','','',''].map((d,i) => (
                  <div key={i} className={`h-6 flex items-center justify-center rounded ${['10','15','22','28'].includes(d) ? 'bg-emerald-100 text-emerald-700 font-bold' : d ? 'text-[#334155]' : ''}`}>
                    {d && <span className="relative">{d}{['10','15'].includes(d) && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></span>}</span>}
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-[#F1F5F9] flex justify-between text-[7px]">
                <div><p className="font-bold text-[#0F172A]">TOTAL REQUESTS: 12</p><p className="text-[#64748B]">APPROVED</p></div>
                <div><p className="font-bold text-[#0F172A]">PENDING APPROVAL: 1</p><p className="text-[#64748B]">EFFICIENCY SCORE: 95%</p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          <div>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#DBEAFE] text-[7px] font-bold tracking-widest uppercase text-[#1E5BDA]">Real-time Management</span>
            <h2 className="text-[16px] font-bold text-[#0F172A] mt-2 leading-tight">Effortless Absence & Leave<br/>Monitoring</h2>
            <p className="text-[9px] text-[#64748B] leading-relaxed mt-2 max-w-[380px]">
              Ditch the spreadsheets. Student Assistant absence & leave tracking system digital dashboard allows supervisor to view check-ins, verify absences, and manage leave requests in a single interface.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-1">
            {["Visual calendar for department-wide scheduling","One-click verification for medical leaves","Historical logs for payroll reconciliation","Customized leave categories (Sick, Personal, Research)"].map((t,i)=>(
              <div key={i} className="flex items-center gap-2 text-[9px] text-[#334155]">
                <span className="w-3 h-3 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#1E5BDA" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATED NOTIFICATIONS */}
      <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-1 text-[8px] font-bold tracking-widest uppercase text-[#D97706]">Key Features</span>
          <h2 className="text-[16px] font-bold text-[#0F172A] mt-2">Automated Notifications & Alerts</h2>
          <p className="text-[9px] text-[#475569] mt-2 max-w-[380px] leading-relaxed">
            Student Assistant absence & leave tracking system proactively notifies relevant staff via email and app alerts whenever a student assistant logs an absence or submits a time-off request.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-5 max-w-[380px]">
            <div className="bg-white rounded-[6px] border border-[#E2E8F0] p-3">
              <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1E5BDA" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <p className="text-[9px] font-bold text-[#0F172A]">Instant Alerts</p>
              <p className="text-[7px] text-[#64748B] mt-1">Receive real-time push notifications for last-minute scheduling changes.</p>
            </div>
            <div className="bg-white rounded-[6px] border border-[#E2E8F0] p-3">
              <div className="w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1E5BDA" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <p className="text-[9px] font-bold text-[#0F172A]">Status Updates</p>
              <p className="text-[7px] text-[#64748B] mt-1">Students are automatically notified when their leave status changes.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[320px] h-[200px] bg-[#DBEAFE]/50 rounded-[12px] flex items-center justify-center overflow-hidden">
            <div className="relative w-[140px] bg-white rounded-[16px] border-4 border-[#0F172A] p-2 shadow-xl">
              <div className="w-8 h-1 bg-[#0F172A] rounded-full mx-auto mb-3"></div>
              <div className="bg-[#F1F5F9] rounded-[8px] p-2">
                <p className="text-[6px] font-bold text-[#0F172A]">Leave Request Update</p>
                <p className="text-[5px] text-[#64748B] mt-1">Your request has been approved.</p>
                <div className="mt-2 flex justify-end"><span className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center"><svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR EVERY ROLE */}
      <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-16 flex flex-col items-center">
        <h2 className="text-[16px] font-bold text-[#0F172A]">Built for Every Role</h2>
        <p className="text-[9px] text-[#64748B] mt-1 text-center max-w-[400px]">Student Assistant absence & leave tracking system simplifies workflow for all roles.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-[900px]">
          {[
            { title: "Administrators", desc: "Oversee department-wide attendance, generate payroll reports, and manage staffing levels with comprehensive analytics." },
            { title: "Supervisors", desc: "Approve or deny leave requests in seconds, view daily team schedules, and communicate directly with your student staff." },
            { title: "Student Assistant", desc: "Easily log absences, track remaining leave balance, and receive instant status updates on pending requests via mobile." },
          ].map((card,i)=>(
            <div key={i} className="bg-white rounded-[6px] border border-[#E2E8F0] p-5 flex flex-col items-center text-center shadow-sm">
              <p className="text-[10px] font-bold text-[#0F172A]">{card.title}</p>
              <p className="text-[8px] text-[#64748B] mt-2 leading-relaxed">{card.desc}</p>
              <button className="mt-4 text-[8px] font-semibold text-[#1E5BDA] flex items-center gap-1">Learn More <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
            </div>
          ))}
        </div>
        <button className="mt-6 h-[28px] px-4 rounded-[4px] border border-[#CBD5E1] bg-transparent text-[8px] font-medium text-[#64748B]">Contact Sales</button>
      </section>

      {/* FOOTER - 100% width */}
      <footer className="w-full bg-[#8FB3D6]/60 border-t border-[#9CC3E5] mt-auto">
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-[11px] font-bold text-[#0F172A]">Student Assistant absence & leave tracking system</p>
            <p className="text-[8px] text-[#475569] mt-1">Contact Us</p>
            <div className="mt-3 space-y-2 text-[8px] text-[#475569]">
              <div className="flex gap-1.5"><span>10 OR tambo Witbank, Emalahleni, 1034, South Africa.</span></div>
              <div className="flex gap-1.5"><span>+27 (0)86 110 2421</span></div>
              <div className="flex gap-1.5"><a href="mailto:general@tut.ac.za" className="underline">general@tut.ac.za</a></div>
            </div>
          </div>
          <div><p className="text-[11px] font-bold text-[#0F172A]">Platform</p><ul className="mt-3 space-y-1.5 text-[8px] text-[#475569]"><li>Features</li><li>Documentation</li><li>Support Center</li><li>Status</li></ul></div>
          <div><p className="text-[11px] font-bold text-[#0F172A]">Legal</p><ul className="mt-3 space-y-1.5 text-[8px] text-[#475569]"><li>Privacy Policy</li><li>Terms of Service</li><li>Security</li><li>Compliance</li></ul></div>
          <div><p className="text-[11px] font-bold text-[#0F172A]">Connect</p><p className="text-[7px] text-[#64748B] mt-3">Ensuring seamless academic scheduling for Student Assistant absence & leave tracking system.</p></div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-10 py-4 border-t border-[#A0C4E3] flex justify-between items-center text-[7px] text-[#475569]">
          <span>© 2026 Student Assistant absence & leave tracking system. All rights reserved.</span>
          <div className="flex gap-3"><span>Accessibility</span><span>Contact Support</span></div>
        </div>
      </footer>
    </div>
  )
}
