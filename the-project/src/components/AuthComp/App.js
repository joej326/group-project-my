import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Auth.css';
import logo from './Home/react3.jpg';

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

    return (
       <div className="container-fluid">
       
            
            {
              !isAuthenticated() && (
                  <div className="contt">
                  
                  <img src={logo} alt="My logo" />
                  <h4 class="adminti">Admin-Redux</h4>
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
                  <div className="cont">
                  <img src={logo} alt="My logo" />
                  <h4 class="adminti">Admin-Redux</h4>
                  <Button className="button button1"
                  onClick={this.login.bind(this)}>
                 Click To Sign In
                  </Button>
                 </div>
                )
            }
         
      </div>
    );
  }
}

export default App;
