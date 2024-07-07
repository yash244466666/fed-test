import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../assets/TestLogo@2x.png';
import Logo2 from '../assets/TestLogo.png';
import navIco1 from '../assets/home_FILL0_wght300_GRAD0_opsz24.svg';
import navIco2 from '../assets/group_FILL0_wght300_GRAD0_opsz24.svg';
import navIco3 from '../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import navIco4 from '../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import navIco5 from '../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import docAvatar
  from '../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png';
import './Navbar.css';

import settings from '../assets/settings_FILL0_wght300_GRAD0_opsz24@2x.png';
import more from '../assets/more_vert_FILL0_wght300_GRAD0_opsz24@2x.png';

function NavBar () {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body navbar"
      bg="light"
      data-bs-theme="light"
    >

      <Navbar.Brand
        href="/"
        style={{
          margin: '0 10rem 0 2rem ',
        }}
      >
        <img src={Logo2} alt="Logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#features" className="navlink">
              <img src={navIco1} alt="Logo" /> Overview
            </Nav.Link>
            <Nav.Link href="#pricing" className="navlink active1">
              <img src={navIco2} alt="Logo" />Patients
            </Nav.Link>
            <Nav.Link href="#Schedule" className="navlink">
              <img src={navIco3} alt="Logo" />Schedule
            </Nav.Link>
            <Nav.Link href="#Message" className="navlink">
              <img src={navIco4} alt="Logo" />Message
            </Nav.Link>
            <Nav.Link href="#Transactions" className="navlink">
              <img src={navIco5} alt="Logo" />Transactions
            </Nav.Link>
          </Nav>
        </Container>
        <Nav>
          <Nav.Link href="#deets" className="doc">
            <img src={docAvatar} alt="doc" />
            <div className="Doctext">
              <h6>Dr.Bard Simpson</h6>
              <h6
                style={{
                  color: '#9B9B9B',
                  fontWeight: '400',
                }}
              >
                Senior Doctor
              </h6>
            </div>
          </Nav.Link>
          <div class="vl" />

          <Nav.Link
            eventKey={2}
            href="#memes"
            className="settings"
            style={{
              marginLeft: '1rem',
            }}
          >
            <img src={settings} alt="s" />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className="settings">
            <img
              src={more}
              alt="s"
              style={{
                marginRight: '2rem',
              }}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavBar;
