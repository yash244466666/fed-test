import React from 'react';
import FetchPtntDgnst from '../FetchPtnt/FetchPtntDgnst';

function Diagnostic () {
  return (
    <div
      className="chart"
      style={{
        width: '35vw',
        height: '25vh',
        backgroundColor: 'white',
        borderRadius: '20px',

        overflow: 'hidden',
      }}
    >
      <h2
        style={{
          padding: '0.5rem 1rem ',
          fontSize: '1.5rem',
        }}
      >
        Diagnostic List
      </h2>

      <table className="diagnostic-table-head">
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
      <div
        style={{
          width: '100%',
          height: '50%',
          backgroundColor: 'white',
          // overflow: 'scroll',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <FetchPtntDgnst />
      </div>

    </div>
  );
}

export default Diagnostic;
