import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200GasCompressor() {
  return (
    <SE200ProductPage
      title="SE200 Gas Compressor Drive"
      subtitle="Gas Compressor & Pump Applications"
      description="Features an onboard PLC enabling direct connection of compressor shutdowns to the unit. Custom programming allows individual shutdown annunciation on the VFD HMI, with adjustable bypass timers and logic tailored to specific applications. Compatible with compressors or pumps of any size or model."
      specs={[
        { label: 'Power Range', value: '1HP – 800HP' },
        { label: 'Voltage Options', value: '230 / 460 / 600 VAC' },
        { label: 'Input Conversion', value: '1-Phase to 3-Phase' },
        { label: 'Sizing Basis', value: 'Motor horsepower' },
      ]}
      features={[
        'Onboard PLC with direct compressor shutdown connections',
        'Customized PLC programming for all compressor shutdowns',
        'Individual shutdown annunciation on VFD HMI',
        'Manual and automatic speed control options',
        'Onboard PID speed control with adjustable setpoint via HMI',
        'Transmitter loop power capability',
        'Direct terminal strip wiring for shutdown devices — no external panel required',
        'Adjustable startup bypass timer',
        'Auto-restart on VFD faults',
        'Compatible with compressors or pumps of any size or model',
        'Precise speed control with reduced energy consumption',
      ]}
    />
  )
}
