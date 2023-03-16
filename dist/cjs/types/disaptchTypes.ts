import { Dispatch } from 'redux'

/**
 * @template dispatch of type redux Dispatch
 * @description An interface for useAdaptiveDispatch
 */
export interface IAdpSagaDispatchOptions<D extends Dispatch, V extends boolean> {
  dispatch: D
  verbose?: V
}
