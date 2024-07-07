import React, {useEffect, useState} from 'react';
import DiagnosticHistoryChart from '../Chartjs/Chartjs';
import './ChartData.css';
import arrowDown from '../assets/ArrowDown.svg';
import arrowUp from '../assets/ArrowUp.svg';
import heartBPM from '../assets/HeartBPM.svg';
import temperature from '../assets/temperature.svg';
import respiratory from '../assets/respiratory rate.svg';
const ChartData = () => {
  const [data, setData] = useState (null);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState (null);

  useEffect (() => {
    const username = 'coalition';
    const password = 'skills-test';
    const headers = new Headers ();
    headers.set ('Authorization', 'Basic ' + btoa (username + ':' + password));

    fetch ('https://fedskillstest.coalitiontechnologies.workers.dev', {headers})
      .then (response => {
        if (!response.ok) {
          throw new Error ('Network response was not ok');
        }
        return response.json ();
      })
      .then (data => {
        const itemAtIndex1 = data[0];
        setData (itemAtIndex1);
        setLoading (false);
      })
      .catch (error => {
        setError (error);
        setLoading (false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const lastDiagnosis =
    data.diagnosis_history[data.diagnosis_history.length - 1];

  return (
    <div className="container5">

      <div className="chart-container">
        <div className="main-chart">
          <DiagnosticHistoryChart history={data.diagnosis_history} />
        </div>
        <div className="stats">
          <div className="stat-item">
            <h2><div className="redDot" />Systolic</h2>
            <p>{lastDiagnosis.blood_pressure.systolic.value}</p>
            <p>
              <img src={arrowUp} alt="sf" />
              {lastDiagnosis.blood_pressure.systolic.levels}
            </p>
          </div>
          <div className="stat-item">
            <h2><div className="purpleDot" />Diastolic</h2>
            <p>{lastDiagnosis.blood_pressure.diastolic.value}</p>
            <p>
              {/* <img src={arrowDown} alt="sf" /> */}
              {lastDiagnosis.blood_pressure.diastolic.levels}
            </p>
          </div>
        </div>
      </div>
      <div className="info-cards">
        <div
          className="info-card"
          style={{
            backgroundColor: '#E0F3FA',
          }}
        >
          <img src={respiratory} alt="Respiratory Rate" />
          <div>
            <p>Respiratory Rate</p>
            <h3>{lastDiagnosis.respiratory_rate.value} bpm</h3>
            <p>{lastDiagnosis.respiratory_rate.levels}</p>
          </div>
        </div>
        <div className="info-card">
          <img src={temperature} alt="Temperature" />
          <div>
            <p>Temperature</p>
            <h3>{lastDiagnosis.temperature.value}°F</h3>
            <p>{lastDiagnosis.temperature.levels}</p>
          </div>
        </div>
        <div className="info-card">
          <img src={heartBPM} alt="Heart Rate" />
          <div>
            <p>Heart Rate</p>
            <h3>{lastDiagnosis.heart_rate.value} bpm</h3>
            <p>
              <img
                src={arrowDown}
                alt="sf"
                style={{
                  marginRight: '5px',
                }}
              /> {lastDiagnosis.heart_rate.levels}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartData;
