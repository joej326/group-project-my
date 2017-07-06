import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Auth.css';
import logo from './Home/react3.jpg';
//import { Link } from 'react-router';
import { Route, Redirect } from 'react-router';
//import { browserHistory } from 'react-router'

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   render() {
//     const { isAuthenticated } = this.props.auth;
// console.log('login.js ', isAuthenticated())
// handleClick = () => {
//   this.router.push('/exec')
// };
render() {
    return (
       <div className="container-fluid">
       
            
            
               
                  <div className="contt">
                  
                  <img src={logo} alt="My logo" />
                  <h5>Admin-Redux</h5>
                  <a href="/exec"><Button 
                  className="button button1">
                  Sign In
                  </Button></a>
                  </div>
                
            
                  
            
         
      </div>
    );
  }
}

export default App;
