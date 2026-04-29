import VFDProductPage from '../components/VFDProductPage'

export default function CFW11() {
  return (
    <VFDProductPage
      title="CFW11"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="Versatile VFD for Almost Any Application"
      description="The CFW11 presents many innovations adding significant benefits to customers. A versatile drive that can be used in almost any application, featuring multiple control modes, built-in DC link inductors, and communication protocols for seamless system integration."
      specs={[
        { label: '200–240V (1-phase)', value: '1.5–3 cv (6–10A)' },
        { label: '200–240V (3-phase)', value: '1.5–75 cv (7–211A)' },
        { label: '380–480V (3-phase)', value: '2–600 cv (3.6–720A)' },
        { label: '500–600V (3-phase)', value: '2–400 cv (2.7–435A)' },
        { label: '500–690V (3-phase)', value: '3–482 cv (2.7–365A)' },
        { label: 'Enclosure (optional)', value: 'IP54 cabinet' },
      ]}
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
