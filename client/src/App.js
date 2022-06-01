// import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "./App.css";
import Home from './Pages/Home'
// import AuthService from "./services/auth.service";
// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/home.component";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";

import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AuthService from "./services/auth.service";
// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/home.component";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";
class App extends Component {
   
  render() {
    return (    
        <div>
          {/* <h1>Welcome to ya mom!</h1> */}
          < Home />
        </div>
    );
  }
}
      
export default App;