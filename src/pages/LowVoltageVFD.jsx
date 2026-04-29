import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Zap } from 'lucide-react'

const products = [
  {
    model: 'CFW11',
    to: '/cfw11',
    desc: 'A versatile VFD for almost any application with multiple control modes. Available from 1.5 to 600 cv across single and three-phase inputs up to 690V.',
  },
  {
    model: 'CFW100',
    to: '/cfw100',
    desc: 'The smallest drive on the market. Covers 0.25–1 HP with single-phase 220V input, plug-and-play operation, and DIN rail mounting.',
  },
  {
    model: 'CFW300',
    to: '/cfw300',
    desc: 'High-performance VSD for three-phase induction motors requiring precise control and easy operation.',
  },
  {
    model: 'CFW500',
    to: '/cfw500',
    desc: 'Fast commissioning and infinite possibilities for machines. Covers 0.25–10 HP with ambient operation up to 50°C without derating.',
  },
  {
    model: 'CFW700',
    to: '/cfw700',
    desc: 'High-performance general-purpose drive featuring Vectrue Technology® and Optimal Flux®. Covers 1.5–150 HP.',
  },
  {
    model: 'CFW701',
    to: '/cfw701',
    desc: 'Dedicated HVAC-R drive covering 1.5–175 HP with built-in HVAC-specific features and Vectrue Technology®.',
  },
  {
    model: 'CFW501',
    to: '/cfw501',
    desc: 'HVAC-R drive with BACnet/Metasys/Modbus communications, SoftPLC technology, and dual PID loops. Covers 0.25–10 HP.',
  },
]

export default function LowVoltageVFD() {
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
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Low Voltage VFDs</span>
          </div>
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
            Authorized WEG Distributor
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Low Voltage VFDs</h1>
          <p className="text-gold font-medium text-lg mb-5">WEG Low Voltage Variable Frequency Drives</p>
          <p className="text-gray-400 text-lg max-w-2xl">
            Select Electrical Enterprises Ltd. has partnered with WEG to distribute low voltage VFDs in Edmonton, Alberta and surrounding areas. We offer the complete WEG CFW series — from compact fractional HP drives to high-power industrial solutions.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.model}
                to={product.to}
                className="group border border-gray-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="bg-dark p-6 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h2 className="text-white font-black text-2xl group-hover:text-gold transition-colors">
                    {product.model}
                  </h2>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mt-1">Low Voltage VFD</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{product.desc}</p>
                  <span className="flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                    View Product <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Not Sure Which Drive You Need?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Tell us your application and our engineering team will find the right VFD for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Get a Quote <ArrowRight size={16} />
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
