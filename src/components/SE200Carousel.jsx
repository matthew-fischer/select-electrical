import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react'

const slides = [
  {
    model: 'SE200 Oil Well Drive',
    tag: 'Rod Pump Applications',
    to: '/se200-oil-well-drive',
    image: '/select-electrical/images/se200/OilWell.jpg',
    description: 'Sensorless motor control designed specifically for rod pump and artificial lift applications. Eliminates dynamic braking resistors and features onboard automatic voltage regulation.',
    highlights: ['5HP – 200HP', '230 / 460 / 600 VAC', 'Strokes per minute HMI display', 'Auto-restart on faults'],
  },
  {
    model: 'SE200 ESP Drive',
    tag: 'Electrical Submersible Pumps',
    to: '/se200-esp-drive',
    image: '/select-electrical/images/se200/ESP.jpg',
    description: 'V/Hz or PMM motor control for precise ESP pump speed control. Integrated data logging, well shutdowns, and a 7-inch touchscreen HMI for full annunciation.',
    highlights: ['5HP – 800HP', '7" Touchscreen HMI', 'Data logging built-in', 'Backspin timer lockout'],
  },
  {
    model: 'SE200 PCP Pump Drive',
    tag: 'Progressive Cavity Pumps',
    to: '/se200-pcp-pump-drive',
    image: '/select-electrical/images/se200/PCP.jpg',
    description: 'Sensorless torque control for progressive cavity pump applications. Displays pump RPM and torque in ft-lbs directly on the VFD HMI with integrated high-torque shutdown protection.',
    highlights: ['5HP – 200HP', 'Torque control (ft-lbs)', 'Pump RPM on HMI', 'Backspin timer lockout'],
  },
  {
    model: 'SE200 Artificial Lift Controller',
    tag: 'Automated Rod Pump Control',
    to: '/se200-artificial-lift-controller-drive',
    image: '/select-electrical/images/se200/Artificial.jpg',
    description: 'Advanced pump fillage algorithms with a 7-inch colour touchscreen HMI. Two analog pressure inputs, three digital shutdown inputs, and automated pump-off control.',
    highlights: ['1HP – 300HP', '7" Colour HMI', 'Pump fillage algorithms', 'Automated pump-off control'],
  },
  {
    model: 'SE200 Gas Compressor Drive',
    tag: 'Gas Compressor & Pump Applications',
    to: '/se200-gas-compressor-drive',
    image: '/select-electrical/images/se200/Gas.jpg',
    description: 'Onboard PLC with direct compressor shutdown connections. Custom programming provides individual shutdown annunciation on the VFD HMI — no external panel required.',
    highlights: ['1HP – 800HP', 'Onboard PLC', 'No external panel needed', 'PID speed control'],
  },
  {
    model: 'SE200 Industrial Drive',
    tag: 'General-Purpose Heavy-Duty',
    to: '/se200-industrial-drive',
    image: '/select-electrical/images/se200/Industrial.jpg',
    description: 'Heavy-duty general-purpose VFD compatible with any motor load type. Customizable to meet specific end-user requirements for compressors, pumps, conveyors, fans, and elevators.',
    highlights: ['1HP – 800HP', 'Any motor load type', 'Fully customizable', '1-Phase to 3-Phase input'],
  },
  {
    model: 'SE200 Automated Pump Drive',
    tag: 'Surface Pump Applications',
    to: '/se200-automated-pump-drive',
    image: '/select-electrical/images/se200/Automated.jpg',
    description: 'Onboard PLC with shutdown devices wired directly — eliminating external control panels. Onboard PID with adjustable setpoints and individual shutdown alerts on the VFD HMI.',
    highlights: ['1HP – 800HP', 'Direct shutdown wiring', 'Onboard PID control', 'Auto-restart on faults'],
  },
  {
    model: 'SE200 Pump Process Drive',
    tag: 'Pump Process Accuracy & Protection',
    to: '/se200-pump-process-drive',
    image: '/select-electrical/images/se200/Pump.jpg',
    description: 'Integrates with WEG CFW11 for continuous pump monitoring. Supports simplex and multiplex configurations with sleep/wake modes, dry pump detection, and PID scheduling.',
    highlights: ['WEG CFW11 base', 'Simplex & multiplex', 'Dry pump detection', 'Weekly PID scheduling'],
  },
]

export default function SE200Carousel() {
  const [active, setActive] = useState(0)
  const [imgError, setImgError] = useState({})
  const sectionRef = useRef(null)

  const scrollToTop = useCallback(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }, [])

  const next = useCallback(() => { setActive((a) => (a + 1) % slides.length); scrollToTop() }, [scrollToTop])
  const prev = useCallback(() => { setActive((a) => (a - 1 + slides.length) % slides.length); scrollToTop() }, [scrollToTop])

  const slide = slides[active]

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="w-16 h-1 bg-gold mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white">SE200 Packaged Drive Solutions</h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Custom-engineered VFD packages built for Alberta's oil & gas and industrial sectors.
            </p>
          </div>
          <Link
            to="/se200-control-solutions"
            className="flex items-center gap-2 text-gold text-sm font-semibold hover:opacity-75 transition-opacity shrink-0"
          >
            View All SE200 Products <ArrowRight size={16} />
          </Link>
        </div>

        {/* Slide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">

          {/* Image panel */}
          <div className="relative bg-[#0d0d0d] aspect-[3/4] lg:aspect-auto overflow-hidden">
            {!imgError[active] ? (
              <img
                key={active}
                src={slide.image}
                alt={slide.model}
                onError={() => setImgError((e) => ({ ...e, [active]: true }))}
                className="w-full h-full object-cover object-center opacity-90 transition-opacity duration-500"
              />
            ) : (
              /* Placeholder shown when no image uploaded yet */
              <div className="w-full h-full flex flex-col items-center justify-center p-12 min-h-[320px]">
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="cp" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f6cc41" strokeWidth="0.8" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cp)" />
                  </svg>
                </div>
                <Zap size={48} className="text-gold/30 mb-4 relative z-10" fill="currentColor" />
                <p className="text-gray-600 text-xs uppercase tracking-widest relative z-10">
                  {slide.model}
                </p>
              </div>
            )}

            {/* Slide counter badge */}
            <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-sm border border-white/10 px-3 py-1 text-xs text-gray-400 font-mono">
              {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>

            {/* Prev / Next overlaid on image */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 bg-dark/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 bg-dark/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-300 hover:border-gold hover:text-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Content panel */}
          <div className="flex flex-col justify-between p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              {/* Tag */}
              <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-5">
                {slide.tag}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">
                {slide.model}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-7 text-sm lg:text-base">
                {slide.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {slide.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <Link
                to={slide.to}
                className="inline-flex items-center gap-2 bg-gold text-dark text-sm font-bold px-6 py-3 hover:bg-yellow-300 transition-colors"
              >
                View Product <ArrowRight size={16} />
              </Link>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-10 pt-6 border-t border-white/10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); scrollToTop() }}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? 'w-6 h-2 bg-gold'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-3 grid grid-cols-8 gap-1">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); scrollToTop() }}
              className={`py-2 px-1 text-center border transition-all duration-200 ${
                i === active
                  ? 'border-gold bg-gold/10'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className={`text-xs font-bold truncate ${i === active ? 'text-gold' : 'text-gray-500'}`}>
                {s.model.replace('SE200 ', '')}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
