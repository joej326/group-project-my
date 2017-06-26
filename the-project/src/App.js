import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
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
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
             
            </Navbar.Brand>
            
            {
              !isAuthenticated() && (
                  <div className="cont">
                  
                  <img src={logo} alt="My logo" />
                  <h4>Admin-Redux</h4>
                   <Button 
                  className="button button1"
                  onClick={this.login.bind(this)}>
                  Click To Sign In
                  </Button>
                  </div>
                )
            }
            {
              isAuthenticated() && (
                  <div className="cont">
                  <img src={logo} alt="My logo" />
                  <Button 
                  className="button button1"
                  onClick={this.login.bind(this)}>
                 Sign In
                  </Button>
                  </div>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
