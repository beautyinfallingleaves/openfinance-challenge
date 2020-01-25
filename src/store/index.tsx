import {createStore, combineReducers} from 'redux'

// Reducer Imports
import timeframe from './timeframe'
import assets from './assets'

const reducer = combineReducers({
  timeframe,
  assets,
})

const store = createStore(reducer)

export default store
export * from './timeframe'
export * from './assets'
