import React, {useEffect, useState} from 'react';
import './FetchPtntDgnst.css';

const FetchPtntDgnst = () => {
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
    <div className="diagnostic-container">
      {data
        ? <div className="table-container">
            <table className="diagnostic-table-body">
              <tbody>
                {data.diagnostic_list.map ((diagnostic, index) => (
                  <tr key={index}>
                    <td>{diagnostic.name}</td>
                    <td>{diagnostic.description}</td>
                    <td>{diagnostic.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        : <p>No data found.</p>}
    </div>
  );
};

export default FetchPtntDgnst;
