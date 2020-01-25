import React from 'react'
import {connect} from 'react-redux'
import {setSelectedAsset} from '../store'

const AssetSelect = () => {

  return (
    <div>
      ASSETSELECT
    </div>
  )
}

const mapState = (state: any) => ({
  selectedAsset: state.selectedAsset,
})

const mapDispatch = (dispatch: any) => ({
  setSelectedAsset: (asset: any) => dispatch(setSelectedAsset(asset)),
})

export default connect(mapState, mapDispatch)(AssetSelect)
