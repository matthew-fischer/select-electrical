import VFDProductPage from '../components/VFDProductPage'

export default function MVW3000() {
  return (
    <VFDProductPage
      title="MVW3000"
      category="Medium Voltage VFDs"
      categoryTo="/medium-voltage-vfd"
      tagline="Efficient, Robust Medium Voltage Solution"
      description="The MVW3000 is an efficient and robust solution that, in addition to speed control, enables energy savings and lower maintenance costs. Features sinusoidal output voltage and current, IEEE 519 harmonic compliance, and a high power factor above 0.95 — no external filters required."
      specs={[
        { label: 'Motor Voltage', value: '1.15 kV to 13.8 kV' },
        { label: 'Input Voltage', value: '1.15 kV to 13.8 kV' },
        { label: 'Motor Current', value: 'Up to 340A (higher on request)' },
        { label: 'Power Factor', value: '>0.95' },
        { label: 'Cooling', value: 'High-efficiency air cooling' },
        { label: 'Harmonics', value: 'IEEE 519 compliant — no filters needed' },
      ]}
      features={[
        'Motor and input voltage from 1.15 kV to 13.8 kV',
        'High-efficiency air cooling system',
        'IEEE 519 harmonic compliance — no external filters required',
        'Fully integrated solution reducing commissioning and startup time',
        'High power factor above 0.95',
        'Optimized input harmonics without requiring filters',
        'Sinusoidal output voltage and current — reduces motor losses, vibration, torque pulsation, and overheating',
        'Graphical HMI following the same programming philosophy as WEG low voltage drives',
        'Suitable for compressors, pumps, fans, conveyor belts, and mills',
      ]}
    />
  )
}
