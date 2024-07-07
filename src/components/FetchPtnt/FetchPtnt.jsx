import React, {useEffect, useState} from 'react';
import ptntInfoIcon1 from '../assets/BirthIcon.svg';
import ptntInfoIcon2 from '../assets/FemaleIcon.svg';
import ptntInfoIcon3 from '../assets/PhoneIcon.svg';
import ptntInfoIcon4 from '../assets/PhoneIcon.svg';
import ptntInfoIcon5 from '../assets/InsuranceIcon.svg';
import './FetchPtnt.css';

const FetchPtnt = () => {
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
        ? <div>
            <div className="ptnt-name2">
              <img src={data.profile_picture} alt={`${data.name}'s profile`} />
              <h1>{data.name}</h1>
            </div>

            <div className="ptnt-info-block2">
              <img src={ptntInfoIcon1} alt="ptntInfoIcon2" />
              <div className="ptnt-info-text2">
                <p>Date of Birth </p>
                <p>{data.date_of_birth}</p>
              </div>
            </div>
            <div className="ptnt-info-block2">
              <img src={ptntInfoIcon2} alt="ptntInfoIcon2" />
              <div className="ptnt-info-text2">
                <p>Gender </p>
                <p>{data.gender}</p>
              </div>
            </div>
            <div className="ptnt-info-block2">
              <img src={ptntInfoIcon3} alt="ptntInfoIcon2" />
              <div className="ptnt-info-text2">
                <p>Contact Info.</p>
                <p>{data.phone_number}</p>
              </div>
            </div>
            <div className="ptnt-info-block2">
              <img src={ptntInfoIcon4} alt="ptntInfoIcon2" />
              <div className="ptnt-info-text2">
                <p>Emergency Contact</p>
                <p>{data.emergency_contact}</p>
              </div>
            </div>
            <div className="ptnt-info-block2">
              <img src={ptntInfoIcon5} alt="ptntInfoIcon2" />
              <div className="ptnt-info-text2">
                <p>Insurance Provider</p>
                <p>{data.insurance_type}</p>
              </div>
            </div>

            <div className="ptnt-info-btn2">
              <button className="ptntBtn2">Show All Information</button>
            </div>
          </div>
        : <p>No data found.</p>}
    </div>
  );
};

export default FetchPtnt;
