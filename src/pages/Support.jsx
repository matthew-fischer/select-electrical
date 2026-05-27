import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Download, FileText, X, CheckCircle, ClipboardList, UserCheck, ArrowDownToLine, Loader2, AlertCircle } from 'lucide-react'

const manuals = [
  {
    title: 'SE200 Industrial Drive',
    description: 'Installation, operation & maintenance manual for the SE200 Industrial VFD.',
    file: 'SE200-Industrial-Drive.pdf',
    tag: 'Industrial',
  },
  {
    title: 'SE200 Oil Well Drive',
    description: 'Complete manual for the SE200 Oil Well pumping unit drive.',
    file: 'SE200-Oilwell-Drive.pdf',
    tag: 'Oil & Gas',
  },
  {
    title: 'SE200 PCP Pump Drive',
    description: 'Installation & operation guide for the SE200 Progressive Cavity Pump drive.',
    file: 'SE200-PCP-Drive.pdf',
    tag: 'Oil & Gas',
  },
  {
    title: 'SE200 Pump Process Drive',
    description: 'Manual covering the SE200 PID-enabled pump and process drive.',
    file: 'SE200-Pump-Process-Drive.pdf',
    tag: 'Process',
  },
  {
    title: 'SE200 Gas Compressor Drive',
    description: 'Operation and maintenance manual for gas compressor VFD applications.',
    file: 'SE200-Gas-Compressor-Drive.pdf',
    tag: 'Oil & Gas',
  },
  {
    title: 'SE200 ESP Drive',
    description: 'Manual for the SE200 Electric Submersible Pump drive system.',
    file: 'SE200-ESP-Drive.pdf',
    tag: 'Oil & Gas',
  },
  {
    title: 'SE200 ALC Drive',
    description: 'Installation and operation guide for the SE200 Artificial Lift Controller drive.',
    file: 'SE200-ALC-Drive.pdf',
    tag: 'Artificial Lift',
  },
  {
    title: 'SE200 Automated Pump Drive',
    description: 'Complete manual for the SE200 automated pump control drive.',
    file: 'SE200-Automated-Pump-Drive.pdf',
    tag: 'Automation',
  },
]

const tagColors = {
  'Industrial':     'bg-blue-900/40 text-blue-300 border-blue-700/40',
  'Oil & Gas':      'bg-amber-900/40 text-amber-300 border-amber-700/40',
  'Process':        'bg-green-900/40 text-green-300 border-green-700/40',
  'Artificial Lift':'bg-purple-900/40 text-purple-300 border-purple-700/40',
  'Automation':     'bg-teal-900/40 text-teal-300 border-teal-700/40',
}

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Select a Manual',
    body: 'Browse the SE200 product manuals below and click the download button on the one you need.',
  },
  {
    icon: UserCheck,
    number: '02',
    title: 'Complete a Short Form',
    body: 'Provide your name, email, and company so we can offer the best possible follow-up support.',
  },
  {
    icon: ArrowDownToLine,
    number: '03',
    title: 'Instant Download',
    body: 'Your download begins immediately after submitting the form — no waiting required.',
  },
]

function triggerDownload(manual) {
  const link = document.createElement('a')
  link.href = `/select-electrical/datasheets/Brochures/${manual.file}`
  link.download = manual.file
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function Modal({ manual, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Start download immediately so the browser doesn't block it
    triggerDownload(manual)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '7331374a-cb04-4028-b9ac-2dc8ccd8d199',
          subject: `Manual Download – ${manual.title} – ${formData.name}`,
          from_name: formData.name,
          manual: manual.title,
          ...formData,
        }),
      })
      const data = await res.json()
      if (!data.success) {
        // Download already started — just log the notification failure silently
        console.warn('Web3Forms notification failed:', data)
      }
    } catch (err) {
      console.warn('Could not send download notification:', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-dark border border-white/10 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FileText size={16} className="text-gold" />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Manual Download</span>
            </div>
            <h3 className="text-white font-bold text-base leading-snug">{manual.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors ml-4 flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="bg-gold/10 rounded-full p-4 mb-4">
                <CheckCircle size={36} className="text-gold" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Download Started!</h4>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Your download should begin automatically. If it didn't, use the button below.
              </p>
              <a
                href={`/select-electrical/datasheets/Brochures/${manual.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-dark font-semibold text-sm px-6 py-3 hover:bg-yellow-300 transition-colors"
              >
                <Download size={15} />
                Download Again
              </a>
              <button
                onClick={onClose}
                className="mt-4 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-400 text-sm mb-6">
                Please fill out a brief form before downloading — it helps us provide the best follow-up support.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="780-000-0000"
                      className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Ltd."
                      className="w-full bg-[#111] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                {error && (
                  <div className="flex items-start gap-2 bg-red-950/50 border border-red-700/40 px-3 py-2.5 text-red-400 text-xs">
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold text-dark font-semibold py-3 flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={15} className="animate-spin" /> Starting Download…</>
                  ) : (
                    <><Download size={16} /> Submit &amp; Download</>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Support() {
  const [activeManual, setActiveManual] = useState(null)

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 relative overflow-hidden"
        style={{ backgroundImage: "url('/select-electrical/images/canola_pumpjacks.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
      >
        <div className="absolute inset-0 bg-dark opacity-75" />
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
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Support</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Support</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Access installation, operation, and maintenance manuals for Select Electrical products.
            To ensure we can provide the best support, please fill out a brief form before downloading.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0a0a0a] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-8">How It Works</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {steps.map(({ icon: Icon, number, title, body }) => (
              <div key={number} className="bg-[#0a0a0a] p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-black text-white/5 leading-none select-none">{number}</div>
                  <div className="flex-1">
                    <div className="bg-gold/10 w-9 h-9 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manuals grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">SE200 Series</p>
            <h2 className="text-2xl md:text-3xl font-black text-dark">Available Manuals</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {manuals.map((manual) => (
              <div
                key={manual.file}
                className="bg-white border border-gray-100 p-6 flex flex-col hover:border-gold/40 transition-colors group"
              >
                {/* Tag */}
                <span className={`inline-block self-start text-xs font-semibold px-2 py-0.5 border mb-4 ${tagColors[manual.tag]}`}>
                  {manual.tag}
                </span>

                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gold/10 p-2 flex-shrink-0">
                    <FileText size={16} className="text-gold" />
                  </div>
                  <h3 className="text-dark font-bold text-sm leading-snug">{manual.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-6">
                  {manual.description}
                </p>

                {/* Download button */}
                <button
                  onClick={() => setActiveManual(manual)}
                  className="w-full bg-dark text-white text-xs font-semibold py-2.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-dark transition-colors group-hover:bg-gold group-hover:text-dark"
                >
                  <Download size={13} />
                  Download Manual
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-white/8 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">Need More Help?</p>
              <h2 className="text-white font-black text-2xl mb-2">Can't find what you're looking for?</h2>
              <p className="text-gray-400 text-sm max-w-lg">
                Our team of Engineering Technologists and Electricians is ready to help. Contact us directly
                for technical support, commissioning assistance, or product enquiries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:7809688859"
                className="bg-white/5 border border-white/10 text-white text-sm font-semibold px-6 py-3 text-center hover:border-white/30 transition-colors whitespace-nowrap"
              >
                780-968-8859
              </a>
              <Link
                to="/contact"
                className="bg-gold text-dark text-sm font-semibold px-6 py-3 text-center hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeManual && (
        <Modal manual={activeManual} onClose={() => setActiveManual(null)} />
      )}
    </>
  )
}
