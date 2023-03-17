// @ts-ignore
import { AppStore, SAGA_BYPASS } from './mocks/mock-store'
import { reducers } from './mocks/reducers'
/*
import { SystemActionEnum } from './mocks/system-reducer'
import { adaptiveSagaDispatch } from '../src'
*/

describe('Adaptive Saga Dispatch', () => {
  it('dispatch', () => {
    //const sagaDispatch = () => adaptiveSagaDispatch({ dispatch: AppStore.dispatch, key: SAGA_BYPASS })
    //const dispatch = sagaDispatch()
    //dispatch(SystemActionEnum.SET_SYSTEM_THEME, "RED")
    const action = {
      type: 'FETCH_SYSTEM_THEME',
      payload: 'RED',
      key: SAGA_BYPASS,
    }
    const nextState = reducers(AppStore.getState(), action)
    expect(nextState.SystemState.theme).toEqual('RED')
  })
})
