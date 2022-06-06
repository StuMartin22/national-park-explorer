import React from "react";
import { Card, Container } from 'react-bootstrap';
import '../../App.scss'

const bradyCard = () => { 
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
                <p className="authorEmail" emailto="Mavetz10@gmail.com">Email</p>
                <p className="authorGithub" href="www.github.com/BMavetz">Github</p>
              </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
  };
  export default bradyCard;