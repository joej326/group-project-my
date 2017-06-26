import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { makeMainRoutes } from './routes';
import ExecutiveView from './ExecutiveView/ExecutiveView';

import App from './App';
import Calendar from './components/calendar/App';
import RouteTest from './components/Route_Test'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const routes = makeMainRoutes();


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <BrowserRouter>
      <div>
        <Switch>
          <Route path= '/calendar' component={Calendar} />
          <Route path= '/test' component={RouteTest} />
          <Route path= '/' component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById( 'root' ));


