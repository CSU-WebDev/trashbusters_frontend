import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = (props) => {

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
            <Nav.Link className='navbar-link' href="#trashmapcontainer">Trash-Map</Nav.Link>
            <Nav.Link className='navbar-link' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
