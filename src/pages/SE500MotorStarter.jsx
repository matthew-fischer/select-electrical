import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Phone, ArrowRight, FileText, Download } from 'lucide-react'

const mstrImages = [
  { src: '/images/se200/mstr.jpg', alt: 'SE500 Motor Starter', fit: 'object-contain' },
  { src: '/images/se200/mstr-inside.png', alt: 'SE500 Motor Starter Interior', fit: 'object-cover' },
]

const specs = [
  { label: 'Voltage Options', value: '230 / 480 / 600 VAC' },
  { label: 'Enclosure Rating', value: 'NEMA 4' },
  { label: 'Max Horsepower (480/600V)', value: '600 HP' },
  { label: 'Max Horsepower (230V)', value: '300 HP' },
  { label: 'Size Range', value: '0 – 7' },
  { label: 'Dimensions', value: '24" × 24" × 12"' },
  { label: 'Certifications', value: 'CSA / ETL' },
  { label: 'Warranty', value: '12 Months' },
]

const components = [
  'WEG DWB Molded Case Circuit Breaker with external handle',
  'Door-mounted Hand / Off / Auto switch',
  'WEG CWM Contactor',
  'WEG RW Adjustable Overload Relay',
  '120VAC Control Transformer',
  'External Overload Reset Button',
  'Factory QA/QC testing',
  'CSA Certification',
]

const voltageOptions = [
  { voltage: '480V', hp: '25 / 50 / 100 / 200 / 400 / 600 HP' },
  { voltage: '600V', hp: '25 / 50 / 100 / 200 / 400 / 600 HP' },
  { voltage: '230V', hp: '2 / 3 / 5 / 10 / 15 / 20 / 25 / 30 / 50 / 100 / 150 / 200 / 300 HP' },
]

export default function SE500MotorStarter() {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(prev => (prev + 1) % mstrImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

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
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-gold/20 to-transparent hidden lg:block z-0" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 flex-wrap">
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                <span>/</span>
                <Link to="/package-solutions" className="hover:text-gold transition-colors">VFD Packages</Link>
                <span>/</span>
                <span className="text-gray-300">SE500 Motor Starter</span>
              </div>
              <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
                SEEL Motor Starters
              </div>
              <div className="w-16 h-1 bg-gold mb-6" />
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">SE500 Motor Starter</h1>
              <p className="text-gold font-medium text-lg mb-5">NEMA 4 Rated — 230V / 480V / 600V</p>
              <p className="text-gray-400 text-lg">
                A NEMA 4 rated, CSA/ETL certified motor starter available in three voltage configurations to suit your application. Factory wired, tested, and ready for field installation with motor sizes from 2 HP up to 600 HP.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl bg-[#0d0d0d]">
                {mstrImages.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full ${img.fit} object-center transition-opacity duration-1000 ${i === activeImg ? 'opacity-90' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {mstrImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === activeImg ? 'bg-gold' : 'bg-white/40'}`}
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Specs */}
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

              {/* Standard components */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Standard Components</h2>
                <ul className="space-y-3">
                  {components.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-gray-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Voltage options */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Available Voltage Configurations</h2>
                <div className="space-y-4">
                  {voltageOptions.map((opt) => (
                    <div key={opt.voltage} className="border border-gray-100 p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-dark text-gold text-xs font-semibold uppercase tracking-widest px-3 py-1">{opt.voltage}</span>
                      </div>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium text-dark">Available HP:</span> {opt.hp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <div className="bg-dark p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <p className="text-white text-2xl font-black mb-2">
                    Factory tested and <span className="text-gold">CSA/ETL certified</span>
                  </p>
                  <p className="text-gray-400">
                    Every SE500 unit ships completely wired, tested, and certified — minimizing your installation time and maximizing uptime in the field.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-6">
                <h3 className="text-white font-bold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Speak with an engineering technician about your motor starter requirements.</p>
                <Link to="/contact" className="btn-primary w-full flex items-center justify-center gap-2 mb-3">
                  Contact Us <ArrowRight size={16} />
                </Link>
                <a href="tel:7809688859" className="flex items-center justify-center gap-2 text-gold text-sm font-medium hover:opacity-80 transition-opacity">
                  <Phone size={14} /> 780-968-8859
                </a>
              </div>

              <div className="border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <FileText size={15} className="text-gold" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Product Brochure</p>
                </div>
                <p className="text-dark font-bold text-sm mb-1">SE500 Motor Starter</p>
                <p className="text-gray-500 text-xs mb-4">Complete product brochure including specifications and application details.</p>
                <a
                  href="/datasheets/Brochures/SE500-Motor-Starter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-dark text-white text-xs font-semibold px-4 py-2.5 hover:bg-gold hover:text-dark transition-colors w-full"
                >
                  <Download size={13} /> Download Brochure
                </a>
              </div>

              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-dark text-base mb-2">24/7 Technical Support</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  SEEL employees are available around the clock to provide expert support — both on-site and remote — staffed by Engineering Technicians and Electricians with extensive field experience.
                </p>
              </div>

              <div className="border border-gray-100 p-6">
                <h3 className="font-bold text-dark text-base mb-4">Package Solutions</h3>
                <Link
                  to="/package-solutions"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors"
                >
                  <ArrowRight size={13} className="shrink-0" />
                  View All Package Solutions
                </Link>
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
            Our team of engineering technicians and electricians is ready to help you find the right motor starter for your application.
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
