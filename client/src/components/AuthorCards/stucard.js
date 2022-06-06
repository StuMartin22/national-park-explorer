import React from "react";
import { Card, Container } from 'react-bootstrap';
import '../../App.scss'

const stuCard = () => { 
    return (
  <div>
    <Container className = "authorContainer">
        <Card className="authorCard">
            <Card.Body>
              <Card.Title className ="authorTitle">
                  Contact Stu
              </Card.Title>
              <Card.Text className="authorText">
                {/* <p>About Author</p> */}
                <p className="authorEmail" emailto="stucodes22@gmail.com">Email</p>
                <p className="authorGithub" href="www.github.com/StuMartin22">Github</p>
              </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
  };
  export default stuCard;