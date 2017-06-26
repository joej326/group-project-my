import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "./Home.css";
import logo from './react3.jpg'


class Home extends Component {
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
      </div>
    );
  }
}

export default Home;

           
              // !isAuthenticated() && (
              //     <Button
              //       bsStyle="primary"
              //       className="btn-margin"
              //       onClick={this.login.bind(this)}
              //     >
              //       Log In
              //     </Button>
              //   )
            
            // {
            //   isAuthenticated() && (
            //       <Button
            //         bsStyle="primary"
            //         className="btn-margin"
            //         onClick={this.logout.bind(this)}
            //       >
            //         Log Out
            //       </Button>
            //     )
            // }