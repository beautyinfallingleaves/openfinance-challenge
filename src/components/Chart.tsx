import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
  chart: {
    height: 600,
    backgroundColor: '#10142C',
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

export const Chart = (props: HighchartsReact.Props) => {
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

