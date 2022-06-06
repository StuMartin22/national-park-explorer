import React from "react";
import { Card, Container } from 'react-bootstrap';
import '../../App.scss'

const BradyCard = () => { 
    return (
  <div>
    <Container className = "authorContainer">
        <Card className="authorCard">
            <Card.Body>
              <Card.Title className ="authorTitle">
                  Contact Brady
              </Card.Title>
              <Card.Text className="authorText">
                {/* <p>About Author</p> */}
                    <a className="authorEmail" href="mailto:Mavetz10@gmail.com">Email</a>
                    <br></br>
                    <a className="authorGithub" href="www.github.com/BMavetz">Github</a>
              </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
  };
  export default BradyCard;