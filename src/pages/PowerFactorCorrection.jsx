import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Zap, BarChart3 } from 'lucide-react'

const correctionMethods = [
  'Capacitor or capacitor bank installations',
  'Automatic capacitor banks',
  'Minimizing idle motor operation',
  'Replacing standard motors with energy-efficient models',
  'Installing variable frequency drives (VFDs)',
]

const benefits = [
  'Enhanced plant efficiency',
  'Reduced kVA charges from utilities',
  'Expanded system capacity — add more loads without infrastructure upgrades',
  'Better network voltage stability',
  'Reduced strain on cables and transformers',
  'Improved motor starting torque',
  'Lower power generation losses',
  'Reactive power compensation for cogeneration systems',
]

const products = [
  { name: 'Power Factor Controllers', desc: 'Automatic monitoring and correction systems' },
  { name: 'Detuning Reactors', desc: 'Prevent harmonic resonance with capacitor banks' },
  { name: 'Three-Phase Capacitors', desc: 'Reactive power compensation components' },
]

export default function PowerFactorCorrection() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-dark pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f6cc41" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Power Factor Correction</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Power Factor Correction</h1>
          <p className="text-gold font-medium text-lg mb-5">Improve Efficiency. Reduce Utility Costs.</p>
          <p className="text-gray-400 text-lg max-w-2xl">
            Power factor is the ratio between real power absorbed by the load and the apparent power flowing in the circuit. When apparent power (kVA) exceeds real power (kW), utilities must supply additional reactive current — and pass those costs on to you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">

              {/* What is power factor */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-5">What is Power Factor?</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Power factor is the ratio between the real power (kW) your equipment actually uses and the apparent power (kVA) your utility must supply. A power factor below 1.0 means your facility is drawing more current than necessary to do the same amount of work — resulting in higher utility bills, reduced system capacity, and increased wear on electrical infrastructure.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  A power factor correction controller reduces this excess demand by supplying reactive power locally, minimizing what needs to be drawn from the grid.
                </p>
              </div>

              {/* Correction methods */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-5">Correction Methods</h2>
                <ul className="space-y-3">
                  {correctionMethods.map((method, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-gray-600">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-5">Benefits of Improved Power Factor</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-4">
                      <BarChart3 size={16} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-sm leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Our Products & Services</h2>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.name} className="border border-gray-100 p-5 flex items-start gap-4">
                      <Zap size={20} className="text-gold mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-dark mb-1">{product.name}</div>
                        <div className="text-gray-500 text-sm">{product.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support callout */}
              <div className="bg-dark p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={24} className="text-gold" fill="currentColor" />
                  <span className="text-gold font-semibold text-lg">24/7 Technical Support</span>
                </div>
                <p className="text-white font-bold text-xl mb-2">Expert support when you need it</p>
                <p className="text-gray-400">
                  SEEL employees are available around the clock to provide expertise support. Our staff includes Engineering Technicians and Electricians with extensive application and field experience for both on-site and remote assistance.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-6">
                <h3 className="text-white font-bold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Talk to an engineer about your power factor challenges.</p>
                <Link to="/contact" className="btn-primary w-full flex items-center justify-center gap-2 mb-3">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <a href="tel:7809688859" className="flex items-center justify-center gap-2 text-gold text-sm font-medium hover:opacity-80 transition-opacity">
                  <Phone size={14} /> 780-968-8859
                </a>
              </div>

              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-dark text-base mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>
                    <Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2">
                      <ArrowRight size={13} /> Energy Audits
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2">
                      <ArrowRight size={13} /> Harmonic Filters
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2">
                      <ArrowRight size={13} /> Variable Frequency Drives
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="hover:text-gold transition-colors flex items-center gap-2">
                      <ArrowRight size={13} /> Infrared Surveys
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gold/5 border border-gold/20 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Certifications</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>CSA / ETL Certified Manufacturer</div>
                  <div>COR Certified</div>
                  <div>ISNetworld</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Start Reducing Your Energy Costs</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our engineering team can assess your facility's power factor and recommend the right correction solution to reduce utility charges and improve system performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Request an Assessment <ArrowRight size={16} />
            </Link>
            <a href="tel:7809688859" className="btn-outline-dark flex items-center justify-center gap-2">
              <Phone size={16} /> 780-968-8859
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
