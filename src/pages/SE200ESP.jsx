import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200ESP() {
  return (
    <SE200ProductPage
      title="SE200 ESP Drive"
      subtitle="Electrical Submersible Pump Applications"
      description="A specialized variable frequency drive designed for Electrical Submersible (ESP) pump applications. Features V/Hz or PMM motor control for precise speed control and a 7-inch touchscreen HMI for full annunciation and control."
      specs={[
        { label: 'Power Range', value: '5HP – 800HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'HMI', value: '7" Touchscreen' },
      ]}
      features={[
        'V/Hz or PMM motor control for precise ESP pump operation',
        '7-inch touchscreen HMI for annunciation and control',
        'Integrated well shutdowns and data logging capabilities',
        'Programmable underload & overload shutdowns',
        'Automatic well restarts',
        'Shutdown bypass and backspin timer lockout',
        'Manual or PID speed control',
        'Single-phase to three-phase conversion capability',
        'Reduces maintenance costs on mechanical equipment and downhole pumps',
      ]}
    />
  )
}
