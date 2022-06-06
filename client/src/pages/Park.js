import React, { useState, useEffect } from 'react';
import { Button, Navbar, Nav, Card, Container, Form } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import '../App.scss';
import Auth from '../utils/auth';
import { QUERY_PARK_COMMENTS} from '../utils/queries';
import { ADD_COMMENT } from '../utils/mutations';
import { selectedPark } from '../utils/api.js';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const Park = () => {
    
    // const [allParkComments, setParkComments] = useState({
    //       commentText: '',
    //       commentAuthor: '',
    //       createdAt: ''
    //   });
    
    const [parkData, setParkData] = useState({
        name: '',
        code: '',
        state: '',
        city: '',
        description: '',
        image: ''
    })
    
    const {parkCode} = useParams();
    console.log(parkCode);

    // const [addComment, { err, addData }] = useMutation(ADD_COMMENT);

    const {loading, data} = useQuery(QUERY_PARK_COMMENTS, {
        variables: {parkCode: parkCode}
    });
    console.log(data);
    const parkComments = data?.comments || [];
    console.log(parkComments);
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    
    //     setParkComments({
    //       ...allParkComments,
    //       [name]: value,
    //     });
    // };
    
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(allParkComments);
    
    //     try {
    //       const  addData  = await addComment({
    //         variables: { ...allParkComments },
    //       });
    //       console.log(addData);
    
    //     } catch (e) {
    //       console.err(e);
    //     }
    //   };
    
    // setParkComments(parkComments);
   
    const getParkData = async (parkCode) => {
        
        try {
            const response = await selectedPark(parkCode);
            
            if (!response.ok) {
            throw new Error("something went wrong!");
            }
        
            const { data } = await response.json();
            console.log(data);
        
            const thisData = {
            name: data[0].fullName,
            code:data[0].parkCode,
            state: data[0].addresses[0].stateCode,
            city: data[0].addresses[0].city,
            description: data[0].description,
            image: data[0].images[0].url
            };

            setParkData(thisData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
      getParkData(parkCode);
    }, []);
    
    return (
        <Container>
            <Card key={parkData.code} border="dark">
                {parkData.image ? (
                  <Card.Img
                    src={parkData.image}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{parkData.name}</Card.Title>
                  <Card.Text>Description: {parkData.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button>
                      Rate!
                    </Button>
                  )}
                </Card.Body>
              </Card>
              <div>
                <CommentForm />
              </div>
              <Card>
              <div className="col-12 col-md-8 mb-3">
              {loading ? (
              <div>Loading...</div>
              ) : (
              <CommentList
              parkComments={parkComments}
              title="Comment on your park experience!"
            />
              )}
            </div>
              {/* <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Type your thoughts"
                  name="username"
                  type="text"
                  value={allParkComments.commentText}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
                </form>
              </Card>
            {allParkComments.length ? (allParkComments.map((comment) => {
                return(
                      <Card>
                      <Card.Text>
                          {comment.commentText}
                          {comment.commentAuthor}
                          {comment.createdAt}
                      </Card.Text>
                </Card>
                  )})
                  ) : (
                    <Card>
                      <Card.Text>
                        <p>No comments for this park</p>
                      </Card.Text>
                </Card>

  )} */}</Card>
        </Container>
    )
}

export default Park;