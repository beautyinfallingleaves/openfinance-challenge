import {TIMEFRAME} from '../util'

const SET_TIMEFRAME = 'SET_TIMEFRAME'

export const setTimeframe = (timeframe: TIMEFRAME) => ({type: SET_TIMEFRAME, timeframe})

export default function(state = TIMEFRAME.Hour, action: any) {
  switch (action.type) {
    case SET_TIMEFRAME:
      return action.timeframe
    default:
      return state
  }
}
