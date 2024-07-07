import React from 'react';
import FetchPtnt from '../FetchPtnt/FetchPtnt';

function PatientDtls () {
  return (
    <div
      className="PatientDtls"
      style={{
        width: '25vw',
        height: '68.5vh',
        backgroundColor: 'white',
        borderRadius: '20px',
        overflow: 'scroll',
      }}
    >
      <FetchPtnt />
    </div>
  );
}

export default PatientDtls;
