import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

const products = [
  {
    model: 'MVW01',
    to: '/mvw01',
    desc: 'MVW01 is a highly reliable, IoT-ready medium-voltage variable frequency drive designed to maximize efficiency and reduce operating costs in critical high-power applications.',
  },
  {
    model: 'MVW3000',
    to: '/mvw3000',
    desc: 'MVW3000 is perfect for a wide range of industrial applications that require speed variation, such as compressors, pumps, fans, conveyor belts and mills.',
  },
]

export default function MediumVoltageVFD() {
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
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/25 to-transparent hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Medium Voltage VFDs</span>
          </div>
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
            Authorized WEG Distributor
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Medium Voltage VFDs</h1>
          <p className="text-gold font-medium text-lg mb-5">WEG Medium Voltage Variable Frequency Drives</p>
          <p className="text-gray-400 text-lg max-w-2xl">
            Select Electrical Enterprises Ltd. has partnered with WEG to distribute medium voltage VFDs. Our team provides full application engineering, startup, and commissioning support.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            {products.map((product) => (
              <Link
                key={product.model}
                to={product.to}
                className="group border border-gray-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="bg-dark p-8 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h2 className="text-white font-black text-3xl group-hover:text-gold transition-colors">
                    {product.model}
                  </h2>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mt-1">Medium Voltage VFD</p>
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

          {/* Services callout */}
          <div className="mt-16 bg-dark p-10 max-w-4xl w-full">
            <h2 className="text-white font-black text-2xl mb-4">Medium Voltage VFD Services</h2>
            <p className="text-gray-400 mb-6 max-w-2xl">
              In addition to supply, Select Electrical offers full medium voltage VFD services including startup and commissioning, preventative maintenance programs, power quality assessments, and energy saving audits.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-300 mb-8">
              {['VFD Startup & Commissioning', 'Preventative Maintenance', 'Power Quality Assessments', 'Energy Saving Audits', 'Infrared Surveys', '24/7 Technical Support'].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                  {s}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Need a Medium Voltage VFD?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our engineering team specializes in medium voltage applications. Contact us for pricing, availability, and application support.
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
