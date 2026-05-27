import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Code, HardDrive, FileText, Search, Phone } from 'lucide-react'

const sections = [
  {
    icon: <Code size={28} />,
    label: '01',
    title: 'Ensuring Proper VFD Programming',
    body: 'Variable Frequency Drives are often found lacking the correct programming or protection settings for their specific applications. At SEEL, our team has extensive experience with nearly every VFD manufacturer across diverse applications. We ensure all setpoints and protective measures are properly configured to protect your assets — including the VFD, motor, filters, cables, and connected load. Incorrect or missing setpoints can significantly reduce equipment lifespan.',
    points: [
      'Review of all protection and motor setpoints',
      'Application-specific parameter optimization',
      'Motor overload and fault configuration',
      'Verification that setpoints remain correct post-installation',
    ],
  },
  {
    icon: <HardDrive size={28} />,
    label: '02',
    title: 'Hardware Assessment',
    body: 'Inspecting VFD components is essential for extending equipment lifespan and supporting effective predictive maintenance. Using specialized testing procedures and infrared inspections, SEEL identifies and resolves issues before they lead to failures or unplanned downtime. We perform detailed testing of the VFD\'s DC bus, diode bridge, and capacitors, and inspect the full cabinet system for loose connections, heat sinks, fans, and filter cleanliness. Inadequate cooling is one of the most common causes of VFD failure.',
    points: [
      'DC bus, diode bridge, and capacitor testing',
      'Check for loose connections — a common cause of erratic performance',
      'Heat sink, internal and external fan inspection',
      'Cabinet heating and filter cleanliness checks',
      'Full infrared inspection of internal components',
    ],
  },
  {
    icon: <FileText size={28} />,
    label: '03',
    title: 'Proper Documentation',
    body: 'Maintaining proper documentation is essential for long-term system reliability. During each inspection, SEEL generates a detailed report outlining all existing parameters set in the unit. In the event of a failure, existing parameter setpoints are often unavailable — having a saved copy of the original VFD program significantly streamlines replacement, allowing a seamless transition to a new unit without manually re-analyzing control wiring and system logic.',
    points: [
      'Complete parameter backup for every drive',
      'VFD manufacturer and specifications documented',
      'Critical spare parts list development',
      'Accurate maintenance records for all installed drives',
    ],
  },
  {
    icon: <Search size={28} />,
    label: '04',
    title: 'Application Assessment',
    body: 'A SEEL representative evaluates each VFD to ensure it operates within its intended parameters. This includes reviewing voltage levels, motor load, motor protection setpoints, and past fault history to identify recurring issues or application-specific anomalies. We also review filtering requirements for each installation — missing or incorrect filters can contribute to premature equipment failure, power system problems, and increased utility costs.',
    points: [
      'Voltage level and motor load review',
      'Fault history analysis',
      'Motor protection setpoint verification',
      'Filtering requirements assessment',
      'Identification of recurring or application-specific anomalies',
    ],
  },
]

export default function VfdPreventativeMaintenance() {
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
            <span className="text-gray-300">VFD Preventative Maintenance</span>
          </div>
          <div className="gold-bar" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">VFD Preventative<br />Maintenance</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A structured preventative maintenance program is the most effective way to protect your
            VFD investment, reduce unplanned downtime, and extend the operational lifespan of your
            drives and connected equipment.
          </p>
        </div>
      </section>

      {/* Four PM sections — alternating white / gray-50 */}
      {sections.map((s, i) => (
        <section key={s.title} className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Text side */}
              <div className={i % 2 === 0 ? '' : 'lg:order-2'}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-gold font-black text-5xl opacity-20">{s.label}</div>
                  <div className="text-gold">{s.icon}</div>
                </div>
                <div className="gold-bar" />
                <h2 className="section-title">{s.title}</h2>
                <p className="text-gray-500 leading-relaxed">{s.body}</p>
              </div>

              {/* Points side */}
              <div className={`bg-dark border border-white/10 p-8 ${i % 2 === 0 ? '' : 'lg:order-1'}`}>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
                  Included in this check
                </p>
                <ul className="space-y-4">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Quote callout */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#f6cc41"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-gold mx-auto mb-10" />
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-6">
            "Many manufacturers specify that VFDs can last up to 200,000 hours. With proper
            maintenance, many units can achieve that lifespan."
          </blockquote>
          <p className="text-gray-500 text-sm tracking-widest uppercase">— Select Electrical Enterprises Ltd.</p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundImage: "url('/select-electrical/images/image-1998.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gold opacity-80" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">Set Up a Maintenance Program</h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Contact us to discuss a preventative maintenance schedule for your VFD assets.
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
