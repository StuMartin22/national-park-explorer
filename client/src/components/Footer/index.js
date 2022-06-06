import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Auth from '../../utils/auth';

const Footer = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
<div>
          {Auth.loggedIn() ? (
            <>
            <Navbar className = "footer container justify-content-end" bg="light" expand="sm" fixed="bottom">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                  </Nav>
                  <Nav.Link>
                    Contact us!
                  </Nav.Link>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </>
          ) : (
            <>
              <Navbar className = "footer justify-content-end" bg="light" expand="sm">
                <Container>
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="#top">Back to Top</Nav.Link>
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
    );
};


export default Footer;
