import VFDProductPage from '../components/VFDProductPage'

export default function CFW11() {
  return (
    <VFDProductPage
      title="CFW11"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      image="/images/low-voltage/cfw11.png"
      tagline="Versatile VFD for Almost Any Application"
      description="The CFW11 presents many innovations adding significant benefits to customers. A versatile drive that can be used in almost any application, featuring multiple control modes, built-in DC link inductors, and communication protocols for seamless system integration."
      features={[
        'Built-in inductors on DC link — reduces harmonics without external components',
        'Space-saving panel design',
        'Built-in USB port for easy programming and firmware updates',
        'Smart cooling system for extended drive life',
        'Modbus, DeviceNet, Profibus-DP, CANopen, and Ethernet-IP communication',
        'IP54 cabinet protection available',
        'High precision speed and torque control',
        'Robust hardware for demanding environments',
        'Multiple control modes for versatile application',
      ]}
    />
  )
}
