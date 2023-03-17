// @ts-ignore
import { AppStore } from './mocks/mock-store'
import { sbPut } from '../src'
import { SystemActionEnum } from './mocks/system-reducer'

describe('Adaptive Saga Dispatch', () => {
  it('dispatch', () => {
    /** Using the sugarbush effect of spPut */
    const _put = sbPut('SystemState')
    const _yield = _put(SystemActionEnum.SET_SYSTEM_THEME, 'GREEN')
    _yield.next()

    const state = AppStore.getState()
    expect(state.SystemState.theme).toEqual('')
  })
})
