const SET_SELECTEDASSET = 'SET_SELECTEDASSET'

export const setSelectedAsset = (asset: Object) => ({
  type: SET_SELECTEDASSET,
  asset
})

const initialState: Object = {}

export default function(state = initialState, action: any) {
  switch(action.type) {
    case SET_SELECTEDASSET:
      return action.asset
    default:
      return state
  }
}
