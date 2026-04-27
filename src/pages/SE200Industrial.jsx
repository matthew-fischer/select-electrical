import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200Industrial() {
  return (
    <SE200ProductPage
      title="SE200 Industrial Drive"
      subtitle="General-Purpose Heavy-Duty VFD Package"
      description="A general-purpose, heavy-duty variable frequency drive suitable for diverse industrial applications across any motor-driven equipment type — including compressors, pumps, conveyors, fans, and elevators. Customizable to meet specific end-user requirements."
      specs={[
        { label: 'Power Range', value: '1HP – 800HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'Application', value: 'Any motor load type' },
      ]}
      features={[
        'Heavy-duty general-purpose VFD package',
        'Compatible with any motor load type',
        'Customizable to meet specific end-user requirements',
        'Precise speed control',
        'Single-phase to three-phase incoming power conversion',
        'Significant power savings versus traditional motor starters',
        'Short return on investment timeline',
        'Suitable for compressors, pumps, conveyors, fans, and elevators',
      ]}
    />
  )
}
