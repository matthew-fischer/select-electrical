import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    src: '/images/gallery/mcc/mcc.jpg',
    title: 'MCC',
    description: 'Main motor control center lineup from the MCC folder.',
    category: 'mcc',
  },
  {
    src: '/images/gallery/mcc/mcc-inside.jpg',
    title: 'MCC',
    description: 'Interior view of the MCC equipment from the MCC folder.',
    category: 'mcc',
  },
  {
    src: '/images/gallery/mcc/mcc2.png',
    title: 'MCC',
    description: 'Detailed MCC cabinet view from the MCC folder.',
    category: 'mcc',
  },
  {
    src: '/images/gallery/mcp/mcp2.png',
    title: 'MCP',
    description: 'Second motor control panel image from the MCP folder.',
    category: 'mcp',
  },
  {
    src: '/images/gallery/mcp/mcp3.png',
    title: 'MCP',
    description: 'Third motor control panel image from the MCP folder.',
    category: 'mcp',
  },
  {
    src: '/images/gallery/mcp/mcp4.png',
    title: 'MCP',
    description: 'Fourth motor control panel image from the MCP folder.',
    category: 'mcp',
  },
  {
    src: '/images/gallery/mcp/mcp5.png',
    title: 'MCP',
    description: 'Fifth motor control panel image from the MCP folder.',
    category: 'mcp',
  },
  {
    src: '/images/gallery/mcp/mcp6.png',
    title: 'MCP',
    description: 'Sixth motor control panel image from the MCP folder.',
    category: 'mcp',
  },
  {
    src: '/images/gallery/switchboard/switchboard.jpg',
    title: 'Switchboard',
    description: 'Primary switchboard lineup from the switchboard folder.',
    category: 'switchboard',
  },
  {
    src: '/images/gallery/switchboard/switchgear.jpg',
    title: 'Switchboard',
    description: 'Secondary switchgear lineup from the switchboard folder.',
    category: 'switchboard',
  },
  {
    src: '/images/gallery/switchboard/sb1.png',
    title: 'Switchboard',
    description: 'First switchboard detail image from the switchboard folder.',
    category: 'switchboard',
  },
  {
    src: '/images/gallery/switchboard/sb2.png',
    title: 'Switchboard',
    description: 'Second switchboard detail image from the switchboard folder.',
    category: 'switchboard',
  },
  {
    src: '/images/gallery/switchboard/sb3.png',
    title: 'Switchboard',
    description: 'Third switchboard detail image from the switchboard folder.',
    category: 'switchboard',
  },
  {
    src: '/images/gallery/switchboard/sb4.png',
    title: 'Switchboard',
    description: 'Fourth switchboard detail image from the switchboard folder.',
    category: 'switchboard',
  },
  {
    src: '/images/gallery/transferswitch/ts1.png',
    title: 'Transfer Switch',
    description: 'First transfer switch image from the transfer switch folder.',
    category: 'transferswitch',
  },
  {
    src: '/images/gallery/transferswitch/ts2.png',
    title: 'Transfer Switch',
    description: 'Second transfer switch image from the transfer switch folder.',
    category: 'transferswitch',
  },
  {
    src: '/images/gallery/se200/mstr.jpg',
    title: 'Packages',
    description: 'Motor starter package photo from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/mstr-inside.png',
    title: 'Packages',
    description: 'Interior view of the motor starter package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/SEEL_Packages.jpg',
    title: 'Packages',
    description: 'Packaged solutions photo from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/OilWell.jpg',
    title: 'Packages',
    description: 'Oil well drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/ESP.jpg',
    title: 'Packages',
    description: 'ESP drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/PCP.jpg',
    title: 'Packages',
    description: 'PCP drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/Gas.jpg',
    title: 'Packages',
    description: 'Gas compressor drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/Industrial.jpg',
    title: 'Packages',
    description: 'Industrial drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/Automated.jpg',
    title: 'Packages',
    description: 'Automated pump drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/control_solution_1.png',
    title: 'Packages',
    description: 'Control solution image from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/Pump.jpg',
    title: 'Packages',
    description: 'Pump process drive package from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/se200/Artificial.jpg',
    title: 'Packages',
    description: 'Artificial lift controller from the Packages folder.',
    category: 'packages',
  },
  {
    src: '/images/gallery/Other/truck.jpg',
    title: 'Other',
    description: 'Service truck photo from the Other folder.',
    category: 'other',
  },
  {
    src: '/images/gallery/Other/Shop.jpg',
    title: 'Other',
    description: 'Shop exterior photo from the Other folder.',
    category: 'other',
  },
]

const categoryLabels = {
  mcc: 'MCC',
  mcp: 'MCP',
  switchboard: 'Switchboard',
  transferswitch: 'Transfer Switch',
  packages: 'Packages',
  other: 'Other',
}

const categoryOrder = ['mcc', 'mcp', 'switchboard', 'transferswitch', 'packages', 'other']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryCategories = useMemo(() => {
    return ['all', ...categoryOrder.filter((category) => galleryItems.some((item) => item.category === category))]
  }, [])

  const visibleItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryItems
    }

    return galleryItems.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <section className="bg-dark pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="gallery-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f6cc41" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gallery-grid)" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/25 to-transparent hidden lg:block" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-300">Gallery</span>
          </div>
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-5">Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A visual snapshot of our electrical builds, industrial equipment, and shop capabilities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f5f1e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {galleryCategories.map((category) => {
              const label = category === 'all' ? 'All' : (categoryLabels[category] || category.toUpperCase())
              const isActive = selectedCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200 rounded-none ${
                    isActive
                      ? 'bg-gold text-dark hover:bg-gold-dark'
                      : 'border-2 border-dark text-dark hover:bg-dark hover:text-white'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:balance]">
            {visibleItems.map((item) => (
              <article
                key={item.src}
                className="group relative mb-4 break-inside-avoid overflow-hidden bg-[#f1ece1] shadow-[0_18px_40px_rgba(0,0,0,0.14)]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#b59b1f]/45 via-[#b59b1f]/20 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-4 md:p-5">
                  <h2 className="text-white text-sm md:text-base font-medium tracking-tight drop-shadow-sm">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundImage: "url('/images/image-1998.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gold opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-dark mb-4">Need something similar built?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Talk to our team about custom electrical equipment, drive packages, and industrial controls.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white font-semibold px-8 py-4 hover:bg-dark-700 transition-colors">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}