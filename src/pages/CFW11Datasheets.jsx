import { useState, useMemo } from 'react'
import { Download, SlidersHorizontal, X, ChevronLeft, ChevronRight } from 'lucide-react'
import drives, { pdfPath } from '../data/cfw11Data'

const manuals = [
  { brand: 'WEG', label: 'CFW11 Catalog',                url: '/select-electrical/datasheets/Manuals/CFW11/WEG-CFW11-CATALOG.pdf' },
  { brand: 'WEG', label: 'Quick Parameter Reference',    url: '/select-electrical/datasheets/Manuals/CFW11/WEG-CFW11-QUICK-PARAMETER-REFERENCE.pdf' },
  { brand: 'WEG', label: "User's Manual (200–460V)",     url: '/select-electrical/datasheets/Manuals/CFW11/WEG-CFW11-USERS-MANUAL-200-460V.pdf' },
  { brand: 'WEG', label: "User's Manual (460V)",         url: '/select-electrical/datasheets/Manuals/CFW11/WEG-CFW11-USERS-MNAUAL-460V.pdf' },
  { brand: 'WEG', label: "User's Manual (600V)",         url: '/select-electrical/datasheets/Manuals/CFW11/WEG-CFW11-USERS-MANUAL-600V.pdf' },
]

const ALL = 'All'

function uniq(arr) {
  return [...new Set(arr)].sort((a, b) => a - b)
}

const allHP      = uniq(drives.map(d => d.hp))
const allVoltage = [ALL, '480V', '240V 3PH', '690V', '240V 1PH']

const voltageInfo = {
  '480V':      { label: '380–480V (3PH)', badge: 'bg-blue-900/40 text-blue-300 border-blue-700/40' },
  '240V 3PH':  { label: '200–240V (3PH)', badge: 'bg-green-900/40 text-green-300 border-green-700/40' },
  '690V':      { label: '500–690V (3PH)', badge: 'bg-amber-900/40 text-amber-300 border-amber-700/40' },
  '240V 1PH':  { label: '200–240V (1PH)', badge: 'bg-purple-900/40 text-purple-300 border-purple-700/40' },
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

const PAGE_SIZE = 15

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

const voltageOrder = { '480V': 0, '240V 3PH': 1, '690V': 2, '240V 1PH': 3 }

export default function CFW11Datasheets() {
  const [voltage, setVoltage] = useState(ALL)
  const [hp,      setHp]      = useState(ALL)
  const [page,    setPage]    = useState(1)

  const filtered = useMemo(() => {
    setPage(1)
    return drives
      .filter(d =>
        (voltage === ALL || d.voltage === voltage) &&
        (hp      === ALL || d.hp      === hp)
      )
      .sort((a, b) =>
        a.hp - b.hp ||
        (voltageOrder[a.voltage] ?? 9) - (voltageOrder[b.voltage] ?? 9)
      )
  }, [voltage, hp])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const hasFilters = voltage !== ALL || hp !== ALL

  function clearAll() { setVoltage(ALL); setHp(ALL) }
  function goTo(p)    { setPage(Math.min(Math.max(1, p), totalPages)) }

  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero */}
      <div className="bg-[#080808] border-b border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            CFW11 Datasheets
          </h1>
          <p className="text-gray-400 max-w-xl">
            Filter by voltage class and horsepower to find and download the correct WEG CFW11 VFD datapack.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Voltage */}
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Voltage Class</div>
              <div className="flex flex-wrap gap-1.5">
                {allVoltage.map(v => (
                  <FilterBtn key={v} active={voltage === v} onClick={() => setVoltage(v)}>
                    {v === ALL ? 'All' : voltageInfo[v].label}
                  </FilterBtn>
                ))}
              </div>
            </div>

            {/* Horsepower */}
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Horsepower</div>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
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
        {filtered.length > 0 && (
          <div className="border border-white/8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d0d0d] border-b border-white/8">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Voltage</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">HP</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-widest">Part Number</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((d, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 transition-colors hover:bg-white/3 ${
                      i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                    } ${!d.file ? 'opacity-50' : ''}`}
                  >
                    <td className="px-4 py-3">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 border ${voltageInfo[d.voltage].badge}`}>
                        {voltageInfo[d.voltage].label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white font-semibold">{d.hp} HP</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{d.file ?? '—'}</td>
                    <td className="px-4 py-3 text-right">
                      {d.file ? (
                        <a
                          href={pdfPath(d.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-gold text-dark text-xs font-bold px-3 py-1.5 hover:bg-yellow-300 transition-colors"
                        >
                          <Download size={12} />
                          PDF
                        </a>
                      ) : (
                        <span className="text-xs text-gray-600 italic">Not available</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
