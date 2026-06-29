import VFDProductPage from '../components/VFDProductPage'

export default function CFW320() {
  return (
    <VFDProductPage
      title="CFW320"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      image="/images/low-voltage/cfw320.png"
      tagline="Precise Control & Easy Operation"
      description="The CFW320 is a high-performance variable speed drive designed for three-phase induction motors that require precise control and easy operation. Expandable via accessory slots and compatible with optional remote HMI for flexible installation."
      technicalSpecsLink="https://pamensky.com/cfw320.html"
      features={[
        'Flash Memory Module accessory (CFW320-MMF) for parameter backup and copy',
        '2 slots for function expansion with accessories',
        'Easily removable fan for simplified maintenance',
        'Optional RFI filter (CFW320-KFA/B) for EMI compliance',
        'Optional remote operating interface (HMI) for flexible mounting',
        'Greater protection for aggressive environments',
        'High-performance speed and torque control',
        'Free WLP programming software',
        'Compact design for panel space savings',
      ]}
    />
  )
}
