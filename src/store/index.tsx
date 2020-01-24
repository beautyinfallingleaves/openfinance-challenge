import {createStore, combineReducers} from 'redux'

// Reducer Imports
import timeframe from './timeframe'

const reducer = combineReducers({
  timeframe,
})

const store = createStore(reducer)

export default store
export * from './timeframe'
