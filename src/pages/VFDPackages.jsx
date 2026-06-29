import { Link } from 'react-router-dom'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

const packages = [
  {
    model: 'Oil Well Drive',
    to: '/se200-oil-well-drive',
    desc: 'Sensorless motor control for rod pump applications without the need for dynamic braking resistors.',
    tag: 'Oil & Gas',
  },
  {
    model: 'ESP Drive',
    to: '/se200-esp-drive',
    desc: 'V/Hz or PMM control for precise electric submersible pump operation.',
    tag: 'Oil & Gas',
  },
  {
    model: 'PCP Pump Drive',
    to: '/se200-pcp-pump-drive',
    desc: 'Sensorless control with precise torque management for progressive cavity pump applications.',
    tag: 'Oil & Gas',
  },
  {
    model: 'Artificial Lift Controller',
    to: '/se200-artificial-lift-controller-drive',
    desc: 'Automatic voltage regulation designed for imbalanced rod pump applications.',
    tag: 'Oil & Gas',
  },
  {
    model: 'Gas Compressor Drive',
    to: '/se200-gas-compressor-drive',
    desc: 'Features onboard PLC for direct compressor shutdown connections and integration.',
    tag: 'Oil & Gas',
  },
  {
    model: 'Industrial Drive',
    to: '/se200-industrial-drive',
    desc: 'General-purpose heavy-duty unit suitable for any motor-driven industrial application.',
    tag: 'Industrial',
  },
  {
    model: 'Automated Pump Drive',
    to: '/se200-automated-pump-drive',
    desc: 'Designed to work with all surface pump types for automated pumping applications.',
    tag: 'Industrial',
  },
  {
    model: 'Pump Process Drive',
    to: '/se200-pump-process-drive',
    desc: 'Enhanced pump accuracy and protection with reduced operational costs.',
    tag: 'Industrial',
  },
  {
    model: 'Control Solutions',
    to: '/se200-control-solutions',
    desc: 'Custom control integration with PLCs, DCS systems, and standalone PID control.',
    tag: 'Control',
  },
  {
    model: 'SE500 Motor Starter',
    to: '/se500-motor-starter',
    desc: 'NEMA 4 rated motor starter in 230V, 480V, and 600V configurations, up to 600 HP.',
    tag: 'Motor Starter',
  },
]

const features = [
  'Completely wired, tested, and ready for field installation',
  'CSA/ETL certified manufacturing for worldwide applications',
  'NEMA 1, 12, 3R, 4, and 4X enclosure options',
  'Integration of harmonic solutions, motor protection filters, HMIs, and PLCs',
  'Many packages and enclosures available for immediate delivery',
  '24/7 technical support via phone or field deployment',
]

const industries = ['Oil & Gas', 'Industrial', 'Mining', 'Agriculture', 'Forestry', 'Pulp & Paper', 'Data Centers', 'Renewable Energy',]

export default function VFDPackages() {
  return (
    <>
      {/* Hero */}
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
            <span className="text-gray-300">Package Solutions</span>
          </div>
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
            Providing Industry Leading Services Since 1988
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Package Solutions</h1>
          <p className="text-gold font-medium text-lg mb-5">SEEL Customized VFD & Control Packages</p>
          <p className="text-gray-400 text-lg max-w-2xl">
            Select Electrical manufactures and distributes customized Variable Frequency Drive packages completely wired, tested, and ready for field installation. Every package is built for the demands of your specific application.
          </p>
        </div>
      </section>

      {/* Features + Industries */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-black text-dark mb-6">Built to Spec</h2>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-black text-dark mb-6">Industries Served</h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((i) => (
                  <span key={i} className="bg-dark text-gold text-xs font-semibold uppercase tracking-widest px-3 py-1.5">
                    {i}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                Our Engineering Technologists and Electricians have extensive application experience across oil and gas, mining, and industrial sectors. We work with you to specify the right package for your environment and process requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-dark mb-2">Package Lineup</h2>
          <p className="text-gray-500 mb-10">Select the package that matches your application below.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Link
                key={pkg.to}
                to={pkg.to}
                className="group border border-gray-100 hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="bg-dark p-6 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="text-white font-black text-xl group-hover:text-gold transition-colors">
                    {pkg.model}
                  </h3>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mt-1">{pkg.tag}</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{pkg.desc}</p>
                  <span className="flex items-center gap-1.5 text-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                    View Package <ArrowRight size={14} />
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
          <h2 className="text-3xl font-black text-dark mb-4">Need a Custom Package?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Tell us your application and our team will design a VFD package for your exact requirements, enclosure rating, and environment.
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
