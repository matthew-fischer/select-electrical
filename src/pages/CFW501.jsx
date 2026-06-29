import VFDProductPage from '../components/VFDProductPage'

export default function CFW501() {
  return (
    <VFDProductPage
      title="CFW501"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      image="/images/low-voltage/cfw501.png"
      tagline="All HVAC-R Special Functions in One Drive"
      description="The CFW501 inverter line has been developed with dedicated features for HVAC-R applications."
      technicalSpecsLink="https://pamensky.com/cfw501.html"
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
