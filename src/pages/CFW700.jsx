import VFDProductPage from '../components/VFDProductPage'

export default function CFW700() {
  return (
    <VFDProductPage
      title="CFW700"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="High-Performance General Purpose Drive"
      description="The CFW700 is a high-performance product with torque and speed control, covering power levels from 1.1 to 132 kW (1.5 to 150 HP). Built for robust general-purpose industrial applications with WEG's Vectrue Technology® and Optimal Flux® for maximum efficiency."
      specs={[
        { label: 'Power Range', value: '1.5–150 HP (1.1–132 kW)' },
        { label: 'Control Technology', value: 'Vectrue Technology®' },
        { label: 'Efficiency', value: 'Optimal Flux®' },
        { label: 'Braking', value: 'Optimal Braking®' },
        { label: 'DC Reactor', value: 'Built-in DC Link Reactor' },
        { label: 'Safety', value: 'Safety Stop — STO' },
      ]}
      features={[
        'Vectrue Technology® — WEG variable speed drive control for superior performance',
        'Optimal Flux® — high efficiency control for constant torque induction motor loads',
        'Optimal Braking® — WEG braking technology for controlled deceleration',
        'Built-in DC Link Reactor — reduces harmonic distortion',
        'I/O capability for flexible integration',
        'Multiple communication protocols supported',
        'Conformal coating for harsh environments',
        'Safety Stop (STO) for functional safety compliance',
        'Robust hardware designed for demanding general-purpose industrial use',
      ]}
    />
  )
}
