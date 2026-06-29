import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react'

const serviceLinks = [
  { label: 'VFD Packages', to: '/vfd-packages' },
  { label: 'Motor Control Centers', to: '/se1000-pds-motor-control-center' },
  { label: 'Switchboards', to: '/se3000-switchboards' },
  { label: 'Electric Motors', to: '/motor-datasheets' },
  { label: 'Soft Starters', to: '/soft-starter-datasheets' },
  { label: 'Power Factor Correction', to: '/power-factor-correction' },
  { label: 'Installation & Commissioning', to: '/vfd-startup-commissioning' },
  { label: 'Infrared Surveys', to: '/infrared-surveys' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <img src="/images/Shop.jpg" alt="" className="w-full h-full object-cover object-center filter brightness-110" aria-hidden="true" />
      </div>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src="/images/Select-Logo.jpg"
                alt="Select Electrical logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-white font-bold text-sm leading-tight tracking-wide">
                  SELECT ELECTRICAL
                </div>
                <div className="text-gold text-xs font-medium tracking-widest uppercase">
                  Enterprises Ltd.
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A privately owned electrical, automation and controls company proudly serving since 1988.
            </p>
            <a
              href="https://www.linkedin.com/company/select-electrical-enterprises-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm"
            >
              <Linkedin size={18} />
              Follow on LinkedIn
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Company', to: '/company' },
                { label: 'Services', to: '/services' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact Us', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm group"
                  >
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm group"
                  >
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7809688859"
                  className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span className="text-sm">780-968-8859</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@selectelectricalent.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors group"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span className="text-sm">info@selectelectricalent.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=#101+315+Slate+Ave,+Stony+Plain,+AB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors"
                >
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                  <span className="text-sm">#101 315 Slate Ave<br />Stony Plain, AB</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gold/30 mx-6" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Select Electrical Enterprises Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-gray-600 text-xs">
            Proudly serving Alberta since 1988
          </p>
          <span className="text-gray-700 text-xs hidden md:block">·</span>
          <p className="text-gray-600 text-xs">
            Built by{' '}
            <a
              href="https://www.linkedin.com/in/matthew-fischer9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              Matthew Fischer
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
