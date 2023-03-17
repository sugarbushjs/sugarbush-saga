import { Dispatch } from 'redux';
import { IAdpSagaDispatchOptions } from '../types/disaptchTypes';
export declare function adaptiveSagaDispatch<D extends Dispatch, K extends string>(options: IAdpSagaDispatchOptions<D, K>): (action: any) => void;
