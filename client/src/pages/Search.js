import React, { useState, useEffect } from 'react';
import { Button, Navbar, Nav, Card, Container, Form } from 'react-bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../App.scss';
// import searchbar from '../components/searchbar';
import { searchParks } from '../utils/api.js';
import Auth from '../utils/auth'

const Search = () => {
const [searchedParks, setSearchedParks] = useState([]);
  
const [searchInput, setSearchInput] = useState("");

const handleChange = (event) => {
  setSearchInput(event.target.value);
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  if (!searchInput) {
    return false;
  }

  try {
    const response = await searchParks(searchInput);
    
    if (!response.ok) {
      throw new Error("something went wrong!");
    }

    const { data } = await response.json();
    console.log(data);

    const parkData = data.map((park, index) => ({
      name: data[index].fullName,
      code: data[index].parkCode,
      state: data[index].addresses[0].stateCode,
      city: data[index].addresses[0].city,
      description: data[index].description,
      image: data[index].images[0].url,
    }));

    setSearchedParks(parkData);
    setSearchInput("");
  } catch (err) {
    console.error(err);
  }
};

return (
<div className="homeBody">
{/* <Navbar className = "navHome" bg="light" expand="lg">
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
</Navbar> */}
<Container>
      <Card className="cardHome">
          <Card.Body>
            <Card.Title>
            Welcome to National Parks Explorer! 
            </Card.Title>
            <Card.Text>
            Your next adventure awaits. Search up your next destination!
            </Card.Text>
            <Form onSubmit={handleFormSubmit}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  type="text"
                  onChange={handleChange}
                  placeholder='Search for Parks!'
                />
            <Button  type= "submit">Search!</Button>
          </Form>
          </Card.Body>
      </Card>
  </Container>

  <Container>
          {searchedParks.map((park) => {
            return (
              <Card key={park.code} border="dark">
                {park.image ? (
                  <Card.Img
                    src={park.image}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{park.name}</Card.Title>
                  <Card.Text>Description: {park.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button href={`/park/${park.code}`}>
                      See What people have to Say!
                    </Button>
                  )}
                </Card.Body>
              </Card>
            )
          })}
        </Container>
</div>
)};
export default Search;
