import React from 'react'
import {connect} from 'react-redux'
import {setSelectedAsset} from '../store'
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core'
import TrendingUp from '@material-ui/icons/TrendingUp'
import TrendingDown from '@material-ui/icons/TrendingDown'
import {makeStyles} from '@material-ui/core/styles'

// Define Material-UI styles
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  formContent: {
    color: 'white',
  },
  assetSummary: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}))

const AssetSelect: React.FC = (props: any) => {
  // Styling hook
  const classes = useStyles()

  const {assets, selectedAsset, setSelectedAsset} = props

  const handleChange = (event: any) => {
    // dispatch change to selectedAsset in store
    const selectedAsset = assets.filter((asset: any) => {
      return asset.id === event.target.value
    })
    setSelectedAsset(selectedAsset[0])
  }

  return (
    <Box className={classes.root}>
      <FormControl
        id="form-control"
        variant="outlined"
        className={classes.formControl}
        size="medium"
      >
        <Select
          className={classes.formContent}
          id="asset-select"
          value={selectedAsset.id}
          onChange={handleChange}
        >
          {assets && assets.map((asset: any) => {
            return (
              <MenuItem key={asset.id} value={asset.id}>{asset.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Box className={classes.assetSummary}>
        <Box>
          <Typography variant="h5">LAST TRADE PRICE</Typography>
          <Typography variant="body1">${selectedAsset.closePrice / 100}</Typography>
        </Box>
        <Box>
          <Typography variant="h5">CHANGE</Typography>
          {selectedAsset.periodChange > 0 ? (
            <Typography style={{color: 'green'}} variant="body1">
              {selectedAsset.periodChange * 100}% <TrendingUp />
            </Typography>
          ) : (
            <Typography style={{color: 'red'}} variant="body1">
              {selectedAsset.periodChange * 100}% <TrendingDown />
            </Typography>
          )}
          <Typography variant="body1"></Typography>
        </Box>
      </Box>
    </Box>
  )
}

const mapState = (state: any) => ({
  assets: state.assets,
  selectedAsset: state.selectedAsset,
})

const mapDispatch = (dispatch: any) => ({
  setSelectedAsset: (asset: any) => dispatch(setSelectedAsset(asset)),
})

export default connect(mapState, mapDispatch)(AssetSelect)
