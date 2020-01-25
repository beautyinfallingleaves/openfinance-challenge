import {TIMEFRAME} from '../util'

const SET_TIMEFRAME = 'SET_TIMEFRAME'

export const setTimeframe = (timeframe: TIMEFRAME) => ({
  type: SET_TIMEFRAME,
  timeframe
})

const initialState = TIMEFRAME.Hour

export default function(state = initialState, action: any) {
  switch (action.type) {
    case SET_TIMEFRAME:
      return action.timeframe
    default:
      return state
  }
}
