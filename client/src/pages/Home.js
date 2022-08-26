import { Button, Navbar, Card, Container } from 'react-bootstrap';
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
            <Card.Text className="cardText">
              Search National Parks for your next trip. Create and review comments on each park. As well as, create a login to save your Park Search data. 
              What are you waiting for?
              </Card.Text>

            <Button className = "homeButton" variant="primary" href="/signup">Go somewhere</Button>
          </Card.Body>
      </Card>
    </Container>
  </div>
)
};
export default HomePage;
