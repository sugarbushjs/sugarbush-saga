/* eslint-disable */
// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import { configureAdaptiveStore } from '../../src'
import { reducers } from './reducers'
export const SAGA_BYPASS = '@@SAGA-BYPASS!'
export const AppStore = configureStore({
  reducer: reducers,
})

export const createAdpStore = () => {
  return configureAdaptiveStore({
    dispatch: AppStore.dispatch,
  })
}



export default createAdpStore
