import { useState, useMemo } from 'react'
import { Download, SlidersHorizontal, X, ChevronLeft, ChevronRight } from 'lucide-react'
import reactors, { pdfPath } from '../data/reactorDatasheets'

const manuals = [
  { brand: 'MTE', label: 'Reactor Catalog & Manual',         url: '/select-electrical/datasheets/Manuals/MTE%203%25%20Impedance%20Reactor/RL-REACTOR-CATALOG-AND-MANUAL.pdf' },
  { brand: 'TCI', label: 'KDR Brochure',                     url: '/select-electrical/datasheets/Manuals/TCI%203%25%20Impendance%20Reactor/KDR-BROCHURE.pdf' },
  { brand: 'TCI', label: 'Installation Instructions',         url: '/select-electrical/datasheets/Manuals/TCI%203%25%20Impendance%20Reactor/KDR-REACTOR-INSTRUCTION-INSTALLATION.pdf' },
  { brand: 'TCI', label: 'Reactor/Filter Size Chart',         url: '/select-electrical/datasheets/Manuals/TCI%203%25%20Impendance%20Reactor/REACTOR-FILTER-SIZE-CHART.pdf' },
]

const ALL = 'All'

function uniq(arr) {
  return [...new Set(arr)].sort((a, b) => a - b)
}

const allHP      = uniq(reactors.map(r => r.hp))
const allVoltage = [ALL, '480V', '575V', '230V']
const allBrand   = [ALL, 'TCI', 'MTE']

const brandInfo = {
  TCI: { badge: 'bg-blue-900/40 text-blue-300 border-blue-700/40' },
  MTE: { badge: 'bg-orange-900/40 text-orange-300 border-orange-700/40' },
}

function FilterBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-semibold border transition-all duration-150 ${
        active
          ? 'bg-gold text-dark border-gold'
          : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}

const PAGE_SIZE = 10

function pageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const delta = 1
  const left  = Math.max(2, current - delta)
  const right = Math.min(total - 1, current + delta)
  const pages = [1]
  if (left > 2) pages.push('...')
  for (let p = left; p <= right; p++) pages.push(p)
  if (right < total - 1) pages.push('...')
  pages.push(total)
  return pages
}

export default function ReactorDatasheets() {
  const [brand,   setBrand]   = useState(ALL)
  const [voltage, setVoltage] = useState(ALL)
  const [hp,      setHp]      = useState(ALL)
  const [page,    setPage]    = useState(1)

  const filtered = useMemo(() => {
    setPage(1)
    return reactors
      .filter(r =>
        (brand   === ALL || r.brand   === brand) &&
        (voltage === ALL || r.voltage === voltage) &&
        (hp      === ALL || r.hp      === hp)
      )
      .sort((a, b) =>
        a.hp - b.hp ||
        a.brand.localeCompare(b.brand) ||
        a.voltage.localeCompare(b.voltage)
      )
  }, [brand, voltage, hp])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const hasFilters = brand !== ALL || voltage !== ALL || hp !== ALL

  function clearAll() { setBrand(ALL); setVoltage(ALL); setHp(ALL) }
  function goTo(p)    { setPage(Math.min(Math.max(1, p), totalPages)) }

  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero */}
      <div className="bg-[#080808] border-b border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            Reactor Datasheets
          </h1>
          <p className="text-gray-400 max-w-xl">
            Filter by brand, voltage, and horsepower to find and download the correct 3% impedance reactor datasheet.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Manuals */}
        <div className="mb-8 pb-8 border-b border-white/5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Manuals &amp; Documentation</p>
          <div className="flex flex-wrap gap-2">
            {manuals.map(m => (
              <a key={m.url} href={m.url} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#0d0d0d] border border-white/8 px-3 py-2 text-xs hover:border-gold/40 transition-colors group">
                <span className="text-gray-500 font-medium">{m.brand}</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">{m.label}</span>
                <Download size={11} className="text-gold" />
              </a>
            ))}
          </div>
        </div>

        {/* Filter panel */}
        <div className="bg-[#0d0d0d] border border-white/8 p-6 mb-8">
          <div className="flex items-center gap-2 mb-5 text-gray-400 text-sm font-medium">
            <SlidersHorizontal size={15} />
            Filter
            {hasFilters && (
              <button
                onClick={clearAll}
                className="ml-auto flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors"
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Brand */}
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Brand</div>
              <div className="flex flex-wrap gap-1.5">
                {allBrand.map(b => (
                  <FilterBtn key={b} active={brand === b} onClick={() => setBrand(b)}>
                    {b}
                  </FilterBtn>
                ))}
              </div>
            </div>

            {/* Voltage */}
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Voltage</div>
              <div className="flex flex-wrap gap-1.5">
                {allVoltage.map(v => (
                  <FilterBtn key={v} active={voltage === v} onClick={() => setVoltage(v)}>{v}</FilterBtn>
                ))}
              </div>
            </div>

            {/* Horsepower */}
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Horsepower</div>
              <div className="flex flex-wrap gap-1.5">
                <FilterBtn active={hp === ALL} onClick={() => setHp(ALL)}>All</FilterBtn>
                {allHP.map(h => (
                  <FilterBtn key={h} active={hp === h} onClick={() => setHp(h)}>
                    {h} HP
                  </FilterBtn>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            <span className="text-white font-semibold">{filtered.length}</span> datasheet{filtered.length !== 1 ? 's' : ''} found
          </p>
          {totalPages > 1 && (
            <p className="text-sm text-gray-500">
              Page <span className="text-white font-semibold">{page}</span> of <span className="text-white font-semibold">{totalPages}</span>
            </p>
          )}
        </div>

        {/* Table */}
        {filtered.length > 0 ? (
          <div className="border border-white/8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d0d0d] border-b border-white/8">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Brand</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Voltage</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">HP</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Part Number</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 transition-colors hover:bg-white/3 ${
                      i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 border ${brandInfo[r.brand].badge}`}>
                        {r.brand}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{r.voltage}</td>
                    <td className="px-4 py-3 text-white font-semibold">{r.hp} HP</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{r.file}</td>
                    <td className="px-4 py-3 text-right">
                      <a
                        href={pdfPath(r.brand, r.voltage, r.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-gold text-dark text-xs font-bold px-3 py-1.5 hover:bg-yellow-300 transition-colors"
                      >
                        <Download size={12} />
                        PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* Pagination */}
        {totalPages > 1 && filtered.length > 0 && (
          <div className="flex items-center justify-center gap-1 mt-6">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            {pageRange(page, totalPages).map((p, i) =>
              p === '...' ? (
                <span key={`dots-${i}`} className="w-9 h-9 flex items-center justify-center text-gray-600 text-sm select-none">
                  &hellip;
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => goTo(p)}
                  className={`w-9 h-9 text-sm font-semibold border transition-colors ${
                    p === page
                      ? 'bg-gold text-dark border-gold'
                      : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="border border-white/8 py-20 text-center">
            <p className="text-gray-500 mb-3">No datasheets match your filters.</p>
            <button onClick={clearAll} className="text-gold text-sm hover:opacity-75 transition-opacity">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
