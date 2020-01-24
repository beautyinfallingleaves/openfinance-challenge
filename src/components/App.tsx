import React from 'react'
import './App.css'
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Timeframe, BestPerformers, AssetSelect, Chart} from './'

// Define Material-UI styles
const useStyles = makeStyles(() => ({
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  timeframe: {
    flex: 1,
    background: 'linear-gradient(45deg, #0F2E61 30%, #6574E0 60%)',
  },
  body: {
    flex: 9,
    display: 'flex',
    flexDirection: 'row',
    background: '#10142C',
  },
  bodyLeftPanel: {
    flex: 1,
    borderRight: '1px solid gray',
  },
  bodyRightPanel: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  assetSelect: {
    flex: 1,
  },
  chart: {
    flex: 5,
  }
}))

export const App = () => {
  // Styling hook
  const classes = useStyles()

  return (
    <Box className={classes.app}>
      <Box className={classes.timeframe}>
        <Timeframe />
      </Box>
      <Box className={classes.body}>
        <Box className={classes.bodyLeftPanel}>
          <BestPerformers />
        </Box>
        <Box className={classes.bodyRightPanel}>
          <Box className={classes.assetSelect}>
            <AssetSelect />
          </Box>
          <Box className={classes.chart}>
            <Chart />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
