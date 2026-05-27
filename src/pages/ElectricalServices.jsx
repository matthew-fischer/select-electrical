import { Link } from 'react-router-dom'
import { ArrowRight, Thermometer, Zap, Wrench, BarChart3, Activity, Phone, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: <Thermometer size={32} />,
    title: 'Infrared Surveys',
    desc: 'Thermographic inspection of electrical and mechanical equipment using ASNT Level 1 certified thermographers and Journeyman Electricians who can perform on-site repairs.',
    points: ['ASNT Level 1 certified', 'Detailed technical reports', 'On-site repairs available'],
    to: '/infrared-surveys',
  },
  {
    icon: <Zap size={32} />,
    title: 'VFD Startup & Commissioning',
    desc: 'Startup, commissioning, and repair of Variable Frequency Drives and soft starters. Shop or field service with emergency response available around the clock.',
    points: ['Shop & field service', '24/7 emergency response', 'All VFD manufacturers'],
    to: '/vfd-startup-commissioning',
  },
  {
    icon: <Wrench size={32} />,
    title: 'VFD Preventative Maintenance',
    desc: 'Comprehensive programming verification, hardware assessment, documentation, and application review to maximize the lifespan of your drives.',
    points: ['Programming verification', 'Hardware assessment', 'Parameter documentation'],
    to: '/vfd-preventative-maintenance',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Energy Saving Audits',
    desc: 'Identify inefficiencies and reduce operating costs with real-time measurement tools and tailored recommendations backed by cost-benefit analysis.',
    points: ['Real-time measurement', 'Cost-benefit analysis', 'Payback period projections'],
    to: '/energy-saving-audits',
  },
  {
    icon: <Activity size={32} />,
    title: 'Power Quality Assessments',
    desc: 'Real-time monitoring to identify voltage fluctuations, harmonic distortion, and load imbalances before they degrade equipment and drive up costs.',
    points: ['Harmonic analysis', 'Voltage & power factor', 'Full written report'],
    to: '/power-quality-assessments',
  },
]

const stats = [
  { value: '35+', label: 'Years in Alberta' },
  { value: '5', label: 'Service Programs' },
  { value: '24/7', label: 'Emergency Response' },
  { value: 'AB', label: 'Province-Wide Coverage' },
]

export default function ElectricalServices() {
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
            <span className="text-gray-300">Electrical Services</span>
          </div>
          <div className="gold-bar" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Electrical Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Select Electrical Enterprises Ltd. has extensive automation experience across all sectors.
            We provide efficient, industry-leading field services from our Stony Plain base —
            travelling throughout Alberta.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`py-8 px-6 text-center ${i < stats.length - 1 ? 'border-r border-dark/20' : ''}`}>
                <div className="text-3xl font-black text-dark">{stat.value}</div>
                <div className="text-dark/70 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Our Service Programs</h2>
            <p className="section-subtitle">
              From thermographic inspections to energy audits — our service programs are designed
              to improve reliability, reduce costs, and protect your electrical assets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.to}
                className="bg-white border border-gray-100 p-8 hover:border-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                    <ul className="space-y-1.5 mb-6">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle size={12} className="text-gold flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.to}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-1 bg-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                35+ Years of Field Expertise
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Select Electrical Enterprises Ltd. has been serving Alberta since 1988, operated by a
                team of skilled Engineering Technologists and Electricians. Our service team is based
                in Stony Plain and travels throughout the province.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our experience spans Variable Frequency Drive applications, custom VFD package
                manufacturing, infrared surveys, facility automation and controls, and electrical
                consulting across industrial, oil &amp; gas, agricultural, and commercial sectors.
              </p>
              <Link to="/company" className="btn-outline inline-flex">
                About Our Company <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'VFD Installation & Commissioning',
                'VFD Preventative Maintenance',
                'Harmonic Mitigation',
                'Power Quality Assessments',
                'Infrared Services',
                'Energy Saving Audits',
              ].map((item) => (
                <div key={item} className="border border-white/10 px-5 py-4 text-sm text-gray-300 hover:border-gold hover:text-white transition-all duration-200">
                  {item}
                </div>
              ))}
            </div>
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
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">Ready to Get Started?</h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Contact our team to discuss your service requirements. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-4 hover:bg-dark/80 transition-colors">
              Contact Us <ArrowRight size={18} />
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
