import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Shield, Zap } from 'lucide-react'

const specs = [
  { label: 'Maximum Capacity', value: 'Up to 6000A' },
  { label: 'Voltage Options', value: '208V, 480V, 600V' },
  { label: 'Bus Bracing', value: 'Standard 65kA' },
  { label: 'Bus Material', value: 'Tin copper bus bar' },
  { label: 'Cable Entry', value: 'Configurable top & bottom' },
  { label: 'Withdrawable Buckets', value: 'Up to 600A' },
  { label: 'Operating Temp', value: '-10 to +40°C' },
  { label: 'Finish', value: 'RAL7035 textured powder coat' },
]

const features = [
  'Customizable, turnkey power distribution solutions',
  'Engineered for fast lead times and reduced on-site installation',
  'Capacity up to 6000A',
  'Available in 208V, 480V, and 600V configurations',
  'Configurable top/bottom cable entry and exit',
  'Standard 65kA bus bracing',
  'Fixed or withdrawable bucket options',
  'Tin copper bus bar construction',
  'Optional N3R outdoor or NEMA12 indoor ratings',
  'Fully withdrawable buckets available up to 600A',
  'In-house engineering and design team',
  '24/7 technical support',
]

export default function SE3000Switchboards() {
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
            <span className="text-gray-300">SE3000 Switchboards</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">SE3000 Switchboards</h1>
          <p className="text-gold font-medium text-lg mb-5">Turnkey Power Distribution Solutions</p>
          <p className="text-gray-400 text-lg max-w-2xl">
            Customizable, turnkey power distribution solutions engineered for fast lead times, reduced on-site installation, and cost-effective performance. Designed to manage and control power flow within industrial and commercial facilities.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-5">What are Electrical Switchboards?</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Electrical switchboards manage and control power flow within facilities, distributing electricity from the source to branch circuits while providing circuit protection and control. They serve as the central hub of a building's power distribution system.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  The SE3000 is SEEL's custom switchboard product line, designed for industrial and commercial clients across Alberta who require fast delivery, in-house engineering support, and full compliance with Canadian electrical standards.
                </p>
              </div>

              {/* Specs */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="bg-gray-50 border border-gray-100 p-4">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{spec.label}</div>
                      <div className="text-dark font-semibold text-lg">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Features & Options</h2>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-gray-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance */}
              <div className="bg-dark p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={24} className="text-gold" />
                  <span className="text-gold font-semibold text-lg">Compliance & Standards</span>
                </div>
                <p className="text-white font-bold text-xl mb-3">ETL & CSA Certified</p>
                <p className="text-gray-400">
                  SE3000 switchboards meet ETL CSA Standard C22.2 No. 244:19 and UL891 or NFPA-791, with field approvals conducted under SPE-1000 or NFPA-791 guidelines.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-6">
                <h3 className="text-white font-bold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Speak with our engineering team about your switchboard requirements.</p>
                <Link to="/contact" className="btn-primary w-full flex items-center justify-center gap-2 mb-3">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <a href="tel:7809688859" className="flex items-center justify-center gap-2 text-gold text-sm font-medium hover:opacity-80 transition-opacity">
                  <Phone size={14} /> 780-968-8859
                </a>
              </div>

              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-dark text-base mb-2">24/7 Technical Support</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our Engineering Technicians and Electricians are available around the clock for on-site and remote support.
                </p>
              </div>

              <div className="bg-gold/5 border border-gold/20 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Standards</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>ETL CSA C22.2 No. 244:19</div>
                  <div>UL891</div>
                  <div>NFPA-791</div>
                  <div>SPE-1000 Field Approval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Custom Switchboard Solutions</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our in-house engineering team designs and builds switchboards to your exact specifications, with fast lead times from our Stony Plain, Alberta facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Request a Quote <ArrowRight size={16} />
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
