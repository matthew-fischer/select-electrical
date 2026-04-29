import VFDProductPage from '../components/VFDProductPage'

export default function CFW701() {
  return (
    <VFDProductPage
      title="CFW701"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="Dedicated HVAC-R Drive"
      description="The HVAC-R market deserves a dedicated and complete drive. The CFW701 covers power levels from 1.1 to 132 kW (1.5 to 175 HP) with built-in features specifically designed for heating, ventilation, air conditioning, and refrigeration applications."
      specs={[
        { label: '220V (1-phase)', value: '1.5–3 cv (6–10A)' },
        { label: '220V (3-phase)', value: '1.5–75 cv (6–211A)' },
        { label: '380–480V (3-phase)', value: '2–175 cv (3.6–211A)' },
        { label: 'Market', value: 'HVAC-R dedicated' },
        { label: 'Control', value: 'Vectrue Technology® / VVW' },
        { label: 'Coating', value: 'Conformal per DIN EN 60068-2-60' },
      ]}
      features={[
        'Dedicated HVAC-R features for heating, ventilation, A/C, and refrigeration',
        'Vectrue Technology® frequency inverter control',
        'VVW (Voltage Vector WEG) technology',
        'Adjustable or linear V/F scalar control',
        'Built-in specific HVAC operating interface',
        'Conformal coating per DIN EN 60068-2-60 for durability',
        'Single-phase to three-phase input flexibility',
        'Complete drive solution purpose-built for HVAC-R applications',
      ]}
    />
  )
}
