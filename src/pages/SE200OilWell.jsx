import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200OilWell() {
  return (
    <SE200ProductPage
      title="SE200 Oil Well Drive"
      subtitle="Rod Pump & Artificial Lift Applications"
      description="A variable frequency drive system designed specifically for rod pump applications. Features sensorless motor control without dynamic braking resistors and onboard automatic voltage regulation, compatible with artificial lift pumping units of any size."
      specs={[
        { label: 'Power Range', value: '5HP – 200HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'HMI Display', value: 'Strokes per minute' },
      ]}
      features={[
        'Sensorless motor control — no dynamic braking resistors required',
        'Onboard automatic voltage regulation',
        'Manual speed control via door-mounted potentiometer',
        'Auto restart on VFD faults or well shutdowns',
        'Precise speed control without sheave changes',
        'Automatic timer on/off control available',
        'Annunciation of well shutdowns on VFD display',
        'Handles imbalanced applications efficiently',
        'Reduces maintenance on mechanical equipment and downhole components',
        'Short return on investment timeline',
      ]}
    />
  )
}
