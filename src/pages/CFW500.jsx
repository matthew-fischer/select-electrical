import VFDProductPage from '../components/VFDProductPage'

export default function CFW500() {
  return (
    <VFDProductPage
      title="CFW500"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      image="/images/low-voltage/cfw500.png"
      tagline="Fast Commissioning & Infinite Possibilities"
      description="With a modern design and power ranging from 0.25 to 75 cv, the CFW500 frequency inverter is a high performance variable speed drive, which assists in controlling speed and torque of three-phase induction motors."
      technicalSpecsLink="https://pamensky.com/cfw500.html"
      features={[
        'Operates up to 50°C ambient temperature without derating',
        'Built-in braking IGBT capability (optional)',
        'CANopen, DeviceNet, Profibus-DP, EtherNet-IP, Profinet-IO, and Modbus-RTU fieldbus',
        'Conformal coating class 3C2 for corrosive atmosphere protection',
        'Internal RFI filter for electromagnetic interference reduction',
        'Pump Genius functions for pumping system applications',
        'Memory card for parameter transfers without powering down the unit',
        'Free WLP and SuperDrive G2 programming software',
        'Fast commissioning for reduced setup time',
      ]}
    />
  )
}
