import React from "react";
import { Card, Container } from 'react-bootstrap';
import '../../App.scss'

const ericCard = () => { 
    return (
  <div>
    <Container className = "authorContainer">
        <Card className="authorCard">
            <Card.Body>
              <Card.Title className ="authorTitle">
                  Contact Eric
              </Card.Title>
              <Card.Text className="authorText">
                {/* <p>About Author</p> */}
                <p className="authorEmail" emailto="ericphilipps123@gmail.com">Email</p>
                <p className="authorGithub" href="www.github.com/EricPhilipps">Github</p>
              </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
  };
  export default ericCard;