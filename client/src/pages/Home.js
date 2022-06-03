// import React, { useState, useEffect } from 'react';


// import Auth from '../../../server/utils/auth';
// import { savepark, searchAPIparks } from '../../../server/utils/API';
// import { saveparkIds, getSavedparkIds } from '.../../../server/utils/localStorage';
// import { useAPI } from '@apollo/client';
// import { SAVE_PARK } from '../../../server/utils/API';

// const Searchparks = () => {
//   // create state for holding returned google api data
//   const [searchedparks, setSearchedparks] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');

//   // create state to hold saved parkId values
//   const [savedparkIds, setSavedparkIds] = useState(getSavedparkIds());

//   const [savepark, { error }] = useAPI(SAVE_PARK);

//   // set up useEffect hook to save `savedparkIds` list to localStorage on component unmount
//   // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
//   useEffect(() => {
//     return () => saveparkIds(savedparkIds);
//   });

//   // create method to search for parks and set state on form submit
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await searchAPIparks(searchInput);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       const { items } = await response.json();

//       const parkData = items.map((park) => ({
//         parkId: park.id,
//         parkName: park.name,
//         description: park.description,
//         image: park.image,
//       }));

//       setSearchedparks(parkData);
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // create function to handle saving a park to our database
//   const handleSavepark = async (parkId) => {
//     // find the park in `searchedparks` state by the matching id
//     const parkToSave = searchedparks.find((park) => park.parkId === parkId);

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const response = await savepark(parkToSave, token);

//       if (!response.ok) {
//         throw new Error('something went wrong!');
//       }

//       // if park successfully saves to user's account, save park id to state
//       setSavedparkIds([...savedparkIds, parkToSave.parkId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Search for parks!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for a park'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <h2>
//           {searchedparks.length
//             ? `Viewing ${searchedparks.length} results:`
//             : 'Search for a park to begin'}
//         </h2>
//         <CardColumns>
//           {searchedparks.map((park) => {
//             return (
//               <Card key={park.parkId} border='dark'>
//                 {park.image ? (
//                   <Card.Img src={park.image} alt={`The cover for ${park.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{park.title}</Card.Title>
//                   <p className='small'>Authors: {park.authors}</p>
//                   <Card.Text>{park.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedparkIds?.some((savedparkId) => savedparkId === park.parkId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSavepark(park.parkId)}>
//                       {savedparkIds?.some((savedparkId) => savedparkId === park.parkId)
//                         ? 'This park has already been saved!'
//                         : 'Save this park!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default Searchparks;
import { Button, Navbar, Nav, Card, Container } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../App.scss';

const HomePage = () => { return (
<div className="homeBody">
{/* <Navbar className = "navHome" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">National Parks Explorer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign-Up</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */}
<Container>
      <Card className="cardHome">
          <Card.Body>
            <Card.Title>
                Hello There
            </Card.Title>
            <Card.Text>
                Welcome to National Parks Explorer! Your next adventure awaits.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
  </Container>
</div>
)
};
export default HomePage;