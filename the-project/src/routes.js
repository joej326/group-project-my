import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AuthApp from './components/AuthComp/App';
import Home from './components/AuthComp/Home/Home';
import Callback from './components/AuthComp/Callback/Callback';
import Auth from './components/AuthComp/Auth/Auth';
import history from './history';


// *** BLENDING 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Calendar from './components/calendar/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
     <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter history={history} component={AuthApp}>
        <div>

          <Route exact path="/" render={(props) => <AuthApp auth={auth} {...props} />} />
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path= '/calendar' component={Calendar} />
        </div>
       </BrowserRouter>
      </Provider>
  );
}
