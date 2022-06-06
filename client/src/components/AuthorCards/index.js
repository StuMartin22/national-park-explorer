import React from 'react';

const contactUs = () => { 
    return (
  <div>
      <h1 className="contactHead">Like our stuff? Feel free to contact us!</h1>
    <Container className = "contactContainer">
        <Card className="contactCard">
            <Card.Body>
              <Card.Title className ="authorName">
                Author: 
              </Card.Title>
              <Card.Text className="cardText">
                GitHub: 
                LinkedIn: 
                e-mail: 
              </Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  )
  };