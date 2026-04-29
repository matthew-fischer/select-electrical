import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap, Phone, ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const productGroups = [
  {
    heading: 'SE200 Series',
    items: [
      { label: 'Oil Well Drive', to: '/se200-oil-well-drive' },
      { label: 'ESP Drive', to: '/se200-esp-drive' },
      { label: 'PCP Pump Drive', to: '/se200-pcp-pump-drive' },
      { label: 'Artificial Lift Controller', to: '/se200-artificial-lift-controller-drive' },
      { label: 'Gas Compressor Drive', to: '/se200-gas-compressor-drive' },
      { label: 'Industrial Drive', to: '/se200-industrial-drive' },
      { label: 'Automated Pump Drive', to: '/se200-automated-pump-drive' },
      { label: 'Pump Process Drive', to: '/se200-pump-process-drive' },
      { label: 'Control Solutions', to: '/se200-control-solutions' },
    ],
  },
  {
    heading: 'Low Voltage VFDs',
    hub: '/low-voltage-vfd',
    items: [
      { label: 'CFW11', to: '/cfw11' },
      { label: 'CFW100', to: '/cfw100' },
      { label: 'CFW300', to: '/cfw300' },
      { label: 'CFW500', to: '/cfw500' },
      { label: 'CFW700', to: '/cfw700' },
      { label: 'CFW701', to: '/cfw701' },
      { label: 'CFW501', to: '/cfw501' },
    ],
  },
  {
    heading: 'Medium Voltage VFDs',
    hub: '/medium-voltage-vfd',
    items: [
      { label: 'MVW01', to: '/mvw01' },
      { label: 'MVW3000', to: '/mvw3000' },
    ],
  },
  {
    heading: 'Equipment',
    items: [
      { label: 'SE1000 PDS Motor Control Center', to: '/se1000-pds-motor-control-center' },
      { label: 'SE3000 Switchboards', to: '/se3000-switchboards' },
      { label: 'Power Factor Correction', to: '/power-factor-correction' },
    ],
  },
]

const mobileProductItems = productGroups.flatMap((g) => g.items)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setProductsOpen(false)
    setMobileProductsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const productPaths = productGroups.flatMap((g) => g.items.map((i) => i.to))
  const productsActive = productPaths.includes(location.pathname)

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
                    active ? 'text-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold" />
                  )}
                </Link>
              )
            })}

            {/* Products dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen((o) => !o)}
                className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  productsActive || productsOpen ? 'text-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                />
                {productsActive && !productsOpen && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold" />
                )}
              </button>

              {productsOpen && (
                <div className="absolute top-full right-0 mt-1 bg-dark border border-white/10 shadow-2xl w-[820px] grid grid-cols-4 gap-0 z-50">
                  {productGroups.map((group) => (
                    <div key={group.heading} className="p-5 border-r border-white/5 last:border-r-0">
                      <div className="mb-3 pb-2 border-b border-white/10">
                        {group.hub ? (
                          <Link
                            to={group.hub}
                            className="text-gold text-xs font-semibold uppercase tracking-widest hover:opacity-75 transition-opacity flex items-center gap-1"
                          >
                            {group.heading} <ArrowRight size={10} />
                          </Link>
                        ) : (
                          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                            {group.heading}
                          </span>
                        )}
                      </div>
                      <ul className="space-y-0.5">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              className={`block px-2 py-1.5 text-sm rounded transition-colors ${
                                location.pathname === item.to
                                  ? 'text-gold'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
        <div className="md:hidden bg-dark border-t border-white/10">
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

            {/* Mobile products accordion */}
            <button
              onClick={() => setMobileProductsOpen((o) => !o)}
              className={`flex items-center justify-between px-3 py-3 text-sm font-medium border-b border-white/5 transition-colors ${
                productsActive || mobileProductsOpen ? 'text-gold' : 'text-gray-300'
              }`}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileProductsOpen && (
              <div className="bg-white/5 px-3 py-2 mb-1">
                {productGroups.map((group) => (
                  <div key={group.heading} className="mb-4 last:mb-0">
                    <div className="text-gold text-xs font-semibold uppercase tracking-widest mb-2 px-2">
                      {group.heading}
                    </div>
                    {group.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={`block px-2 py-2 text-sm border-b border-white/5 last:border-0 transition-colors ${
                          location.pathname === item.to ? 'text-gold' : 'text-gray-400'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

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
