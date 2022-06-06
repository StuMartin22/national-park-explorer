import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.scss';
import AuthorCards from '../components/AuthorCards';

const contactUs = () => { 
    return (
        <>
        <Container>
        <AuthorCards/>
        </Container>
        </>
  )
  };

  export default contactUs;