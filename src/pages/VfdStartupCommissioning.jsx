import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Clock, Wrench, Phone } from 'lucide-react'

const coreServices = [
  'Startup and commissioning of Variable Frequency Drives',
  'Startup and commissioning of soft starters',
  'Shop and field repairs',
  'Emergency service available 24/7, year-round',
  'Parameter setup and optimization for the specific application',
  'Motor and cable testing prior to startup',
  'Control system verification and I/O checkout',
]

const pmChecklist = [
  {
    title: 'Control System Verification',
    desc: 'Review all control wiring, I/O, and interlock logic to confirm correct and safe operation.',
  },
  {
    title: 'Equipment Cleaning & Inspection',
    desc: 'Remove contamination and inspect all internal components for signs of wear, damage, or overheating.',
  },
  {
    title: 'Cooling System Evaluation',
    desc: 'Inspect fans, heat sinks, and airflow paths — inadequate cooling is a leading cause of premature VFD failure.',
  },
  {
    title: 'Motor & Cable Testing',
    desc: 'Verify insulation integrity and identify potential cable or motor winding issues before they cause a failure.',
  },
  {
    title: 'Connection Assessment',
    desc: 'Check all power and control connections for proper torque — loose terminals are a common cause of erratic performance.',
  },
  {
    title: 'Programming Review',
    desc: 'Confirm all parameter setpoints remain correct for the application and comply with manufacturer recommendations.',
  },
  {
    title: 'Component Analysis',
    desc: 'Test DC bus, diode bridge, and capacitors to detect potential failure points well in advance.',
  },
  {
    title: 'Detailed Inspection Report',
    desc: 'Document all findings, parameter backups, and recommended corrective actions for your records.',
  },
]

export default function VfdStartupCommissioning() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f6cc41" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/25 to-transparent hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/electrical-services" className="hover:text-gold transition-colors">Electrical Services</Link>
            <span>/</span>
            <span className="text-gray-300">VFD Startup & Commissioning</span>
          </div>
          <div className="gold-bar" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">VFD Startup &<br />Commissioning</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Startup, commissioning, and repair services for Variable Frequency Drives and soft
            starters. With experience across nearly every VFD manufacturer and application type,
            we ensure every drive is correctly configured and protected from day one.
          </p>
        </div>
      </section>

      {/* Core offering + callouts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">What We Provide</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team has extensive experience with nearly every VFD manufacturer across diverse
                industrial applications. Operating since 1988, we've built an excellent reputation
                for reliable, expert service throughout Alberta.
              </p>
              <ul className="space-y-3">
                {coreServices.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 p-8 hover:border-gold transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold/10 p-2">
                    <Zap size={20} className="text-gold" fill="currentColor" />
                  </div>
                  <h3 className="text-dark font-bold text-lg">Field & Shop Services</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We offer both on-site commissioning at your facility and shop repairs at our Stony
                  Plain location. Whether it's a new installation or a drive requiring reconfiguration,
                  our technicians work where it's most convenient for you.
                </p>
              </div>

              <div className="bg-dark border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold/10 p-2">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold text-lg">24/7 Emergency Response</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  VFD failures don't follow business hours. Our team is available around the clock,
                  year-round for emergency service — minimizing downtime when it matters most.
                </p>
                <a href="tel:7809688859" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-75 transition-opacity">
                  <Phone size={14} /> 780-968-8859
                </a>
              </div>

              <div className="bg-gold/10 border-l-4 border-gold p-6">
                <div className="flex items-start gap-3">
                  <Wrench size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-dark font-medium text-sm leading-relaxed">
                    All repairs and commissioning work are performed by experienced Engineering
                    Technologists and Electricians — not entry-level technicians.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Commissioning & Maintenance Checklist</h2>
            <p className="section-subtitle">
              Every commissioning and preventative maintenance visit covers each of the following
              items — documented in a full inspection report provided after every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pmChecklist.map((item, i) => (
              <div key={item.title} className="bg-white border border-gray-100 p-6 hover:border-gold hover:shadow-lg transition-all duration-300">
                <div className="text-gold font-black text-2xl mb-4 opacity-40">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-dark font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundImage: "url('/images/image-1998.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gold opacity-80" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">Need a VFD Commissioned?</h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Contact us to schedule startup commissioning or emergency service. Available 24/7.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-4 hover:bg-dark/80 transition-colors">
              Get in Touch <ArrowRight size={18} />
            </Link>
            <a href="tel:7809688859" className="inline-flex items-center gap-2 border-2 border-dark text-dark font-semibold px-8 py-4 hover:bg-dark hover:text-white transition-colors">
              <Phone size={16} /> 780-968-8859
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
