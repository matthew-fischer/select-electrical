import { useState, useMemo } from 'react'
import { Download, SlidersHorizontal, X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import drives, { pdfPath } from '../data/cfw100Data'

const manuals = [
  { tag: 'CFW100', label: "User's Manual",             url: '/datasheets/CFW100/WEG-CFW100-MANUAL.pdf' },
  { tag: 'CFW100', label: 'Quick Parameter Reference', url: '/datasheets/CFW100/WEG-CFW100-QUICK-PARAMETER-REFERENCE.pdf' },
  { tag: 'CFW100', label: 'CFW100 Brochure',           url: '/datasheets/CFW100/WEG-CFW100-BROCHURE.pdf' },
]

const websiteLinks = [
  { tag: 'CFW100', label: 'CFW100 Product Page', url: 'https://pamensky.com/cfw100.html' },
]

const tagBadge = {
  'CFW100': 'bg-teal-900/40 text-teal-300 border-teal-700/40',
}

const ALL = 'All'

function uniq(arr) {
  return [...new Set(arr)].sort((a, b) => a - b)
}

const allHP      = uniq(drives.map(d => d.hp))
const allVoltage = [ALL, '240V', '120V']

const voltageInfo = {
  '240V': { label: '200–240V', badge: 'bg-blue-900/40 text-blue-300 border-blue-700/40' },
  '120V': { label: '100–127V', badge: 'bg-green-900/40 text-green-300 border-green-700/40' },
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

const voltageOrder = { '240V': 0, '120V': 1 }

export default function CFW100Datasheets() {
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
      <div className="bg-[#080808] border-b border-white/5 py-14 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gold/25 to-transparent hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-16 h-1 bg-gold mb-6" />
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
            CFW100 Datasheets
          </h1>
          <p className="text-gray-400 max-w-xl">
            Filter by voltage class and horsepower to find and download the correct WEG CFW100 VFD datapack.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Links</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {websiteLinks.map(m => (
            <a key={m.url} href={m.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0d0d0d] border border-white/8 px-3 py-2 text-xs hover:border-gold/40 transition-colors group">
              <span className={`font-semibold text-xs px-1.5 py-0.5 border ${tagBadge[m.tag]}`}>{m.tag}</span>
              <span className="text-gray-400 group-hover:text-white transition-colors">{m.label}</span>
              <ArrowUpRight size={11} className="text-gold" />
            </a>
          ))}
        </div>

        {/* Manuals */}
        <div className="mb-8 pb-8 border-b border-white/5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Manuals &amp; Documentation</p>
          <div className="flex flex-wrap gap-2">
            {manuals.map(m => (
              <a key={m.url} href={m.url} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#0d0d0d] border border-white/8 px-3 py-2 text-xs hover:border-gold/40 transition-colors group">
                <span className={`font-semibold text-xs px-1.5 py-0.5 border ${tagBadge[m.tag]}`}>{m.tag}</span>
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
