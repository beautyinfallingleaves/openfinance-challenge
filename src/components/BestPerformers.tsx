import React from 'react'
import {connect} from 'react-redux'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

// Define Material-UI styles
const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '7%',
    marginTop: '7%',
  },
  tableText: {
    color: 'white',
    fontWeight: 'bold',
  },
}))

const BestPerformers: React.FC = (props: any) => {
  //Styling hook
  const classes = useStyles()

  const {assets} = props

  return (
    <Box className={classes.root}>
      <Typography variant="h5">BEST PERFORMERS</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableText}>Asset</TableCell>
            <TableCell className={classes.tableText} align="right">Open Price</TableCell>
            <TableCell className={classes.tableText} align="right">Close Price</TableCell>
            <TableCell className={classes.tableText} align="right">Period Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets
            .sort((a: any, b: any) => b.periodChange - a.periodChange)
            .filter((asset: any, idx: number) => idx < 3)
            .map((asset: any) => (
              <TableRow key={asset.id}>
                <TableCell className={classes.tableText}>{asset.name}</TableCell>
                <TableCell className={classes.tableText} align="right">${asset.openPrice / 100}</TableCell>
                <TableCell className={classes.tableText} align="right">${asset.closePrice / 100}</TableCell>
                {asset.periodChange > 0 ? (
                  <TableCell style={{color: 'green'}} align="right">+{asset.periodChange * 100}%</TableCell>
                ) : (
                  <TableCell style={{color: 'red'}} align="right">{asset.periodChange * 100}%</TableCell>
                )}
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Box>
  )
}

const mapState = (state: any) => ({
  assets: state.assets,
})

export default connect(mapState)(BestPerformers)
