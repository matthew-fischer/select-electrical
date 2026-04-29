import VFDProductPage from '../components/VFDProductPage'

export default function CFW100() {
  return (
    <VFDProductPage
      title="CFW100"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="The Smallest Drive on the Market"
      description="The CFW100 covers power levels from 0.18 to 0.75 kW (0.25 to 1 HP) — the most compact VFD in the WEG lineup. Plug-and-play operation with surface or DIN rail mounting makes it ideal for space-constrained applications."
      specs={[
        { label: 'Power Range', value: '0.25–1 HP (0.18–0.75 kW)' },
        { label: 'Input Voltage', value: '220V single-phase' },
        { label: 'Output Current', value: '1.6A, 2.6A, 4.2A' },
        { label: 'Protection', value: 'IP20 (standard)' },
        { label: 'Mounting', value: 'Surface or DIN rail' },
        { label: 'Control', value: 'Vector (VVW) or Scalar (V/F)' },
      ]}
      features={[
        'Smallest VFD on the market — ideal for space-constrained panels',
        'Single-phase 220V input',
        'Vector (VVW) or Scalar (V/F) control modes',
        'Plug-and-play functionality',
        'Built-in operating interface (HMI)',
        'Digital inputs available',
        'Surface or DIN rail mounting options',
        'IP20 degree of protection (standard)',
        'Removable external fan',
        'Fault and alarm diagnosis capability',
        'Electronic motor overload protection',
        'Free WPS and WLP programming software included',
      ]}
    />
  )
}
