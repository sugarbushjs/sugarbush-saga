import { IAction } from '../types/actions';
export declare function sbPut(key: string): (type: string, payload: any) => Generator<import("redux-saga/effects").PutEffect<IAction<string, any, string>>, void, unknown>;
