import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, Card, Container } from 'react-bootstrap';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="container flex-column justify-space-between-lg justify-center align-center text-center display-flex align-center">
      <div>
        <Link className="text-dark" to="/">
          <h1 style={{ fontSize: '3rem' }}>
            National Park Explorer
          </h1>
        </Link>
        <p className = "headerPara" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Find your next destination
        </p>
        <div className="navDiv">
          {Auth.loggedIn() ? (
            <>
            <Navbar className = "navHome" bg="light" expand="lg">
              {/* <Container> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              {/* </Container> */}
            </Navbar>
            </>
          ) : (
            <>
              <Navbar className = "navHome" bg="light" expand="lg">
                {/* <Container> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/search">Search</Nav.Link>
                      <Nav.Link href="/login">Login</Nav.Link>
                      <Nav.Link href="/signup">Sign-Up</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                {/* </Container> */}
              </Navbar>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
