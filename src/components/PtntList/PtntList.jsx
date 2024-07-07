import React, {useEffect, useState} from 'react';

import ptntOpt from '../assets/more_ptnt.svg';
import './PtntList.css';

const PtntList = () => {
  const [data, setData] = useState ([]);
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
        setData (data);
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
      {data.map (item => (
        <div
          key={item.id}
          className={`ptnt ${item.name.includes ('Jessica') ? 'jessica' : ''}`}
        >
          <div className="ptnt-info">
            <img src={item.profile_picture} alt="src" className="ptnt-img" />
            <div className="ptnt-txt">
              <h4 className="ptnt-name">{item.name}</h4>
              <div
                className="other-dtls"
                style={{
                  color: '#9B9B9B',
                }}
              >
                <p>{item.gender}, </p>
                <p>{item.age}</p>
              </div>
            </div>
          </div>
          <div className="ptnt-opt">
            <img src={ptntOpt} alt="opt" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PtntList;
