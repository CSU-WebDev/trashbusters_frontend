import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactSwitch from 'react-switch';

const NavigationBar = (props) => {
//   const toggleTheme = () => {
//     props.toggleTheme();
//   };

  return (
    <>
      <Navbar id='navigation-bar' className='sticky-top'>
        <div className="navbar-brand">
            <Navbar.Brand id='brand' href="">
              Trashbusters
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end navbar-links" style={{ width: "100%" }}>
            <Nav.Link className='navbar-link' href="#about">About</Nav.Link>
            <Nav.Link className='navbar-link' href="#trashmap">Trash-Map</Nav.Link>
            <Nav.Link className='navbar-link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <ReactSwitch onChange={toggleTheme} checked={props.theme === 'dark'}></ReactSwitch> */}
      </Navbar>
    </>
  );
};

export default NavigationBar;
