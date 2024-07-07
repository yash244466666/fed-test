import React from 'react';
import ChartData from './ChartData';

function Chart () {
  return (
    <div
      className="chart"
      style={{
        width: '35vw',
        height: '58.5vh',
        backgroundColor: 'white',
        borderRadius: '20px',
        // overflowY: 'scroll',
        overflow: 'hidden',
      }}
    >
      <h1 className="chart-title">Diagnosis History</h1>
      <ChartData />
    </div>
  );
}

export default Chart;
