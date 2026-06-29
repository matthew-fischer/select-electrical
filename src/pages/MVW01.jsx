import VFDProductPage from '../components/VFDProductPage'

export default function MVW01() {
  return (
    <VFDProductPage
      title="MVW01"
      category="Medium Voltage VFDs"
      categoryTo="/medium-voltage-vfd"
      image="/images/medium-voltage/mvw01.png"
      tagline="High-Efficiency Medium Voltage Drive"
      description="The MVW01 suits a variety of industrial variable speed applications including compressors, pumps, fans, conveyors, and mills."
      technicalSpecsLink="https://pamensky.com/mvw01.html"
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
