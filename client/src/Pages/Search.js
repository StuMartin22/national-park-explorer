import React, { useState, useEffect } from 'react';




// export default Searchparks;
import { Button, Navbar, Nav, Card, Container } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../App.scss';
import searchbar from '../components/searchbar';

const Search = () => { return (
<div className="homeBody">
<Navbar className = "navHome" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">National Parks Explorer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign-Up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container>
      <Card className="cardHome">
          <Card.Body>
            <Card.Title>
            Welcome to National Parks Explorer! 
            </Card.Title>
            <Card.Text>
            Your next adventure awaits. Search up your next destination!
            </Card.Text>
            <input type="text" placeholder="Search a Park"/>
            <button  class= "search-container" type="submit"><i class="fa fa-search"></i></button>
          </Card.Body>
      </Card>
  </Container>
</div>
)
};
export default Search;
