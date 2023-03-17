import { Dispatch } from 'redux'
import { IAdpSagaDispatchOptions } from '../types/disaptchTypes'

// @ts-ignore
const emoji = String.fromCodePoint('0X1F6A1')

export function adaptiveSagaDispatch<D extends Dispatch, K extends string>(options: IAdpSagaDispatchOptions<D, K>) {
  const { dispatch: _dispatch, key: _key } = options || {}

  return function _fis(action: any) {
    try {
      const _action = { ...action, key: _key }
      _dispatch(_action)
    } catch (e) {
      console.error(`${emoji} error in AdaptiveDispatch: ${e}`)
    }
  }
}
