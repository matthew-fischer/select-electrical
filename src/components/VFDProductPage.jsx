import { Link } from 'react-router-dom'
import { CheckCircle, Phone, ArrowRight, Zap } from 'lucide-react'

const lvVFDs = [
  { label: 'CFW11', to: '/cfw11' },
  { label: 'CFW100', to: '/cfw100' },
  { label: 'CFW300', to: '/cfw300' },
  { label: 'CFW500', to: '/cfw500' },
  { label: 'CFW501', to: '/cfw501' },
  { label: 'CFW700', to: '/cfw700' },
  { label: 'CFW701', to: '/cfw701' },
]

const mvVFDs = [
  { label: 'MVW01', to: '/mvw01' },
  { label: 'MVW3000', to: '/mvw3000' },
]

export default function VFDProductPage({ title, category, categoryTo, tagline, description, specs, features, additionalSections }) {
  const isLV = category === 'Low Voltage VFDs'
  const relatedList = isLV ? lvVFDs : mvVFDs

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
            <Link to={categoryTo} className="hover:text-gold transition-colors">{category}</Link>
            <span>/</span>
            <span className="text-gray-300">{title}</span>
          </div>
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
            WEG — {category}
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">{title}</h1>
          {tagline && <p className="text-gold font-medium text-lg mb-5">{tagline}</p>}
          <p className="text-gray-400 text-lg max-w-2xl">{description}</p>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {specs && specs.length > 0 && (
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
              )}

              {features && features.length > 0 && (
                <div>
                  <div className="gold-bar" />
                  <h2 className="text-2xl font-bold text-dark mb-6">Main Characteristics</h2>
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                        <span className="text-gray-600 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {additionalSections && additionalSections.map((section, i) => (
                <div key={i}>
                  <div className="gold-bar" />
                  <h2 className="text-2xl font-bold text-dark mb-4">{section.heading}</h2>
                  {section.paragraphs && section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-500 leading-relaxed mb-4">{p}</p>
                  ))}
                  {section.items && (
                    <ul className="space-y-3 mt-4">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                          <span className="text-gray-600 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* WEG callout */}
              <div className="bg-dark p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={24} className="text-gold" fill="currentColor" />
                    <span className="text-gold font-semibold text-lg">Authorized WEG Distributor</span>
                  </div>
                  <p className="text-white text-xl font-bold mb-2">Alberta's WEG VFD specialists</p>
                  <p className="text-gray-400">
                    Select Electrical Enterprises Ltd. is an authorized WEG distributor and service provider serving Alberta since 1988. Our engineering team provides full application support, startup, and commissioning.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-6">
                <h3 className="text-white font-bold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Contact our team for pricing, availability, and application support.</p>
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

              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-dark text-base mb-4">
                  {isLV ? 'Other Low Voltage VFDs' : 'Other Medium Voltage VFDs'}
                </h3>
                <ul className="space-y-1">
                  {relatedList.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold py-1.5 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <ArrowRight size={13} className="shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={categoryTo}
                  className="mt-3 flex items-center gap-1.5 text-gold text-xs font-medium hover:opacity-80 transition-opacity"
                >
                  View all {category} <ArrowRight size={12} />
                </Link>
              </div>

              <div className="bg-gold/5 border border-gold/20 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Certifications</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>Authorized WEG Distributor</div>
                  <div>CSA / ETL Certified</div>
                  <div>COR Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Contact us today for a cost-saving VFD quote. Our team will help you select the right drive for your application.
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
