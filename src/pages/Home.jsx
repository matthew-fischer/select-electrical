import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, Settings, Shield, Award, Users, ChevronRight,
  CheckCircle, Phone, Wrench, Activity, BarChart3, Thermometer
} from 'lucide-react'

const services = [
  {
    icon: <Zap size={28} />,
    title: 'Variable Frequency Drives',
    desc: 'Custom VFD packages and standard solutions including WEG CFW and MVW series for precise motor speed control.',
  },
  {
    icon: <Settings size={28} />,
    title: 'Motor Control Centers',
    desc: 'Custom-built MCCs designed and manufactured to your exact specifications for industrial applications.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Switchboards',
    desc: 'Electrical switchboard design, supply, and installation for commercial and industrial facilities.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Installation & Commissioning',
    desc: 'Professional on-site installation, startup, and commissioning services across Western Canada.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Energy Savings Audits',
    desc: 'Comprehensive power consumption audits and power quality assessments to reduce operating costs.',
  },
  {
    icon: <Thermometer size={28} />,
    title: 'Infrared Surveys',
    desc: 'Thermographic infrared inspections to identify potential electrical faults before they become failures.',
  },
]

const industries = [
  'Oil & Gas', 'Industrial', 'Mining', 'Agriculture',
  'Forestry', 'Pulp & Paper', 'Data Centers', 'Renewable Energy',
]

const stats = [
  { value: '35+', label: 'Years in Business' },
  { value: 'WEG', label: 'Authorized Distributor' },
  { value: 'COR', label: 'Certified' },
  { value: 'AB', label: 'Based in Alberta' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f6cc41" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gold accent block */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/10 to-transparent hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gold/40 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-4 py-2 mb-8">
              <Zap size={14} fill="currentColor" />
              Serving Alberta Since 1988
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Electrical &{' '}
              <span className="text-gold">Automation</span>{' '}
              Solutions
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              A privately owned electrical, automation and controls company delivering
              professional, personal, precise, and reliable service across Alberta.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary text-base px-8 py-4">
                Our Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline text-base px-8 py-4">
                Get a Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-14 flex flex-wrap gap-6 items-center">
              {['COR Certified', 'ISNetworld', 'Complyworks', 'Avetta'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckCircle size={14} className="text-gold" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 px-6 text-center ${
                  i < stats.length - 1 ? 'border-r border-dark/20' : ''
                }`}
              >
                <div className="text-3xl font-black text-dark">{stat.value}</div>
                <div className="text-dark/70 text-sm font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              From custom VFD packages to complete motor control centers — we design, supply,
              install, and service electrical and automation systems across Western Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-white p-8 border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline-dark inline-flex">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">Built on Trust.<br />Driven by Precision.</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Select Electrical Enterprises Ltd. was founded and incorporated in 1988, and has been
                serving Alberta with dedication for over three decades. We're a privately owned
                electrical, automation and controls company based in Stony Plain, AB.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team of skilled Engineering Technologists and Electricians specialize in
                customized Variable Frequency Drive (VFD) control packages built to client
                specifications. We're also a proud sales distributor and service provider for
                WEG Controls and Motors.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Custom VFD and MCC packages built to spec',
                  'In-house engineering and manufacturing',
                  'Full installation and commissioning services',
                  'Safety-certified workforce (COR, H2S, WHMIS, First Aid)',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <Link to="/company" className="btn-outline-dark inline-flex">
                About Our Company <ArrowRight size={16} />
              </Link>
            </div>

            {/* Visual block */}
            <div className="relative">
              <div className="bg-dark aspect-square max-w-md mx-auto flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#f6cc41"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
                <div className="relative z-10 text-center p-12">
                  <Zap size={64} className="text-gold mx-auto mb-6" fill="currentColor" />
                  <div className="text-white text-5xl font-black mb-2">1988</div>
                  <div className="text-gold text-sm tracking-widest uppercase font-medium">
                    Founded in Alberta
                  </div>
                  <div className="mt-6 text-gray-400 text-sm">
                    Over 35 years of electrical<br />excellence in Western Canada
                  </div>
                </div>
              </div>
              {/* Offset border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 max-w-md mx-auto" style={{left: '2rem'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From oil sands to renewable energy — our solutions power operations across Alberta's most demanding sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="border border-white/10 px-6 py-5 text-center text-gray-300 font-medium text-sm hover:border-gold hover:text-gold transition-all duration-200 cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEG distributor banner */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="gold-bar" />
              <h3 className="text-2xl font-bold text-dark">Authorized WEG Distributor & Service Provider</h3>
              <p className="text-gray-500 mt-2 max-w-lg">
                We're a proud sales distributor and service provider for WEG Controls and Motors —
                supplying a full range of VFDs, soft starters, motors, and controls.
              </p>
            </div>
            <Link to="/contact" className="btn-primary whitespace-nowrap text-base px-8 py-4 flex-shrink-0">
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-5">
            Ready to Work Together?
          </h2>
          <p className="text-dark/70 text-lg mb-10 max-w-xl mx-auto">
            Get in touch with our team for a quote on your next electrical or automation project.
            We'll get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-4 hover:bg-dark-700 transition-colors">
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
