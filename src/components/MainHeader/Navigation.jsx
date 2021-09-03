import React from 'react';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MainHeader = () => {
  return (
    <Navbar expand="md" className="w-100" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto my-1">
            <NavLink
              to="/global"
              className="navlinks"
              activeClassName="activeNav"
            >
              Global
            </NavLink>
            <NavLink
              to="/states"
              className="navlinks"
              activeClassName="activeNav"
            >
              States
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
