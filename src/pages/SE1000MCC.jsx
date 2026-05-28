import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Phone, Shield, Download, FileText } from 'lucide-react'

const mccImages = [
  { src: '/select-electrical/images/hero/mcc.jpg', alt: 'SE1000 Motor Control Center', fit: 'object-contain' },
  { src: '/select-electrical/images/hero/mcc-inside.jpg', alt: 'SE1000 MCC Interior', fit: 'object-cover' },
]

const specs = [
  { label: 'Maximum Capacity', value: 'Up to 6000A' },
  { label: 'Voltage Options', value: '208V, 480V, 600V' },
  { label: 'Enclosure Rating', value: 'NEMA 12 / IP52' },
  { label: 'Bus Bracing', value: 'Standard 65kA' },
  { label: 'Bus Material', value: 'Tin-plated copper' },
  { label: 'Cable Entry', value: 'Configurable top & bottom' },
  { label: 'Operating Temp', value: '-10 to +40°C' },
  { label: 'Finish', value: 'RAL7035 textured powder coat' },
]

const features = [
  'Consolidates motor starters, circuit breakers, VFDs, and power monitoring into one assembly',
  'Turnkey solution designed to reduce field installation time',
  'NEMA 12 / IP52 enclosure with textured powder coating (RAL7035)',
  'Tin-plated copper bus with standard 65kA bracing',
  'Configurable top and bottom cable entry and exit',
  'Fixed or withdrawable bucket options',
  'Fully withdrawable buckets available up to 600A',
  'SPE-1000 field approval inspection',
  'Meets ETL CSA Standard C22.2 No. 254 and UL845A',
  'In-house engineering and design',
  '24/7 technical support from engineering technicians and electricians',
]

export default function SE1000MCC() {
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(prev => (prev + 1) % mccImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

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
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-gold/20 to-transparent hidden lg:block z-0" />
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 flex-wrap">
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
                <span>/</span>
                <span className="text-gray-300">SE1000 PDS Motor Control Center</span>
              </div>
              <div className="w-16 h-1 bg-gold mb-6" />
              <h1 className="text-4xl md:text-5xl font-black text-white mb-3">SE1000 PDS Motor Control Center</h1>
              <p className="text-gold font-medium text-lg mb-5">Industrial MCC — Turnkey & Customizable</p>
              <p className="text-gray-400 text-lg">
                A customizable, turnkey Motor Control Center solution designed to reduce field installation time and consolidate motor starters, circuit breakers, VFDs, and power monitoring devices into a single certified assembly.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl bg-[#0d0d0d]">
                {mccImages.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full ${img.fit} object-center transition-opacity duration-1000 ${i === activeImg ? 'opacity-90' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                  {mccImages.map((_, i) => (
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

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-12">

              {/* What are MCCs */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-5">What is a Motor Control Center?</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  A Motor Control Center (MCC) is an assembly of one or more enclosed sections that house motor control units such as starters, circuit breakers, and variable frequency drives (VFDs). Installed in a centralized location, an MCC serves as the hub for motor management — allowing operators to start, stop, and protect multiple motors from a single panel.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  The SE1000-PDS is SEEL's flagship industrial MCC product, engineered for fast delivery times, reduced on-site installation labour, and reliable long-term performance in demanding industrial environments.
                </p>
              </div>

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

              {/* Features */}
              <div>
                <div className="gold-bar" />
                <h2 className="text-2xl font-bold text-dark mb-6">Features & Capabilities</h2>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-gray-600 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance callout */}
              <div className="bg-dark p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={24} className="text-gold" />
                  <span className="text-gold font-semibold text-lg">Compliance & Standards</span>
                </div>
                <p className="text-white font-bold text-xl mb-3">Built to the highest standards</p>
                <p className="text-gray-400">
                  The SE1000-PDS undergoes SPE-1000 field approval inspection and meets ETL CSA Standard C22.2 No. 254 and UL845A requirements. SEEL is a fully certified CSA/ETL manufacturer.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-dark p-6">
                <h3 className="text-white font-bold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-400 text-sm mb-5">Speak with our engineering team about your MCC requirements.</p>
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
                <p className="text-dark font-bold text-sm mb-1">SE1000 Motor Control Center</p>
                <p className="text-gray-500 text-xs mb-4">Complete product brochure including specifications and application details.</p>
                <a
                  href="/select-electrical/datasheets/Brochures/SE1000-MCC.pdf"
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
                  Our Engineering Technicians and Electricians are available around the clock for on-site and remote support.
                </p>
              </div>

              <div className="bg-gold/5 border border-gold/20 p-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Standards</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>ETL CSA C22.2 No. 254</div>
                  <div>UL845A</div>
                  <div>SPE-1000 Field Approval</div>
                  <div>NEMA 12 / IP52</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Custom MCC Solutions for Alberta Industry</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Our in-house engineering team designs and builds Motor Control Centers to your exact specifications, with fast lead times from our Stony Plain, Alberta facility.
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
