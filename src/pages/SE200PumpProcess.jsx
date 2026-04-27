import SE200ProductPage from '../components/SE200ProductPage'

export default function SE200PumpProcess() {
  return (
    <SE200ProductPage
      title="SE200 Pump Process Drive"
      subtitle="Pump Process Accuracy & Protection"
      description="Software engineered to enhance pump process accuracy and protection while minimizing operational and maintenance costs. Integrates with WEG CFW11 drives to manage pump operations through continuous system monitoring, supporting both simplex and multiplex pump setups."
      specs={[
        { label: 'Base Drive', value: 'WEG CFW11' },
        { label: 'Configurations', value: 'Simplex & Multiplex' },
        { label: 'Control', value: 'PID with multiple setpoint sources' },
        { label: 'Setpoint Sources', value: 'Keypad, analog, digital, comms, scheduler' },
      ]}
      features={[
        'Simplex and multiplex pump configuration support',
        'PID control with setpoint adjustment via keypad, analog input, digital inputs, communication, or weekly scheduling',
        'Pump sleep/wake modes and jockey pump control',
        'Sleep boost capabilities',
        'Motor and drive fault detection',
        'Pump failure detection — dry pump, air in system, blocked impeller',
        'Transducer loss and feedback signal monitoring',
        'Pump over-cycling and obstruction alerts',
        'Current-limited stall prevention',
        'Heat sink monitoring',
        'Minimizes operational and maintenance costs',
      ]}
    />
  )
}
