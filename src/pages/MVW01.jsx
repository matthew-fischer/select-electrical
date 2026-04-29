import VFDProductPage from '../components/VFDProductPage'

export default function MVW01() {
  return (
    <VFDProductPage
      title="MVW01"
      category="Medium Voltage VFDs"
      categoryTo="/medium-voltage-vfd"
      tagline="High-Efficiency Medium Voltage Drive"
      description="The MVW01 suits a variety of industrial variable speed applications including compressors, pumps, fans, conveyors, and mills. Featuring Voltage Source Inverter (VSI) NPC topology with the latest generation 6.5 kV IGBTs — the highest efficiency design on the market."
      specs={[
        { label: 'Power Range', value: '500–22,500 HP (400–16,000 kW)' },
        { label: 'Voltage', value: '2.3 kV to 6.9 kV' },
        { label: 'Output Frequency', value: 'Up to 120 Hz' },
        { label: 'Topology', value: 'VSI — NPC' },
        { label: 'Power Components', value: '6.5 kV IGBTs (latest gen)' },
        { label: 'Power Factor', value: 'High — across full speed range' },
      ]}
      features={[
        'Voltage Source Inverter (VSI) with NPC (Neutral Point Clamped) topology',
        'Latest generation 6.5 kV IGBT power components',
        'Highest efficiency design on the market — optimum component count',
        'High power factor maintained over entire speed range',
        'Output frequency up to 120 Hz for high-speed applications',
        'Suitable for compressors, pumps, fans, conveyors, and mills',
        'Streamlines processes and delivers significant operating cost savings',
        'Ideal for new installations and restoration projects',
        '24/7 technical support from SEEL engineering team',
      ]}
    />
  )
}
