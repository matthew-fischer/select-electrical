import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200ArtificialLift() {
  return (
    <SE200ProductPage
      title="SE200 Artificial Lift Controller Drive"
      subtitle="Automated Rod Pump Control"
      description="A variable frequency drive package designed for automated rod pump control in artificial lift applications. Features a 7-inch touchscreen color HMI with integrated Artificial Lift Controller, sensorless motor control, and advanced pump fillage algorithms for optimized production."
      specs={[
        { label: 'Power Range', value: '1HP – 300HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'HMI', value: '7" Colour Touchscreen' },
      ]}
      features={[
        '7-inch touchscreen color HMI with integrated Artificial Lift Controller',
        'Sensorless motor control using advanced pump fillage algorithms',
        'Real-time load and position measurements',
        'Two analog inputs for pressure transmitters',
        'Three digital inputs for well shutdown integration',
        'Automated pump-off control (speed and timer options)',
        'Inter-stroke and peak load limit speed control',
        'Maximum/minimum rod load shutdown protection',
        'Automatic start/stop via pump-off state or timer',
        'Compatible with artificial lift pumping units of any size',
        'Manual and automatic speed control options',
      ]}
    />
  )
}
