import VFDProductPage from '../components/VFDProductPage'

export default function CFW500() {
  return (
    <VFDProductPage
      title="CFW500"
      category="Low Voltage VFDs"
      categoryTo="/low-voltage-vfd"
      tagline="Fast Commissioning & Infinite Possibilities"
      description="The CFW500 covers power levels from 0.18 to 7.5 kW (0.25 to 10 HP) and is designed for fast commissioning in machine applications. Operates in ambient temperatures up to 50°C without derating, with full fieldbus communication support."
      specs={[
        { label: 'Power Range', value: '0.25–10 HP (0.18–7.5 kW)' },
        { label: 'Voltage Options', value: '200–240V, 380–480V, 500–600V' },
        { label: 'Current Range', value: '1.0–56A' },
        { label: 'Ambient Temp', value: 'Up to 50°C (no derating)' },
        { label: 'Conformal Coating', value: 'Class 3C2' },
        { label: 'Braking IGBT', value: 'Built-in (optional)' },
      ]}
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
