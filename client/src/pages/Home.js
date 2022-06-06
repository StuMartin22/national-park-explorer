import { Button, Navbar, Nav, Card, Container } from 'react-bootstrap';
import '../App.scss';

const HomePage = () => { 
  return (
<div>
  <Container className = "homeBody">
      <Card className="cardHome">
          <Card.Body>
            <Card.Title className ="cardTitle">
                Hello There
            </Card.Title>
            <Card.Text className="cardText">
                Welcome to National Parks Explorer! Your next adventure awaits.
            </Card.Text>
            <Button className = "homeButton" variant="primary" href="/signup">Go somewhere</Button>
          </Card.Body>
      </Card>
    </Container>
  </div>
)
};
export default HomePage;
