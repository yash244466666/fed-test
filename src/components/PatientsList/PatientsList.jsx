import React from 'react';
import './PatientsList.css';
import srchIco from '../assets/search_paitents.svg';
import PtntList from '../PtntList/PtntList';
function PatientsList () {
  return (
    <div className="Patients">
      <div className="PatientsHeader">
        <h3>Patients </h3>
        <img src={srchIco} alt="srch" />
      </div>

      <PtntList />

    </div>
  );
}

export default PatientsList;
