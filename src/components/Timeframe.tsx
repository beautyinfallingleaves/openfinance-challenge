import React from 'react'
import {connect} from 'react-redux'
import {TIMEFRAME} from '../util'
import {setTimeframe} from '../store'
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core'
import AccessTime from '@material-ui/icons/AccessTime'
import {makeStyles} from '@material-ui/core/styles'

// Define Material-UI styles
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
    paddingLeft: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  formContent: {
    color: 'white',
  }
}))

const Timeframe: React.FC = (props: any) => {
  // Styling hook
  const classes = useStyles()

  const {timeframe, setTimeframe} = props

  const handleChange = (event: any) => {
    // dispatch change to timeframe in store
    setTimeframe(event.target.value)
  }

  return (
    <Box className={classes.root}>
      <AccessTime fontSize="large" />
      <Typography variant="h4">TIMEFRAME</Typography>
      <FormControl
        id="form-control"
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        <Select
          className={classes.formContent}
          id="timeframe-select"
          value={timeframe}
          onChange={handleChange}
        >
          <MenuItem value={TIMEFRAME.Hour}>Past 60 minutes</MenuItem>
          <MenuItem value={TIMEFRAME.Day}>Past day</MenuItem>
          <MenuItem value={TIMEFRAME.Week}>Past week</MenuItem>
          <MenuItem value={TIMEFRAME.Month}>Past month</MenuItem>
          <MenuItem value={TIMEFRAME.Year}>Past year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

const mapState = (state: any) => ({
  timeframe: state.timeframe
})

const mapDispatch = (dispatch: any) => ({
  setTimeframe: (timeframe: TIMEFRAME) => dispatch(setTimeframe(timeframe))
})

export default connect(mapState, mapDispatch)(Timeframe)
