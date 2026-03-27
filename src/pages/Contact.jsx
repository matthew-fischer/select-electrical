import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, Send, CheckCircle, Clock } from 'lucide-react'

const serviceOptions = [
  'Variable Frequency Drives (VFDs)',
  'Motor Control Centers (MCCs)',
  'Switchboards',
  'Electric Motors',
  'Soft Starters',
  'Power Factor Correction',
  'Installation & Commissioning',
  'Infrared Survey',
  'Energy Savings Audit',
  'General Enquiry',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real deployment, you'd send this to a backend or form service
    // For now we show a success state
    setSubmitted(true)
  }

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
            <span className="text-gray-300">Contact</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Have a project you'd like to discuss? We'd love to hear from you.
            We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Info card */}
              <div className="bg-dark p-8">
                <h3 className="text-white font-bold text-base mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a
                    href="tel:7809688859"
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-gold p-2 flex-shrink-0">
                      <Phone size={16} className="text-dark" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Phone</div>
                      <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">780-968-8859</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@selectelectricalent.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-gold p-2 flex-shrink-0">
                      <Mail size={16} className="text-dark" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Email</div>
                      <div className="text-white text-sm font-medium group-hover:text-gold transition-colors break-all">
                        info@selectelectricalent.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://maps.google.com/?q=#101+315+Slate+Ave,+Stony+Plain,+AB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-gold p-2 flex-shrink-0">
                      <MapPin size={16} className="text-dark" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide mb-1">Address</div>
                      <div className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                        #101 315 Slate Ave<br />Stony Plain, AB
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-white border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-gold" />
                  <span className="font-semibold text-dark text-sm">Response Time</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We aim to respond to all enquiries within <strong className="text-dark">24 hours</strong> during
                  regular business hours.
                </p>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/select-electrical-enterprises-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white border border-gray-100 p-5 hover:border-gold transition-colors group"
              >
                <Linkedin size={20} className="text-gold" />
                <span className="text-sm font-medium text-dark group-hover:text-gold transition-colors">
                  Connect on LinkedIn
                </span>
              </a>

              {/* Serving Alberta */}
              <div className="bg-gold/10 border-l-4 border-gold p-5">
                <p className="text-dark text-sm font-medium">
                  Proudly serving Alberta since 1988.
                </p>
                <p className="text-dark/60 text-xs mt-1">
                  Industrial, Oil & Gas, Mining, Agricultural, Forestry, Pulp & Paper,
                  Data Centers, and Renewable Energy sectors.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="bg-gold/10 rounded-full p-5 mb-6">
                      <CheckCircle size={40} className="text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark mb-3">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thank you for contacting us. A member of our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' }) }}
                      className="mt-8 text-sm text-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-dark mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm mb-8">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-dark uppercase tracking-wide mb-2">
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-dark uppercase tracking-wide mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Ltd."
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-dark uppercase tracking-wide mb-2">
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-dark uppercase tracking-wide mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="780-000-0000"
                            className="w-full border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark uppercase tracking-wide mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-dark focus:outline-none focus:border-gold transition-colors bg-white"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-dark uppercase tracking-wide mb-2">
                          Message <span className="text-gold">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project or enquiry..."
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-gold transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gold text-dark font-semibold py-4 px-8 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
                      >
                        Send Message <Send size={16} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
