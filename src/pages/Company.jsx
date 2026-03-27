import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Award, Users, MapPin, Zap, Shield } from 'lucide-react'

const certifications = [
  { name: 'COR Certified', desc: 'Certificate of Recognition — Alberta safety standard' },
  { name: 'ISNetworld', desc: 'Contractor safety & compliance management' },
  { name: 'Complyworks', desc: 'Contractor qualification program' },
  { name: 'Avetta', desc: 'Supply chain risk management' },
]

const safetyTraining = [
  'H2S Alive',
  'First Aid & CPR',
  'WHMIS',
  'Fall Protection',
  'Confined Space',
]

const timeline = [
  { year: '1988', event: 'Select Electrical Enterprises Ltd. founded and incorporated in Stony Plain, Alberta.' },
  { year: '2000s', event: 'Expanded services to include custom VFD packages and motor control centers for industrial clients.' },
  { year: '2010s', event: 'Became an authorized WEG Controls and Motors distributor and service provider.' },
  { year: 'Today', event: 'Serving industrial, oil & gas, mining, agricultural, and renewable energy clients across Alberta.' },
]

export default function Company() {
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
            <span className="text-gray-300">Company</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">About Our Company</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A privately owned electrical, automation and controls company with over 35 years of
            experience serving Alberta's industrial and commercial sectors.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="gold-bar" />
              <h2 className="section-title">Who We Are</h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Select Electrical Enterprises Ltd. was founded and incorporated in 1988, and has been
                serving Alberta with dedication for over three decades. Headquartered in Stony Plain,
                AB, we are strategically positioned to serve a large regional service area across
                Western Canada.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                We are a privately owned electrical, automation and controls company. Our team of
                skilled Engineering Technologists and Electricians specialize in customized Variable
                Frequency Drive (VFD) control packages built to client specifications. We are also
                a proud sales distributor and service provider for WEG Controls and Motors.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our approach combines in-house engineering and manufacturing capabilities with
                professional field installation and commissioning services — providing a single
                accountable partner for your electrical and automation needs.
              </p>

              <div className="flex items-start gap-3 bg-gold/10 border-l-4 border-gold p-5">
                <Zap size={20} className="text-gold flex-shrink-0 mt-0.5" fill="currentColor" />
                <p className="text-dark font-medium text-sm leading-relaxed">
                  "Professional, Personal, Precise, and Reliable" — the four values that have guided
                  Select Electrical since 1988.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1988', label: 'Year Founded', icon: <Award size={24} /> },
                { value: '35+', label: 'Years Experience', icon: <Shield size={24} /> },
                { value: 'WEG', label: 'Authorized Distributor', icon: <Zap size={24} /> },
                { value: 'AB', label: 'Stony Plain, Alberta', icon: <MapPin size={24} /> },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 border border-gray-100 p-7 flex flex-col items-start">
                  <div className="text-gold mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black text-dark mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Our History</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold border-4 border-white rounded-full z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white border border-gray-100 p-6 hover:border-gold transition-colors">
                      <div className="text-gold font-black text-2xl mb-2">{item.year}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="gold-bar" />
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Our solutions are trusted by companies across Alberta's most demanding industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Industrial', 'Oil & Gas', 'Mining', 'Agricultural',
              'Forestry', 'Pulp & Paper', 'Data Centers', 'Renewable Energy',
            ].map((industry) => (
              <div
                key={industry}
                className="bg-gray-50 border border-gray-100 px-6 py-5 text-center font-medium text-sm text-charcoal hover:border-gold hover:bg-white hover:text-dark transition-all duration-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Certifications */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="w-16 h-1 bg-gold mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Safety & Certifications</h2>
            <p className="text-gray-400 max-w-2xl">
              We maintain the highest safety standards across all operations. Every employee is
              fully trained and certified to work in demanding industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Certifications */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
                Company Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="border border-white/10 p-5 hover:border-gold/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <Shield size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-semibold text-sm">{cert.name}</div>
                        <div className="text-gray-400 text-xs mt-1">{cert.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
                Employee Safety Training
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                All employees complete mandatory safety training to ensure they can work safely in
                industrial and hazardous environments throughout Alberta.
              </p>
              <div className="space-y-3">
                {safetyTraining.map((training) => (
                  <div key={training} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-gold flex-shrink-0" />
                    {training}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-dark mb-5">
            Let's Work on Your Next Project
          </h2>
          <p className="text-dark/70 mb-8 max-w-lg mx-auto">
            Reach out to our team to discuss your electrical and automation requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-4 hover:bg-dark-700 transition-colors">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
