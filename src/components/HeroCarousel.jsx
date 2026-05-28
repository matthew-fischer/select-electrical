import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'

const INTERVAL_MS = 6000

const productSlides = [
  {
    title: 'VFD Packages',
    subtitle: 'Custom-engineered VFD packages for oil & gas and industrial applications across Alberta',
    image: '/select-electrical/images/hero/SEEL_Packages.jpg',
    to: '/vfd-packages',
    cta: 'View VFD Packages',
    tag: 'VFD Packages',
  },
  {
    title: 'SE1000 Motor Control Centers',
    subtitle: 'Custom-built MCCs designed and manufactured to your exact specifications',
    image: '/select-electrical/images/hero/mcc.png',
    to: '/se1000-pds-motor-control-center',
    cta: 'View SE1000 MCC',
    tag: 'Motor Control',
  },
  {
    title: 'SE1000 Motor Control Centers',
    subtitle: 'Precision-engineered control gear built to industrial standards',
    image: '/select-electrical/images/hero/mcc-inside.png',
    to: '/se1000-pds-motor-control-center',
    cta: 'View SE1000 MCC',
    tag: 'Motor Control',
  },
  {
    title: 'SE3000 Switchboards',
    subtitle: 'Electrical switchboard design, supply, and installation for industrial facilities',
    image: '/select-electrical/images/hero/switchboard.png',
    to: '/se3000-switchboards',
    cta: 'View SE3000 Switchboards',
    tag: 'Switchboards',
  },
  {
    title: 'SE3000 Switchboards',
    subtitle: 'Built to CSA standards for demanding commercial and industrial environments',
    image: '/select-electrical/images/hero/switchgear.png',
    to: '/se3000-switchboards',
    cta: 'View SE3000 Switchboards',
    tag: 'Switchboards',
  },
]

const TOTAL = 1 + productSlides.length

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setActive((a) => (a + 1) % TOTAL), [])
  const prev = useCallback(() => setActive((a) => (a - 1 + TOTAL) % TOTAL), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section className="relative h-screen overflow-hidden bg-dark">
      {/* === TITLE SLIDE (index 0) === */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          active === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Grid bg */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f6cc41" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        {/* Gold accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/25 to-transparent hidden lg:block" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gold/60 hidden lg:block" />
        {/* Faint lightning bolt over glow */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 100 180" className="w-64 h-auto opacity-[0.08] text-gold" fill="#f6cc41">
            <polygon points="65,0 25,90 52,90 20,180 90,70 58,70" />
          </svg>
        </div>

        {/* Vertically centered content — pt-20 clears the fixed header */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-4 py-2 mb-8">
              <Zap size={14} fill="currentColor" />
              Serving Alberta Since 1988
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Electrical &{' '}
              <span className="text-gold">Automation</span>{' '}
              Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              A privately owned electrical, automation and controls company delivering
              professional, personal, precise, and reliable service across Alberta.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary text-base px-8 py-4">
                Our Services <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline text-base px-8 py-4">
                Get a Quote
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-6 items-center">
              {['COR Certified', 'ISNetworld', 'Complyworks', 'Avetta'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckCircle size={14} className="text-gold" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === PRODUCT SLIDES (index 1..N) === */}
      {productSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === i + 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background image */}
          <div className="absolute inset-0 py-20">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-contain object-center"
            />
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-dark/65" />
          {/* Gold accent line */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-gold/60 hidden lg:block" />

          {/* Vertically centered content — pt-20 clears the fixed header, pb-20 clears the nav bar */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-20 pb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-sm font-medium px-4 py-2 mb-6">
                <Zap size={14} fill="currentColor" />
                Serving Alberta Since 1988
              </div>
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 border border-white/20 px-3 py-1.5">
                  {s.tag}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                {s.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
                {s.subtitle}
              </p>
              <Link to={s.to} className="btn-primary text-base px-8 py-4">
                {s.cta} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* === NAVIGATION — pause only on hover over controls, not the whole section === */}
      <div
        className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-4 px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          onClick={prev}
          className="w-10 h-10 bg-dark/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 bg-dark/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress bar */}
      <div
        key={`${active}-${paused}`}
        className="absolute bottom-0 left-0 z-20 h-0.5 bg-gold"
        style={{
          animation: paused ? 'none' : `heroProgress ${INTERVAL_MS}ms linear forwards`,
        }}
      />
    </section>
  )
}
