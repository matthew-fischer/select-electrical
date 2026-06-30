import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' },
  { label: 'Services', to: '/electrical-services' },
  { label: 'Support', to: '/support' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const productGroups = [
  {
    heading: 'Package Solutions',
    hub: '/package-solutions',
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
      { label: 'SE500 Motor Starter', to: '/se500-motor-starter' },
    ],
  },
  {
    heading: 'Low Voltage VFDs',
    hub: '/low-voltage-vfd',
    items: [
      { label: 'CFW11', to: '/cfw11' },
      { label: 'CFW100', to: '/cfw100' },
      { label: 'CFW320', to: '/cfw320' },
      { label: 'CFW500', to: '/cfw500' },
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
  {
    heading: 'Datasheets',
    items: [
      { label: 'CFW11 Datasheets', to: '/cfw11-datasheets' },
      { label: 'CFW100 Datasheets', to: '/cfw100-datasheets' },
      { label: 'CFW320 Datasheets', to: '/cfw320-datasheets' },
      { label: 'CFW500 Datasheets', to: '/cfw500-datasheets' },
      { label: 'Soft Starter Datasheets', to: '/soft-starter-datasheets' },
      { label: 'Motor Datasheets', to: '/motor-datasheets' },
      { label: 'Reactor Datasheets', to: '/reactor-datasheets' },
      { label: 'Harmonic Filters', to: '/harmonic-filters' },
      { label: 'Sine Wave Filters', to: '/sine-filters' },
      { label: 'dV/dt Filters', to: '/dvdt-filters' },
    ],
  },
]

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
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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
    <>
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

        {/* Main nav wrapper */}
        <div className="max-w-7xl mx-auto px-6 relative" ref={dropdownRef}>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/Select-Logo.jpg"
                alt="Select Electrical logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-white font-bold text-base leading-tight tracking-wide">
                  SELECT ELECTRICAL
                </div>
                <div className="text-gold text-xs font-medium tracking-widest uppercase">
                  Enterprises Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <div key={link.to} className="flex items-center">
                  <Link
                    to={link.to}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      location.pathname === link.to
                        ? 'text-gold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.to && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold" />
                    )}
                  </Link>

                  {/* Inject Desktop "Products" dropdown trigger right after "Company" */}
                  {index === 1 && (
                    <button
                      onClick={() => setProductsOpen((o) => !o)}
                      className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                        productsActive || productsOpen
                          ? 'text-gold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      Products
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          productsOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {productsActive && !productsOpen && (
                        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold" />
                      )}
                    </button>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="ml-4 bg-gold text-dark text-sm font-semibold px-5 py-2.5 hover:bg-gold-dark transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Mega-Dropdown Context */}
          {productsOpen && (
            <div className="hidden md:grid absolute top-full left-0 right-0 bg-dark border border-white/10 border-t-0 shadow-2xl grid-cols-6 gap-0 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
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
      </header>

      {/* Mobile Menu Panel Layout */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-16 z-40 bg-dark border-t border-white/10 overflow-y-auto" 
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="px-6 py-6 flex flex-col gap-1 min-h-[calc(100vh-4rem)] justify-between">
            
            {/* Primary Link Group Area */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <div key={link.to} className="flex flex-col">
                  <Link
                    to={link.to}
                    className={`px-3 py-3 text-base font-medium border-b border-white/5 transition-colors ${
                      location.pathname === link.to ? 'text-gold' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* Integrated Mobile Accordion Trigger right after 'Company' (Index 1) */}
                  {index === 1 && (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setMobileProductsOpen((o) => !o)}
                        className={`flex items-center justify-between px-3 py-3 text-base font-medium border-b border-white/5 transition-colors ${
                          productsActive || mobileProductsOpen ? 'text-gold' : 'text-gray-300'
                        }`}
                      >
                        Products
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileProductsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Scrollable Sub-link Group Nested View */}
                      {mobileProductsOpen && (
                        <div className="bg-white/5 px-4 py-2 flex flex-col gap-1 max-h-[380px] overflow-y-auto border-b border-white/10">
                          {productGroups.map((group) => (
                            <div key={group.heading} className="py-2">
                              <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-1">
                                {group.heading}
                              </div>
                              <div className="flex flex-col pl-2 border-l border-white/10 gap-1.5">
                                {group.items.map((item) => (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    className={`text-sm py-1 transition-colors ${
                                      location.pathname === item.to ? 'text-gold' : 'text-gray-400 hover:text-white'
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Sticky Lower Action Stack */}
            <div className="pt-6 mt-auto flex flex-col gap-4">
              <a href="tel:7809688859" className="flex items-center justify-center gap-2 text-gold text-base font-medium py-2">
                <Phone size={16} /> 780-968-8859
              </a>
              <Link
                to="/contact"
                className="bg-gold text-dark text-sm font-bold px-5 py-3.5 text-center tracking-wide uppercase transition-colors hover:bg-gold-dark"
              >
                Get a Quote
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
