import { switchback } from 'sugarbush'
import CounterState from './count-reducers'
import SystemState from './system-reducer'
import { SAGA_BYPASS } from './mock-store'

export const reducers = switchback(
  {
    SystemState,
    CounterState,
  },
  { verbose: false, sagaBypass: SAGA_BYPASS },
)
