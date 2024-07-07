import NavBar from './components/navbar/Navbar';
import PatientsList from './components/PatientsList/PatientsList';
// import Container from 'react-bootstrap/Container';
import Chart from './components/Chart/Chart';
import PatientDtls from './components/PatientDtls/PatientDtls';
import Lab from './components/Lab/Lab';
import Diagnostic from './components/Diagnostic/Diagnostic';

import './App.css';

function App () {
  return (
    <div className="App">
      <NavBar />
      <div className="content">

        <PatientsList />
        <div className="mdl-col">
          <Chart />
          <Diagnostic />

        </div>
        <div className="mdl-col">
          <PatientDtls />
          <Lab />

        </div>

      </div>

    </div>
  );
}

export default App;
