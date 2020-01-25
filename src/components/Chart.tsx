import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { connect } from 'react-redux'

const options: Highcharts.Options = {
  chart: {
    height: 600,
    backgroundColor: '#0E172A',
    marginTop: 60,
    marginRight: 60,
    marginBottom: 60,
    marginLeft: 60,
  },
  series: [{
      type: 'line',
      data: [1, 2, 3]
  }]
}

const Chart = (props: HighchartsReact.Props) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'stockChart'}
        {...props}
      />
    </div>
  )
}

const mapState = (state: any) => ({
  selecteAsset: state.selectedAsset,
})

export default connect(mapState)(Chart)
