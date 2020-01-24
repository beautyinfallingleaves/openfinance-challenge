import React from 'react'
import './App.css'
import {Timeframe, BestPerformers, AssetSelect, Chart} from './'

export const App = () => {
  return (
    <div id="app">
      <div id="timeframe">
        <Timeframe />
      </div>
      <div id="body">
        <div id="body-left-panel">
          <BestPerformers />
        </div>
        <div id="body-right-panel">
          <AssetSelect />
          <Chart />
        </div>
      </div>
    </div>
  )
}
