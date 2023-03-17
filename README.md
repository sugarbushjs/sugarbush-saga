# Sugarbush-Saga
![logo-sm.png](logo%2Flogo-sm.png)

[Project Source Code](https://github.com/sugarbushjs/sugarbush-saga)

**Sugarbush** is a performance enhancer for your react-redux application by replacing the Redux
<u>combinedReducers</u> with `switchback`. Switchback will only run the corresponding reducer that matches
the dispatched action type. Please read more about npm [sugarbush](https://github.com/sugarbushjs/sugarbush)

\
**Sugarbush-Saga** includes saga helper that work with the Sugarbush switchback,
`confingureAdaptiveStrore`, `adaptiveSagaDispatch` and `sbPut` (saga effect)


## Installation
```
Minimum Requirements: React: 16.8
```
```
npm install sugarbush-saga
```
```
yarn add sugarbush-saga
```



## Saga

When dispatching Saga actions, the combinedReducers will process all the reducers. With `dispatchSaga` from `configureAdaptiveStore`
or `adaptiveSagaDispatch` this will not occur. Both functions take two parameters. The first parameter, dispatch, of 
type Redux Dispatch, the second parameter, key, of type string. The key assigned to either method must be unique 
and is used to bypass Sugarbush's switchback. This unique key must also be assigned to Sugarbush's switchback.

### dispatchSaga
```js
import { adpStore } from '../components/App'

export const sagaDispatch = () => adpStore.dispatchSaga('@@GAGA-BYPASS!')
```
> **Note**: The dispatch is internally assigned by the `configureAdaptiveStore`.

### adaptiveSagaDispatch
```js
import { store } from '../components/App/store'
import { adaptiveSagaDispatch } from 'sugarbush'

export const sagaAdpDispatch = () => adaptiveSagaDispatch({dispatch: store.dispatch, key: '@@GAGA-BYPASS!', versobe: false })
```
> **Note**: verbose is optional and is true by default, but will be set to false in a production environment.


### switchback
The unique saga key assigned to either dispatchSaga or adaptiveSagaDispatch must also be assigned to switchback. This
will prevent switchback from processing any reducers.

```js
const reducers = switchback({
    SystemState,
    CounterState,
    StatusState,
  }, {sagaBypass: '@@GAGA-BYPASS!'}
)
```

## sbPut

When using the Saga Put side effect, all the reducers are processed again while using combinedReducers. To run only the
corresponding reducer for the Saga Put effect, use the sbPut side effect from Sugarbush. This wraps the Saga Put effect
and adds the reducer’s key to the effect.

The sbPut side effect take two parameters. The first is an action type, of type string, and payload of any.

```js
import { takeEvery } from 'redux-saga/effects'
import { sbPut } from 'sugarbush'
import { SystemActionEnum } from '../actions/system-actions'

/** Using the sugarbush effect of sbPut to set the key*/
const _put = sbPut('SystemState')

export function* watchFetchSystemSettings() {
  yield takeEvery(SystemActionEnum.FETCH_SYSTEM_THEME, fetchSetSystemTheme)
}

function* fetchSetSystemTheme() {
  /** Using the sugarbush effect of sbPut */
  yield _put(SystemActionEnum.SET_SYSTEM_THEME, 'GREEN')
}
```
\
Internally the sbPut creates an action type with a key and calls the saga PUT:

```js
const _action:IAction = ({type: type, payload: payload, key: key})
yield put(_action)
```

## Examples:
* [switchback-example-classic](https://github.com/sugarbushjs/switchback-example-classic)
* [switchback-example-toolkit](https://github.com/sugarbushjs/switchback-example-toolkit)
* [switchback-example-saga](https://github.com/sugarbushjs/switchback-exp-saga)


## License

[MIT](LICENSE.md)
