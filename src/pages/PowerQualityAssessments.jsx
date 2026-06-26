import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Activity, FileSearch, Phone, Zap } from 'lucide-react'

const steps = [
  { step: '01', title: 'Real-Time Monitoring', desc: 'Advanced diagnostic tools are deployed to capture live data from your electrical system over a representative monitoring period.' },
  { step: '02', title: 'Measurement & Analysis', desc: 'We measure voltage stability, harmonic content, frequency variations, transient events, power factor, and load balance.' },
  { step: '03', title: 'Root Cause Identification', desc: 'Issues such as undersized conductors, unbalanced loads, poor grounding, and harmonic sources are identified and documented.' },
  { step: '04', title: 'Corrective Recommendations', desc: 'Tailored solutions are proposed — harmonic filters, surge protection, power factor correction, or load redistribution as appropriate.' },
  { step: '05', title: 'Detailed Written Report', desc: 'A comprehensive report outlines every issue detected, its likely impact on your equipment, and the corrective actions required.' },
]

const issues = [
  { label: 'Voltage Fluctuations', desc: 'Sags, swells, and transients stress insulation and cause nuisance trips on sensitive equipment.' },
  { label: 'Harmonic Distortion', desc: 'Non-linear loads introduce harmonics that overheat equipment, distort waveforms, and damage capacitors.' },
  { label: 'Imbalanced Loads', desc: 'Unequal phase loading causes overheating in motors, transformers, and neutral conductors.' },
  { label: 'Poor Power Factor', desc: 'Low power factor increases current draw, demand charges, and thermal stress on equipment.' },
  { label: 'Transient Events', desc: 'Switching transients and lightning surges damage sensitive control and instrumentation equipment.' },
  { label: 'Grounding Issues', desc: 'Improper grounding contributes to electrical noise, nuisance faults, and safety hazards.' },
]

export default function PowerQualityAssessments() {
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
            <span className="text-gray-300">Power Quality Assessments</span>
          </div>
          <div className="gold-bar" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Power Quality<br />Assessments</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Power quality is a critical yet often overlooked factor in maintaining the health,
            efficiency, and longevity of electrical systems. SEEL's Power Quality Assessment Program
            uncovers hidden issues before they become costly failures.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">SEEL Power Quality Assessment Program</h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Voltage fluctuations, harmonic distortion, and imbalanced loads can degrade equipment
                over time — increasing operating costs and causing unexpected downtime. These issues
                often go undetected until they result in a failure.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                Our assessment program uses advanced diagnostic tools to monitor and analyze your
                electrical system in real time, identifying root causes and providing clear corrective
                recommendations before problems escalate.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Every assessment culminates in a detailed written report outlining the issues
                detected, their likely impact on your facility, and the corrective actions needed
                to restore and maintain power quality.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-5">
                <div className="flex items-start gap-3">
                  <Zap size={18} className="text-gold flex-shrink-0 mt-0.5" fill="currentColor" />
                  <p className="text-dark font-medium text-sm leading-relaxed">
                    Poor power quality can reduce the lifespan of motors, drives, transformers,
                    and controls — and often goes unnoticed until a failure occurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileSearch size={20} className="text-gold" />
                <h3 className="text-dark font-bold text-lg">What's Included</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: 'Real-time monitoring', desc: 'Advanced diagnostic instrumentation deployed at your facility.' },
                  { label: 'Voltage stability analysis', desc: 'Sags, swells, transients, and long-term trends.' },
                  { label: 'Harmonic content measurement', desc: 'THD and individual harmonic frequency analysis.' },
                  { label: 'Power factor assessment', desc: 'Leading/lagging PF and reactive power evaluation.' },
                  { label: 'Load balance review', desc: 'Phase-by-phase current and load distribution.' },
                  { label: 'Root cause identification', desc: 'Conductors, grounding, load types, and configuration.' },
                  { label: 'Corrective recommendations', desc: 'Specific solutions with implementation guidance.' },
                  { label: 'Full written report', desc: 'Detailed findings with impact analysis and action items.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-dark font-semibold text-sm">{item.label}</span>
                      <span className="text-gray-500 text-xs"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Assessment Process</h2>
            <p className="section-subtitle">A structured, five-step approach to power quality diagnosis and remediation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white border border-gray-100 p-6 hover:border-gold hover:shadow-lg transition-all duration-300">
                <div className="text-gold font-black text-3xl mb-4 opacity-40">{s.step}</div>
                <h3 className="text-dark font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common issues */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Common Power Quality Issues</h2>
            <p className="section-subtitle">
              These are the most frequently identified problems in our assessments across Alberta industrial facilities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue) => (
              <div key={issue.label} className="bg-gray-50 border border-gray-100 p-7 hover:border-gold hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <Activity size={16} className="text-gold" />
                  <h3 className="text-dark font-bold text-sm">{issue.label}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{issue.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">Request a Power Quality Assessment</h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Contact us to schedule an assessment at your facility. Available throughout Alberta.
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
