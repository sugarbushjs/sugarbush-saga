import { Dispatch } from 'redux';
/**
 * @template dispatch of type redux Dispatch
 * @description An interface for useAdaptiveDispatch
 */
export interface IAdpSagaDispatchOptions<D extends Dispatch, K extends string> {
    dispatch: D;
    key: K;
}
