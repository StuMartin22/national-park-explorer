import React from "react";
import { Card, Container } from 'react-bootstrap';
import '../../App.scss'

const ElizabethCard = () => { 
    return (
  <div>
    <Container className = "authorContainer">
        <Card className="authorCard">
            <Card.Body>
              <Card.Title className ="authorTitle">
                  Contact Elizabeth
              </Card.Title>
              <Card.Text className="authorText">
                {/* <p>About Author</p> */}
                <a className="authorEmail" href="mailto:ekkjohnson@gmail.com">Email</a>
                    <br></br>
                <a className="authorGithub" href="www.github.com/ekkjohnson">Github</a>
              </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
  };
  export default ElizabethCard;