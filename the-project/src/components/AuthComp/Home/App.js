import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './react3.jpg';
import Navbar from '../../../containers/Nav_Bar.js'; 
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import history from '../../../history';


// *** BLENDING
import { Provider } from 'react-redux';

import TaskboardApp from '../../../containers/Taskboard_App';
import reducers from '../../../reducers';

// *** Components ***
import AuthApp from '../Login';
import Home from './Home';
import Callback from '../Callback/Callback';
import Auth from '../Auth/Auth';
import Calendar from '../../CalendarComp/App';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


class Login extends Component {
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
    if (isAuthenticated()) {
      console.log("is authenticated ", isAuthenticated() )
      return (
        <div>
          <Navbar/>
            
           <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
            <Route exact path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>

            <Route exact path= '/calendar' component={Calendar} />
            <Route exact path= '/taskboard' component={TaskboardApp} /> 
        </div>
      )
    } else {

    return (
       <div className="container-fluid">
       
                <Redirect to="/login" />
         
      </div>
    )
    }
  }
}

export default Login;
