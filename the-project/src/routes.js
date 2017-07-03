import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import history from './history';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


// *** BLENDING
import { Provider } from 'react-redux';

import TaskboardApp from './containers/Taskboard_App';
import reducers from './reducers';

// *** Components ***
import AuthApp from './components/AuthComp/Login';
import Home from './components/AuthComp/Home/Home';
import Callback from './components/AuthComp/Callback/Callback';
import Auth from './components/AuthComp/Auth/Auth';
import App from './components/AuthComp/Home/App';
import Calendar from './components/CalendarComp/App';



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
          <Route exact path="/login" render={(props) => <AuthApp auth={auth} {...props} />} />
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />

        </div>
       </BrowserRouter>
      </Provider>
  );
}
