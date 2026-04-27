import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200AutomatedPump() {
  return (
    <SE200ProductPage
      title="SE200 Automated Pump Drive"
      subtitle="Surface Pump Applications"
      description="Engineered specifically for surface pump applications. Features an onboard PLC that enables pump shutdowns to connect directly to the unit, with custom programming that displays individual shutdown alerts on the VFD HMI — eliminating the need for a separate external control panel."
      specs={[
        { label: 'Power Range', value: '1HP – 800HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'PID Control', value: 'Onboard with HMI setpoints' },
      ]}
      features={[
        'Manual speed control via door-mounted potentiometer',
        'Automatic speed control from external analog inputs',
        'Onboard PID speed control with adjustable set points via HMI',
        'Transmitter power looping capability for PID operations',
        'Customized onboard PLC programming for all pump shutdowns',
        'Direct terminal strip wiring for shutdown devices — no external panel required',
        'Adjustable startup bypass timers',
        'Auto-restart functionality for VFD faults or shutdowns',
        'Shutdown annunciation on VFD HMI',
        'Precise speed control for energy optimization',
      ]}
    />
  )
}
