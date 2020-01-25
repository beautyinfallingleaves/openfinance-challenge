const SET_SELECTEDASSET = 'SET_SELECTEDASSET'

export const setSelectedAsset = (asset: Object) => ({
  type: SET_SELECTEDASSET,
  asset
})

// TO DO: replace this with an initial setSelectedAsset once assets data is fetched
const initialState: Object = {
  id: 1,
  name: 'OFNT',
  openPrice: 195,
  closePrice: 201,
  periodChange: 0.05,
}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case SET_SELECTEDASSET:
      return action.asset
    default:
      return state
  }
}
