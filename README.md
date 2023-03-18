# Sugarbush-Saga
![logo-sm.png](logo%2Flogo-sm.png)

[Project Source Code](https://github.com/sugarbushjs/sugarbush-saga)

**Sugarbush** is a performance enhancer for your react-redux application by replacing the Redux
<u>combinedReducers</u> with `switchback`. Switchback will only run the corresponding reducer that matches
the dispatched action type. Please read more about npm [sugarbush](https://www.npmjs.com/package/sugarbush)

\
**Sugarbush-Saga** includes saga helper that works with the Sugarbush switchback,
`confingureAdaptiveStrore`, `adaptiveSagaDispatch`, and `sbPut` (saga effect)


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
> **Note**: The dispatchSaga is a method of the Sugarbush `configureAdaptiveStore`. To set up a configureAdaptiveStore
> please read about [sugarbush](https://www.npmjs.com/package/sugarbush)

### adaptiveSagaDispatch
```js
import { store } from '../components/App/store'
import { adaptiveSagaDispatch } from 'sugarbush'

export const sagaAdpDispatch = () => adaptiveSagaDispatch({dispatch: store.dispatch, key: '@@GAGA-BYPASS!', versobe: false })
```
> **Note**: verbose is optional and is true by default but will be set to false in a production environment.


### switchback
The unique saga key assigned to either the dispatchSaga or adaptiveSagaDispatch must also be assigned to switchback. This
key will prevent switchback from processing any reducers when a saga action is dispatched.

```js
const reducers = switchback({
    SystemState,
    CounterState,
    StatusState,
  }, {sagaBypass: '@@GAGA-BYPASS!'}
)
```
> **Note**: To set up switchback please read [sugarbush](https://www.npmjs.com/package/sugarbush)


## sbPut

Use the sbPut side effect to run the corresponding reducer with switchback. The sbPut
wraps the Saga Put effect and adds the reducer’s key to the effect. The sbPut is first initialized with a key representing the reducer listed in switchback. The sbPut reference
takes two parameters. The first is an action type, type string, and payload of any.

```js
import { takeEvery } from 'redux-saga/effects'
import { sbPut } from 'sugarbush'
import { SystemActionEnum } from '../actions/system-actions'

/** Using the sugarbush-saga effect of sbPut to set the key*/
const _put = sbPut('SystemState')

export function* watchFetchSystemSettings() {
  yield takeEvery(SystemActionEnum.FETCH_SYSTEM_THEME, fetchSetSystemTheme)
}

function* fetchSetSystemTheme() {
  /** Using the sugarbush-saga effect of sbPut */
  yield _put(SystemActionEnum.SET_SYSTEM_THEME, 'GREEN')
}
```
\
Internally the sbPut creates an action type with a key and calls the Saga Put side effect.

```js
const _action:IAction = ({type: type, payload: payload, key: key})
yield put(_action)
```

## Examples:
* [switchback-example-saga](https://github.com/sugarbushjs/switchback-exp-saga)
* [switchback-example-classic](https://github.com/sugarbushjs/switchback-example-classic)
* [switchback-example-toolkit](https://github.com/sugarbushjs/switchback-example-toolkit)


## License

[MIT](LICENSE.md)
