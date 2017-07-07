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
import Login from './components/AuthComp/Login';
import ExecView from './containers/ExecView/App'
import SalesView from './containers/SalesView/App'
import FinancialView from './containers/FinancialView/App'
import NavBar from './containers/Nav_Bar';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

export const makeMainRoutes = () => {
  return (
     <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter history={history} component={AuthApp}>
        <div>
          {/*<Route path="/login" render={(props) => <AuthApp auth={auth} {...props} />} />
          <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />*/}
          <Route exact path="/" component={ Login } />
          {/*Delete me when Login is fixed*/}
          <Route exact path="/calendar" component={ Calendar } />
          <Route exact path="/taskboard" component={ TaskboardApp } />
          <Route exact path="/exec" component={ ExecView } />
          <Route exact path="/sales" component={ SalesView } />
          <Route exact path="/finances" component={ FinancialView } />

          <Route exact path="/calendar" component={ NavBar } />
          <Route exact path="/taskboard" component={ NavBar } />
          <Route exact path="/exec" component={ NavBar } />
          <Route exact path="/sales" component={ NavBar } />
          <Route exact path="/finances" component={ NavBar } />


        </div>
       </BrowserRouter>
      </Provider>
  );
}
