import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
  title: {
      text: 'My chart'
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

