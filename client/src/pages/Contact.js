import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.scss';
import AuthorCards from '../components/AuthorCards';
import ContactCardFormat from '../components/contactcard'

const contactUs = () => { 
    return (
        // <>
        // <Container>
        // <AuthorCards/>
        // </Container>
        // </>
        <Container>
        <ContactCardFormat 
            AuthorCardTitle="Brady"
            AuthorCardSubtitle="Project Manager"
            AuthorCardText="Brady is a cool cat"
            AuthorCardEmail="test@test.com"
            AuthorCardGitHu="github.com/StuMartin22"
        />
        </Container>

  )
  };

  export default contactUs;