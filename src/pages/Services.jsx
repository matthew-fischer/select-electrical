import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Settings, Activity, Wrench, BarChart3, Thermometer, ChevronRight, Package, Shield, Cpu, Filter } from 'lucide-react'

const serviceCategories = [
  {
    id: 'vfd',
    icon: <Zap size={32} />,
    title: 'Variable Frequency Drives (VFDs)',
    desc: 'Complete VFD solutions from standard units to fully custom-engineered packages.',
    details: [
      'WEG CFW series low voltage VFDs',
      'WEG MVW series medium voltage VFDs',
      'Custom VFD control packages built to spec',
      'VFD startup and commissioning',
      'VFD preventative maintenance programs',
      'Enclosure design and fabrication',
    ],
  },
  {
    id: 'mcc',
    icon: <Settings size={32} />,
    title: 'Motor Control Centers (MCCs)',
    desc: 'Custom-designed and manufactured MCCs for industrial facilities across Alberta.',
    details: [
      'Custom MCC design and manufacturing',
      'Low and medium voltage configurations',
      'Combination starters and VFD units',
      'Bus and wiring design',
      'Factory acceptance testing',
      'On-site installation and commissioning',
    ],
  },
  {
    id: 'switchboards',
    icon: <Activity size={32} />,
    title: 'Switchboards',
    desc: 'Electrical switchboard supply, design, and installation for commercial and industrial use.',
    details: [
      'Distribution and metering switchboards',
      'Main and branch circuit protection',
      'Custom configurations available',
      'CSA and UL certified equipment',
      'Installation and commissioning services',
    ],
  },
  {
    id: 'motors',
    icon: <Cpu size={32} />,
    title: 'Electric Motors',
    desc: 'Supply of WEG and TECO Westinghouse electric motors for all industrial applications.',
    details: [
      'WEG standard and severe duty motors',
      'TECO Westinghouse motors',
      'TEFC, explosion-proof, and washdown designs',
      'Low and medium voltage ratings',
      'Motor sizing and selection assistance',
      'Replacement and upgrade supply',
    ],
  },
  {
    id: 'softstarters',
    icon: <Package size={32} />,
    title: 'Soft Starters',
    desc: 'WEG SSW series soft starters for smooth motor starting and stopping.',
    details: [
      'WEG SSW series soft starters',
      'Reduced voltage starting',
      'Pump and fan applications',
      'Integrated bypass contactors',
      'Application engineering support',
    ],
  },
  {
    id: 'protection',
    icon: <Shield size={32} />,
    title: 'Motor Protection',
    desc: 'Comprehensive motor protection equipment to safeguard your assets.',
    details: [
      'Overload relays and protection devices',
      'Phase loss and reversal protection',
      'Thermistor and PTC protection',
      'Motor protection relay programming',
    ],
  },
  {
    id: 'powerquality',
    icon: <Filter size={32} />,
    title: 'Reactors & Harmonic Filters',
    desc: 'Power quality solutions to protect equipment and meet utility requirements.',
    details: [
      'Input and output line reactors',
      'Active and passive harmonic filters',
      'Power factor correction equipment',
      'Power quality assessments and audits',
      'Harmonic analysis and mitigation',
    ],
  },
  {
    id: 'field',
    icon: <Wrench size={32} />,
    title: 'Installation & Commissioning',
    desc: 'Professional field services across Alberta and Western Canada.',
    details: [
      'Equipment installation and mounting',
      'VFD and MCC startup and commissioning',
      'Control panel wiring and integration',
      'Site acceptance testing',
      'Operator training',
      'Ongoing field support',
    ],
  },
  {
    id: 'energy',
    icon: <BarChart3 size={32} />,
    title: 'Energy & Power Quality Services',
    desc: 'Audits and assessments to improve efficiency and reliability.',
    details: [
      'Energy savings audits',
      'Power quality assessments',
      'Power consumption monitoring',
      'Power factor correction analysis',
      'Reporting and recommendations',
    ],
  },
  {
    id: 'infrared',
    icon: <Thermometer size={32} />,
    title: 'Infrared Surveys',
    desc: 'Thermographic inspection services to identify faults before failures occur.',
    details: [
      'Electrical panel infrared scanning',
      'Motor and connection thermography',
      'Detailed thermal imaging reports',
      'Priority deficiency ranking',
      'Predictive maintenance integration',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Page hero */}
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
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Services</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            From custom-engineered VFD packages to complete MCCs and field commissioning —
            we provide end-to-end electrical and automation solutions.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceCategories.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-100 p-8 hover:border-gold hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-xs text-gray-500">
                          <ChevronRight size={12} className="text-gold flex-shrink-0 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEG Products highlight */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-1 bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Authorized WEG Distributor
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                As an authorized WEG sales distributor and service provider, we supply the full
                range of WEG Controls and Motors products — from low voltage VFDs to medium
                voltage drives and everything in between.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                WEG products are known for their reliability and performance in demanding industrial
                environments. Combined with our in-house engineering expertise, we can package WEG
                equipment into turnkey solutions tailored to your application.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'CFW Series Low Voltage VFDs',
                  'MVW Series Medium Voltage VFDs',
                  'SSW Series Soft Starters',
                  'WEG Electric Motors',
                  'Motor Starters & Contactors',
                  'HMI & Controls',
                ].map((product) => (
                  <div key={product} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ChevronRight size={12} className="text-gold flex-shrink-0" />
                    {product}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-700 border border-white/10 p-10">
              <Zap size={48} className="text-gold mb-6" fill="currentColor" />
              <h3 className="text-white text-xl font-bold mb-4">Need a Custom Package?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We design and build custom VFD control packages and MCCs to your exact specifications.
                Our team will work with you from initial design through to commissioning.
              </p>
              <ul className="space-y-2 mb-8">
                {['Free application review', 'Custom engineering design', 'Factory-built and tested', 'On-site installation available'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ChevronRight size={12} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-dark font-semibold px-6 py-3 hover:bg-gold-dark transition-colors text-sm"
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-5">
            Have a Project in Mind?
          </h2>
          <p className="text-dark/70 mb-8 max-w-lg mx-auto">
            Contact our team to discuss your requirements. We'll respond within 24 hours.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-4 hover:bg-dark-700 transition-colors">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
