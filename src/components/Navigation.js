import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../img/logo.svg';

function Navigation() {
  return (
    <div className="navigation">
      <Container-fluid>
        <Navbar expand="lg">
        <AnchorLink offset='73' href='#home'><Navbar.Brand><img src={logo} alt="Cyril Blondeau - Graphiste webdesigner" /></Navbar.Brand></AnchorLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <AnchorLink offset='73' href='#home'>Accueil</AnchorLink>
              <AnchorLink offset='100' href='#services'>Services</AnchorLink>
              <AnchorLink offset='73' href='#about'>à propos</AnchorLink>
              <AnchorLink offset='100' href='#portfolio'>Portfolio</AnchorLink>
              <AnchorLink offset='65' href='#contact'>Contact</AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container-fluid>
    </div>
  );
}

export default Navigation;
