import React from 'react';
// import { MemoryRouter, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './Pages/Home';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/Home'


// function App() {
//     return (
//         <div>
//             <HomePage/>
//         </div>
//         );
//     }
// };
    // <MemoryRouter>
    //   <Container className="p-3">
    //     <Container className="p-5 mb-4 bg-light rounded-3">
    //       <h1 className="header">Welcome To React-Bootstrap</h1>
    //       <h2>
    //         Current Page is{' '}
    //         <Switch>
    //           <Route path="/about">
    //             <About />
    //           </Route>
    //           <Route path="/users">
    //             <Users />
    //           </Route>
    //           <Route path="/">
    //             <Home />
    //           </Route>
    //         </Switch>
    //       </h2>
    //       <h2>
    //         Navigate to{' '}
    //         <ButtonToolbar className="custom-btn-toolbar">
    //           <LinkContainer to="/">
    //             <Button>Home</Button>
    //           </LinkContainer>
    //           <LinkContainer to="/about">
    //             <Button>About</Button>
    //           </LinkContainer>
    //           <LinkContainer to="/users">
    //             <Button>Users</Button>
    //           </LinkContainer>
    //         </ButtonToolbar>
    //       </h2>
    //     </Container>
    //   </Container>
    // </MemoryRouter>
//   );

export default App;

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container"> */}
            <Routes>
              <Route 
                path="/" 
                element={<HomePage />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
            </Routes>
          {/* </div>
          <Footer />
        </div> */}
      </Router>
    </ApolloProvider> 
  );
}
      
// export default App;

