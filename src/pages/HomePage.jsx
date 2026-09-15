import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] flex flex-col overflow-y-auto">
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full relative overflow-hidden">
        {/* Background gradient + shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF]" />
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[80px]" />
        <div className="absolute -bottom-[150px] -left-[150px] w-[500px] h-[500px] rounded-full bg-teal-50 blur-[70px]" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-card w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-600">Live System • Academic Year 2025/26</span>
            </div>

            <h1 className="font-display font-extrabold text-[36px] lg:text-[56px] leading-[0.95] tracking-[-0.03em] text-primary">
              Student Assistant
              <span className="block text-secondary">Absence & Leave</span>
              <span className="block">Tracking System</span>
            </h1>

            <p className="text-[16px] lg:text-[18px] leading-relaxed text-slate-600 max-w-[560px]">
              Simplify attendance, automate leave approvals, and empower supervisors with real-time insights. Built for universities, trusted by departments.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => navigate('/signup')}
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-[15px] shadow-medium hover:bg-primary-dark hover:shadow-lg transition-all flex items-center gap-2"
              >
                Get Started Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-primary font-semibold text-[15px] hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-200/70 mt-2">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[11px] font-bold text-slate-600">
                    {String.fromCharCode(64+i)}
                  </div>
                ))}
              </div>
              <div className="text-[13px]">
                <p className="font-semibold text-primary">Trusted by 500+ Student Assistants</p>
                <p className="text-slate-500">Across 12 departments this semester</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Dashboard Mock */}
          <div className="lg:col-span-6 relative lg:h-[620px] flex items-center justify-center">
            {/* Main Card */}
            <div className="relative w-full max-w-[520px] bg-white rounded-[24px] shadow-medium border border-slate-100 overflow-hidden">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-primary">Today's Overview</p>
                    <p className="text-[11px] text-slate-500">Mon, 15 Sep 2026 • 09:42 AM</p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">Live</div>
              </div>

              {/* Stats Grid */}
              <div className="p-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#F0F7FF] p-4 border border-blue-50">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-500">Present Today</p>
                  <p className="text-[28px] font-bold text-primary mt-1">42<span className="text-[16px] text-slate-400 font-medium">/50</span></p>
                  <div className="mt-3 h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-secondary rounded-full" />
                  </div>
                </div>
                <div className="rounded-2xl bg-[#F0FDF9] p-4 border border-emerald-50">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-500">On Leave</p>
                  <p className="text-[28px] font-bold text-primary mt-1">5</p>
                  <p className="text-[11px] text-emerald-600 mt-2 font-medium">↑ 2 approved today</p>
                </div>
                <div className="rounded-2xl bg-[#FFF7ED] p-4 border border-orange-50">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-500">Late Arrivals</p>
                  <p className="text-[28px] font-bold text-primary mt-1">3</p>
                  <p className="text-[11px] text-orange-600 mt-2 font-medium">Needs review</p>
                </div>
                <div className="rounded-2xl bg-[#FEF2F2] p-4 border border-red-50">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-500">Absent</p>
                  <p className="text-[28px] font-bold text-primary mt-1">0</p>
                  <p className="text-[11px] text-slate-500 mt-2">All accounted for ✓</p>
                </div>
              </div>

              {/* Leave Requests List */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[13px] font-semibold text-primary">Recent Leave Requests</p>
                  <p className="text-[11px] text-secondary font-semibold cursor-pointer">View all</p>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: "Alex Morgan", type: "Sick Leave", time: "2h ago", status: "Pending", color: "bg-amber-100 text-amber-700" },
                    { name: "Sarah Chen", type: "Academic", time: "5h ago", status: "Approved", color: "bg-emerald-100 text-emerald-700" },
                    { name: "James Okoro", type: "Personal", time: "Yesterday", status: "Approved", color: "bg-emerald-100 text-emerald-700" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[11px] font-bold text-slate-600">
                          {r.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-primary leading-none">{r.name}</p>
                          <p className="text-[11px] text-slate-500 mt-1">{r.type} • {r.time}</p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${r.color}`}>{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden lg:flex absolute -right-6 top-10 bg-white rounded-2xl shadow-medium border border-slate-100 p-4 w-[200px] flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
                <p className="text-[12px] font-semibold">Request Approved</p>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">Your leave for Sep 18 has been approved by Dr. Mensah</p>
            </div>

            <div className="hidden lg:flex absolute -left-10 bottom-20 bg-primary text-white rounded-2xl shadow-medium p-4 w-[190px]">
              <div>
                <p className="text-[11px] text-blue-200 uppercase tracking-widest font-semibold">Monthly Report</p>
                <p className="text-[20px] font-bold mt-1">96.4%</p>
                <p className="text-[11px] text-blue-100/70">Attendance rate</p>
                <div className="mt-3 flex gap-1">
                  {[40,70,45,90,65,80,60].map((h,i)=><div key={i} className="flex-1 bg-white/20 rounded-full" style={{height: '24px'}}><div className="w-full bg-white rounded-full" style={{height: `${h}%`, marginTop: `${100-h}%`}} /></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="w-full bg-white border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { k: "98.2%", v: "Avg. Attendance", sub: "Last 30 days" },
            { k: "24h", v: "Avg. Approval Time", sub: "For leave requests" },
            { k: "500+", v: "Active Assistants", sub: "Managed daily" },
            { k: "0", v: "Data Loss", sub: "Since launch 2024" },
          ].map((s,i)=>(
            <div key={i} className="flex flex-col">
              <p className="text-[32px] font-bold tracking-tight text-primary">{s.k}</p>
              <p className="text-[14px] font-semibold text-slate-700 mt-1">{s.v}</p>
              <p className="text-[12px] text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="w-full bg-[#F8FAFC] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="max-w-[720px] mx-auto text-center mb-14">
            <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold tracking-widest uppercase text-secondary mb-4">Features</div>
            <h2 className="font-display font-bold text-[32px] lg:text-[44px] leading-[0.95] tracking-tight text-primary">Everything you need to manage your SA workforce</h2>
            <p className="text-[16px] text-slate-600 mt-4 leading-relaxed">From clock-ins to leave balances, we automate the busywork so supervisors can focus on mentoring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📅", title: "Smart Absence Tracking", desc: "Real-time clock-in, geo-fencing, and automatic late detection with instant notifications.", color: "bg-blue-50" },
              { icon: "✈️", title: "Leave Management", desc: "Sick, academic, personal - request in 30 seconds, track balance, get approved fast.", color: "bg-emerald-50" },
              { icon: "✅", title: "One-Click Approvals", desc: "Supervisors get smart inbox with context, history, and bulk approval actions.", color: "bg-violet-50" },
              { icon: "📊", title: "Analytics & Reports", desc: "Attendance trends, leave patterns, payroll-ready exports. No spreadsheets needed.", color: "bg-amber-50" },
              { icon: "🔔", title: "Automated Alerts", desc: "Slack, email, SMS - stay informed on absences, low balances, and policy violations.", color: "bg-rose-50" },
              { icon: "🔒", title: "Role-Based Access", desc: "SA, Supervisor, Admin, HR - granular permissions keep data secure and compliant.", color: "bg-cyan-50" },
            ].map((f,i)=>(
              <div key={i} className="group bg-white rounded-[20px] p-7 border border-slate-100 shadow-card hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center text-[20px] mb-5 group-hover:scale-110 transition-transform`}>{f.icon}</div>
                <h3 className="font-semibold text-[17px] text-primary">{f.title}</h3>
                <p className="text-[14px] text-slate-600 mt-2 leading-relaxed">{f.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-semibold text-secondary">
                  Learn more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="w-full bg-white py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-[112px]">
            <div className="inline-flex px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest uppercase text-slate-600 mb-4">How it Works</div>
            <h2 className="font-display font-bold text-[32px] lg:text-[42px] leading-[0.95] tracking-tight text-primary">From request to approval in 3 simple steps</h2>
            <p className="text-[16px] text-slate-600 mt-4 leading-relaxed">Designed with both students and supervisors in mind. No training required.</p>
            <button onClick={() => navigate('/signup')} className="mt-8 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-[14px] hover:bg-primary-dark transition-colors">Create your account →</button>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {[
              { step: "01", title: "Student requests leave", desc: "SA opens mobile or desktop, selects leave type, dates, reason, and attaches documents if needed. Balance is auto-checked.", meta: "Takes ~30 seconds" },
              { step: "02", title: "Supervisor gets notified", desc: "Smart notification with SA history, team coverage impact, and similar past requests. One-click approve from email or dashboard.", meta: "Avg. response: 2.4 hours" },
              { step: "03", title: "System updates everything", desc: "Calendar, attendance sheet, payroll export, and team dashboard auto-update. SA gets confirmation with next steps.", meta: "Zero manual entry" },
            ].map((s,i)=>(
              <div key={i} className="group relative bg-[#F8FAFC] rounded-[20px] p-8 border border-slate-100 hover:bg-white hover:shadow-medium transition-all">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center font-display font-bold text-[18px] text-primary shadow-card group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                    {s.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[18px] text-primary">{s.title}</h3>
                    <p className="text-[14px] text-slate-600 mt-2 leading-relaxed max-w-[480px]">{s.desc}</p>
                    <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-600">{s.meta}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-[20px] bg-primary p-8 text-white relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-[200px] h-[200px] rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <p className="text-[14px] font-semibold text-blue-200 tracking-widest uppercase">Pro Tip</p>
                <p className="text-[18px] font-medium leading-snug mt-2 max-w-[520px]">Enable auto-approval for sick leaves under 1 day with medical certificate - saves supervisors 4 hours per week on average.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#F8FAFC] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="w-full rounded-[32px] bg-gradient-to-br from-primary to-[#123A66] p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 blur-[60px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[50px] translate-y-1/3 -translate-x-1/4" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display font-bold text-[28px] lg:text-[36px] leading-tight text-white">Ready to eliminate attendance chaos?</h2>
                <p className="text-[16px] text-blue-100/80 mt-3 max-w-[560px]">Join departments saving 10+ hours weekly on SA management. Free setup, no credit card required.</p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
                <button onClick={() => navigate('/signup')} className="px-8 py-4 rounded-full bg-white text-primary font-semibold text-[14px] hover:bg-blue-50 transition-colors">Start Free Trial</button>
                <button onClick={() => navigate('/login')} className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-[14px] hover:bg-white/20 transition-colors">Login to Dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
