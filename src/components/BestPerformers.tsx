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
    marginLeft: '10%',
    marginTop: '10%',
  },
  table: {

  }
}))

const BestPerformers: React.FC = (props: any) => {
  //Styling hook
  const classes = useStyles()

  const {assets} = props

  return (
    <Box className={classes.root}>
      <Typography variant="h5">BEST PERFORMERS</Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell align="right">Open Price</TableCell>
            <TableCell align="right">Close Price</TableCell>
            <TableCell align="right">Period Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset: any) => (
            <TableRow key={asset.id}>
              <TableCell component="th" scope="row">
                {asset.name}
              </TableCell>
              <TableCell align="right">{asset.openPrice}</TableCell>
              <TableCell align="right">{asset.closePrice}</TableCell>
              <TableCell align="right">{asset.periodChange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}

const mapState = (state: any) => ({
  assets: state.assets,
})

export default connect(mapState)(BestPerformers)
