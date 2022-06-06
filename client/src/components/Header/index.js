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
    <div>
        <div className="text-center">
          <div className="topThing">
            <Link className="text-dark topLink" to="/">
              <h1>
                National Park Explorer
              </h1>
            </Link>
            <p className="headerPara">
              Find your next destination
            </p>
          </div>
          </div>
      <div />
      {/* <div className="navDiv"> */}
        {Auth.loggedIn() ? (
          <>
            <Navbar className="navHome" bg="light" expand="sm">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        ) : (
          <>
            <Navbar className="navHome" bg="light" expand="sm">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/signup">Sign-Up</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        )}
      </div>
    // </div>
  )};

export default Header;
