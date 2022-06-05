import { Button, Navbar, Nav, Card, Container } from 'react-bootstrap';
// import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../App.scss';
// const time= date.format;
// const date = require('date-and-time');
 

const HomePage = () => { 
  return (
<div>
  <Container className = "homeBody">
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
