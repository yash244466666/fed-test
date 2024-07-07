import React, {useEffect, useState} from 'react';
import './FetchPtntLab.css';
import labDown from '../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg';

const FetchPtntLab = () => {
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
        const itemAtIndex1 = data[3];
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

  return (
    <div>
      {data
        ? <div className="labReports">

            <ul>
              {data.lab_results.map ((result, index) => (
                <li key={index} className="">
                  {result}<img src={labDown} alt="" />
                </li>
              ))}
            </ul>
          </div>
        : <p>No data found.</p>}
    </div>
  );
};

export default FetchPtntLab;
