import { Button, Navbar, Nav, Card, Container } from 'react-bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../App.scss';

const HomePage = () => { return (
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
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
<Container>
      <Card className="cardHome">
          <Card.Body>
            <Card.Title>
                Hello There
            </Card.Title>
            <Card.Text>
                Welcome to National Parks Explorer! Your next adventure awaits.
            </Card.Text>
            <Button variant="primary" href="/signup">Go somewhere</Button>
          </Card.Body>
      </Card>
  </Container>
</div>
)
};
export default HomePage;
