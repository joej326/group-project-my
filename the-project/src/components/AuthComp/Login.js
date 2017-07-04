import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Auth.css';
import logo from './Home/react3.jpg';

import { Redirect } from 'react-router-dom';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
console.log('login.js ', isAuthenticated())
    return (
       <div className="container-fluid">
       
            
            {
              !isAuthenticated() && (
                  <div className="contt">
                  
                  <img src={logo} alt="My logo" />
                  <h5>Admin-Redux</h5>
                   <Button 
                  className="button button1"
                  onClick={this.login.bind(this)}>
                  Sign In
                  </Button>
                  </div>
                )
            }
            {
              isAuthenticated() && (
                  <Redirect to="/"/>
                )
            }
         
      </div>
    );
  }
}

export default App;
