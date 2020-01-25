const SET_ASSETS = 'SET_ASSETS'

export const setAssets = (assets: Object[]) => ({
  type: SET_ASSETS,
  assets
})

export const fetchAssets = () => {
  return async (dispatch: any) => {
    try {
      //TODO: API call
    } catch (err) {
      console.error(new Error('Error fetching assets!'))
    }
  }
}

const initialState: any[] = [
  {
    id: 1,
    name: 'OFNT',
    openPrice: 195,
    closePrice: 201,
    periodChange: 0.05,
  },
  {
    id: 2,
    name: 'SPICE',
    openPrice: 107,
    closePrice: 108,
    periodChange: 0.025,
  },
  {
    id: 3,
    name: '22X',
    openPrice: 125,
    closePrice: 101,
    periodChange: -0.15,
  },
  {
    id: 4,
    name: 'BCAP',
    openPrice: 140,
    closePrice: 150,
    periodChange: 0.03,
  },
]

export default function(state = initialState, action: any) {
  switch(action.type) {
    case SET_ASSETS:
      return action.assets
    default:
      return state
  }
}
