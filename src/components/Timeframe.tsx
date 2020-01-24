import React from 'react'
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

// Define Material-UI styles
const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  clockIcon: {

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}))

export const Timeframe = () => {
  // Styling hook
  const classes = useStyles()

  const [timeframe, setTimeframe] = React.useState('');

  // const handleChange = event => {
  //   setTimeframe(event.target.value);
  // };

  return (
    <Box className={classes.root}>
      <Typography variant="h4">TIMEFRAME</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="timeframe-label">
          Time
        </InputLabel>
        <Select
          labelId="timeframe-label"
          id="timeframe-select"
          value={timeframe}
          // onChange={handleChange}
          labelWidth={35}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'hour'}>Past 60 minutes</MenuItem>
          <MenuItem value={'day'}>Past day</MenuItem>
          <MenuItem value={'week'}>Past week</MenuItem>
          <MenuItem value={'month'}>Past month</MenuItem>
          <MenuItem value={'year'}>Past year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
