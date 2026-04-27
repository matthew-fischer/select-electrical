import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Settings } from 'lucide-react'

const applications = [
  { label: 'Oil Well Drive', to: '/se200-oil-well-drive' },
  { label: 'ESP Drive', to: '/se200-esp-drive' },
  { label: 'PCP Pump Drive', to: '/se200-pcp-pump-drive' },
  { label: 'Artificial Lift Controller', to: '/se200-artificial-lift-controller-drive' },
  { label: 'Gas Compressor Drive', to: '/se200-gas-compressor-drive' },
  { label: 'Industrial Drive', to: '/se200-industrial-drive' },
  { label: 'Automated Pump Drive', to: '/se200-automated-pump-drive' },
  { label: 'Pump Process Drive', to: '/se200-pump-process-drive' },
]

const capabilities = [
  'Soft starters and motor starters',
  'Variable frequency drives (VFDs)',
  'Programmable Logic Controllers (PLCs)',
  'Human-Machine Interfaces (HMIs)',
  'Harmonic solutions and filters',
  'Motor protection components',
  'Custom enclosure design and fabrication',
  'Factory acceptance testing (FAT)',
  'On-site installation and commissioning',
  'Remote monitoring and diagnostics integration',
]

export default function SE200ControlSolutions() {
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
            <span className="text-gray-300">SE200 Control Solutions</span>
          </div>
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
            SE200 Series
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">SE200 Control Solutions</h1>
          <p className="text-gold font-medium text-lg mb-5">Custom Engineered Packages</p>
          <p className="text-gray-400 text-lg max-w-2xl">
            In addition to our standard products, SEEL designs and manufactures customized soft starter and control packages tailored to your specific application — integrating VFDs, PLCs, HMIs, and protection components into a single certified solution.
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
                <h2 className="text-2xl font-bold text-dark mb-5">Customized Electrical Solutions</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Select Electrical Enterprises Ltd. has been designing and building customized electrical control packages since 1988. Our engineering team works directly with clients to develop solutions that integrate seamlessly with existing systems and meet the demands of the most challenging industrial environments.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  SEEL is a fully certified CSA/ETL manufacturer, capable of providing products for applications worldwide. Every package is designed, built, and tested in-house at our Stony Plain, Alberta facility.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  We integrate various components including soft starters, motor starters, controllers, harmonic solutions, motor protection filters, HMIs, PLCs, and control products tailored to specific applications.
                </p>
              </div>

              {/* Capabilities */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Integration Capabilities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-gray-600 leading-snug">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 24/7 Support callout */}
              <div className="bg-dark p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Settings size={24} className="text-gold" />
                  <span className="text-gold font-semibold text-lg">Expert Support</span>
                </div>
                <p className="text-white font-bold text-xl mb-2">Available 24/7 for your operation</p>
                <p className="text-gray-400">
                  SEEL employees are available around the clock to provide expert support. Our staff includes Engineering Technicians and Electricians with extensive application and field experience, available for both on-site and remote assistance.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-6">
                <h3 className="text-white font-bold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Tell us about your application and we'll design a solution to match.</p>
                <Link to="/contact" className="btn-primary w-full flex items-center justify-center gap-2 mb-3">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <a href="tel:7809688859" className="flex items-center justify-center gap-2 text-gold text-sm font-medium hover:opacity-80 transition-opacity">
                  <Phone size={14} /> 780-968-8859
                </a>
              </div>

              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-dark text-base mb-4">SE200 Product Applications</h3>
                <ul className="space-y-1">
                  {applications.map((app) => (
                    <li key={app.to}>
                      <Link
                        to={app.to}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold py-1.5 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <ArrowRight size={13} className="shrink-0" />
                        {app.label}
                      </Link>
                    </li>
                  ))}
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
          <h2 className="text-3xl font-black text-dark mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our engineering team is ready to design a custom control solution for your specific application.
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
