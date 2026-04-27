import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200PCP() {
  return (
    <SE200ProductPage
      title="SE200 PCP Pump Drive"
      subtitle="Progressive Cavity Pump Applications"
      description="A specialized VFD solution designed for progressive cavity pump (PCP) applications in the oil and gas industry. Delivers sensorless motor control with precise torque control, integrated high torque shutdowns, and pump RPM display on the HMI."
      specs={[
        { label: 'Power Range', value: '5HP – 200HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'Control Method', value: 'Door-mounted potentiometer' },
      ]}
      features={[
        'Sensorless motor control with precise torque control',
        'Integrated high torque shutdowns measured in foot-pounds',
        'Pump RPM and torque (ft-lbs) displayed on VFD HMI',
        'Automatic well restarts',
        'Startup delays and backspin timer lockout',
        'Precise speed control without motor sheave changes',
        'Automatic timer on/off control available',
        'Auto-restart functionality on VFD faults or well shutdowns',
        'Well shutdown annunciation on HMI',
        'Reduced maintenance on mechanical equipment, downhole pumps, and rod strings',
      ]}
    />
  )
}
