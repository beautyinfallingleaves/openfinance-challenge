import {createStore, combineReducers} from 'redux'

// Reducer Imports
import timeframe from './timeframe'
import assets from './assets'
import selectedAsset from './selectedAsset'

const reducer = combineReducers({
  timeframe,
  assets,
  selectedAsset,
})

const store = createStore(reducer)

export default store
export * from './timeframe'
export * from './assets'
export * from './selectedAsset'
