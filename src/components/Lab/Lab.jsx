import React from 'react';
import FetchPtntLab from '../FetchPtnt/FetchPtntLab';
import './Lab.css';
function Lab () {
  return (
    <div
      className="lab"
      style={{
        width: '25vw',
        height: '15vh',
        backgroundColor: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <h2 className="labTitle">Lab Results</h2>
      <div
        style={{
          width: '100%',
          height: '55%',
          backgroundColor: 'white',
          borderRadius: '20px',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        <FetchPtntLab />
      </div>

    </div>
  );
}

export default Lab;
