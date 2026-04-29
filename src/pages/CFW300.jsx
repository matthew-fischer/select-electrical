import VFDProductPage from '../components/VFDProductPage'

export default function CFW300() {
  return (
    <VFDProductPage
      title="CFW300"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="Precise Control & Easy Operation"
      description="The CFW300 is a high-performance variable speed drive designed for three-phase induction motors that require precise control and easy operation. Expandable via accessory slots and compatible with optional remote HMI for flexible installation."
      specs={[
        { label: 'Motor Type', value: 'Three-phase induction' },
        { label: 'Expansion Slots', value: '2 function expansion slots' },
        { label: 'Memory', value: 'Flash Memory Module (CFW300-MMF)' },
        { label: 'RFI Filter', value: 'Optional (CFW300-KFA/B)' },
        { label: 'Remote HMI', value: 'Optional (CFW300-KHMIR)' },
        { label: 'Fan', value: 'Easily removable' },
      ]}
      features={[
        'Flash Memory Module accessory (CFW300-MMF) for parameter backup and copy',
        '2 slots for function expansion with accessories',
        'Easily removable fan for simplified maintenance',
        'Optional RFI filter (CFW300-KFA/B) for EMI compliance',
        'Optional remote operating interface (HMI) for flexible mounting',
        'Greater protection for aggressive environments',
        'High-performance speed and torque control',
        'Free WLP programming software',
        'Compact design for panel space savings',
      ]}
    />
  )
}
