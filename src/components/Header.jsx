import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark shadow-2xl' : 'bg-dark/95'
      }`}
    >
      {/* Top bar */}
      <div className="bg-gold hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end items-center gap-6 text-sm font-medium text-dark">
          <a href="tel:7809688859" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
            <Phone size={14} />
            780-968-8859
          </a>
          <a href="mailto:info@selectelectricalent.com" className="hover:opacity-70 transition-opacity">
            info@selectelectricalent.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gold p-2 flex items-center justify-center">
              <Zap size={20} className="text-dark" fill="currentColor" />
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight tracking-wide">
                SELECT ELECTRICAL
              </div>
              <div className="text-gold text-xs font-medium tracking-widest uppercase">
                Enterprises Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold" />
                  )}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="ml-4 bg-gold text-dark text-sm font-semibold px-5 py-2.5 hover:bg-gold-dark transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                    active ? 'text-gold' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 flex flex-col gap-3">
              <a href="tel:7809688859" className="flex items-center gap-2 text-gold text-sm font-medium">
                <Phone size={14} /> 780-968-8859
              </a>
              <Link
                to="/contact"
                className="bg-gold text-dark text-sm font-semibold px-5 py-3 text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
