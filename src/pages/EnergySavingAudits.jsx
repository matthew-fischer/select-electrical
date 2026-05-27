import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, BarChart3, TrendingDown, Phone, Zap } from 'lucide-react'

const steps = [
  { step: '01', title: 'System Evaluation', desc: 'Specialists assess all major energy-consuming systems — motors, drives, lighting, HVAC, compressed air, and process equipment.' },
  { step: '02', title: 'Precision Measurement', desc: 'Real-time consumption data is captured using precision measurement tools to detect the patterns driving unnecessary expense.' },
  { step: '03', title: 'Tailored Recommendations', desc: 'Suggestions customized to your facility — from high-efficiency motor upgrades to variable speed control and power factor correction.' },
  { step: '04', title: 'Cost-Benefit Analysis', desc: 'Each recommendation includes projected savings, payback periods, and potential rebates or incentives available.' },
  { step: '05', title: 'Comprehensive Report', desc: 'A full report documents existing conditions, identified inefficiencies, recommended improvements, and expected outcomes.' },
]

const recommendations = [
  'Upgrading to high-efficiency motors and variable frequency drives',
  'Implementing variable speed control on pumps, fans, and compressors',
  'Installing power factor correction equipment',
  'Optimizing compressed air system efficiency',
  'Replacing or upgrading to energy-efficient lighting systems',
  'Adjusting motor sizing to match actual load requirements',
  'Improving HVAC controls and scheduling',
  'Identifying and eliminating idle energy consumption',
]

const benefits = [
  {
    icon: <TrendingDown size={24} />,
    title: 'Lower Utility Bills',
    desc: 'Many clients see measurable reductions in energy costs within months of implementing the recommended changes.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Extended Equipment Life',
    desc: 'Properly sized and efficiently operated equipment runs cooler, experiences less stress, and lasts significantly longer.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Reduced Maintenance',
    desc: 'Efficient systems experience less thermal and mechanical stress, reducing maintenance frequency and associated costs.',
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Sustainable Operations',
    desc: 'Lower energy consumption reduces your facility\'s environmental footprint and supports sustainability commitments.',
  },
]

export default function EnergySavingAudits() {
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
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/10 to-transparent hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/electrical-services" className="hover:text-gold transition-colors">Electrical Services</Link>
            <span>/</span>
            <span className="text-gray-300">Energy Saving Audits</span>
          </div>
          <div className="gold-bar" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Energy Saving Audits</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Energy costs are one of the largest ongoing expenses for most facilities, yet
            inefficiencies often go unnoticed. SEEL's Energy Saving Audit Program identifies where
            energy is being wasted and provides a clear roadmap to reduce operating costs.
          </p>
        </div>
      </section>

      {/* Intro + recommendations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">SEEL Energy Saving Audit Program</h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                During evaluations, our specialists assess all major energy-consuming systems in your
                facility. Using precision measurement tools, we capture real-time consumption data
                and detect the patterns driving unnecessary expenses.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                The audit results in tailored recommendations — each accompanied by a cost-benefit
                analysis showing projected savings, payback periods, and any available incentives.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Many of our clients see measurable reductions in energy costs within months of
                implementing the recommended changes.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-5">
                <div className="flex items-start gap-3">
                  <BarChart3 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-dark font-medium text-sm leading-relaxed">
                    Every recommendation includes projected savings, payback periods, and
                    potential incentives or rebates — so you can make informed investment decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown size={20} className="text-gold" />
                <h3 className="text-dark font-bold text-lg">Common Recommendations</h3>
              </div>
              <ul className="space-y-3">
                {recommendations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Audit Process</h2>
            <p className="section-subtitle">A five-step program to identify, quantify, and eliminate energy waste at your facility.</p>
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Beyond Lower Energy Bills</h2>
            <p className="section-subtitle">
              An energy audit delivers lasting value well beyond reduced utility costs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 border border-gray-100 p-8 hover:border-gold hover:shadow-xl transition-all duration-300 group">
                <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="text-dark font-bold text-base mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundImage: "url('/select-electrical/images/image-1998.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gold opacity-80" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">Request an Energy Saving Audit</h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Contact us to schedule an energy audit at your facility and start reducing operating costs.
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
