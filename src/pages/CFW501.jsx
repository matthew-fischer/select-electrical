import VFDProductPage from '../components/VFDProductPage'

export default function CFW501() {
  return (
    <VFDProductPage
      title="CFW501"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="All HVAC-R Special Functions in One Drive"
      description="The CFW501 covers power levels from 0.18 to 7.5 kW (0.25 to 10 HP) with all special functions and technical characteristics dedicated to getting the full HVAC-R potential. Features BACnet, Metasys, and Modbus communications with SoftPLC technology built in."
      specs={[
        { label: 'Power Range', value: '0.25–10 HP (0.18–7.5 kW)' },
        { label: 'Protocols', value: 'BACnet MS/TP, Metasys N2, Modbus-RTU' },
        { label: 'Interface', value: 'RS485' },
        { label: 'Harmonics', value: 'IEC61000-3-12 compliant' },
        { label: 'PID Loops', value: 'Two independent loops' },
        { label: 'Coating', value: 'Conformal — all versions' },
      ]}
      features={[
        'Built-in RFI filter reducing high-frequency electromagnetic interference',
        'Low harmonic distortion meeting IEC61000-3-12 standard',
        'SoftPLC technology — adds PLC features without external hardware',
        'Two independent PID control loops for cost reduction and reliability',
        'BACnet MS/TP, Metasys N2, and Modbus-RTU via RS485 communications',
        'Conformal coating across all versions for aggressive environments',
        'Purpose-built for HVAC-R applications',
        'Compact design for space-constrained mechanical rooms',
      ]}
    />
  )
}
