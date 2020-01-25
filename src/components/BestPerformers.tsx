import React from 'react'
import {connect} from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'


const BestPerformers: React.FC = (props: any) => {
  const {assets} = props

  return (
    <div>
      {assets.map((asset: any) => <div>{asset}</div>)}
    </div>
  )
}

const mapState = (state: any) => ({
  assets: state.assets,
})

export default connect(mapState)(BestPerformers)
