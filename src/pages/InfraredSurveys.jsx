import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Thermometer, Shield, Phone, ChevronRight } from 'lucide-react'

const equipment = [
  'Motor Control Centers', 'Variable Frequency Drives', 'Breakers & Disconnects',
  'Transformers', 'Switchgear', 'PLCs', 'Junction Boxes', 'Electric Motors', 'Pumps',
]

const benefits = [
  {
    title: 'Increases Facility Safety',
    desc: 'Identify overloaded circuits and overheating connections before they become hazards to personnel and equipment.',
  },
  {
    title: 'Reduces Downtime',
    desc: 'Catch problems during planned inspection windows rather than during unplanned emergency shutdowns.',
  },
  {
    title: 'Reduces Troubleshooting Hours',
    desc: 'Pinpoint faults instantly with thermal imaging — no guesswork, no unnecessary disassembly.',
  },
  {
    title: 'Extends Equipment Life',
    desc: 'Address heat-related degradation early before cumulative damage shortens the life of critical components.',
  },
  {
    title: 'Prevents Fire Hazards',
    desc: 'Overheating connections and overloaded conductors are identified and corrected before they can ignite.',
  },
  {
    title: 'Decreases Equipment Damage',
    desc: 'Stop failures before they cascade into costly collateral damage to surrounding panels and equipment.',
  },
  {
    title: 'Lowers Insurance Premiums',
    desc: 'Documented thermographic inspection programs are recognized by many insurers as active risk-reduction measures.',
  },
]

export default function InfraredSurveys() {
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
            <span className="text-gray-300">Infrared Surveys</span>
          </div>
          <div className="gold-bar" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Infrared Surveys</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Thermographic inspection of electrical and mechanical equipment across Alberta. Our ASNT
            Level 1 certified thermographers work alongside Journeyman Electricians — so we don't
            just find the problem, we fix it.
          </p>
        </div>
      </section>

      {/* Overview + credentials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">Certified Thermographers.<br />Journeyman Electricians.</h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Select Electrical provides thermographic inspection of electrical and mechanical
                equipment across Alberta. Our certified thermographers are based in Stony Plain and
                travel throughout the province — bringing both thermal imaging expertise and the
                electrical qualifications needed to safely open and access any enclosure.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Every inspection includes a detailed technical report for all surveyed components.
                Because our team includes Journeyman Electricians, we can perform on-site repairs
                during the same visit — saving you time and getting deficiencies corrected immediately.
              </p>

              <div className="bg-gold/10 border-l-4 border-gold p-5">
                <div className="flex items-start gap-3">
                  <Thermometer size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-dark font-medium text-sm leading-relaxed">
                    Technical reports are provided for all inspected components — documenting
                    findings, temperature anomalies, severity ratings, and recommended corrective actions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield size={20} className="text-gold" />
                <h3 className="text-dark font-bold text-lg">Our Qualifications</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { label: 'ASNT Level 1 Certified Thermographers', desc: 'Formally trained and certified in thermographic inspection methodology.' },
                  { label: 'Journeyman Electricians On Every Survey', desc: 'Qualified to safely access all electrical enclosures and perform repairs.' },
                  { label: 'Detailed Technical Reports', desc: 'Full documentation of every inspected component with severity rankings.' },
                  { label: 'Province-Wide Coverage', desc: 'Based in Stony Plain — travelling throughout Alberta since 1988.' },
                  { label: 'On-Site Repairs Available', desc: 'Deficiencies can be corrected during the same site visit.' },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-dark font-semibold text-sm">{item.label}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Equipment We Inspect</h2>
            <p className="section-subtitle">
              Our thermographers inspect a full range of electrical and mechanical equipment across
              industrial facilities, substations, and process plants throughout Alberta.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {equipment.map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-100 px-5 py-5 flex items-center gap-3 hover:border-gold hover:shadow-md transition-all duration-200 group"
              >
                <Thermometer size={16} className="text-gold flex-shrink-0" />
                <span className="text-sm font-medium text-charcoal group-hover:text-dark">{item}</span>
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
            <h2 className="section-title">Why Infrared Surveys Matter</h2>
            <p className="section-subtitle">
              A proactive thermographic inspection program delivers measurable value — protecting
              people, equipment, and your bottom line.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gray-50 border border-gray-100 p-7 hover:border-gold hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <ChevronRight size={18} className="text-gold" />
                </div>
                <h3 className="text-dark font-bold text-base mb-2">{b.title}</h3>
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
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">Schedule an Infrared Survey</h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Contact us to arrange a thermographic inspection at your facility. We travel throughout Alberta.
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
