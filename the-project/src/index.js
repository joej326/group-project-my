<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import { makeMainRoutes } from './routes';

import TaskBoard from './containers/TaskBoard';
=======
>>>>>>> master

import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
// import 'bootstrap/dist/css/bootstrap.css';
// import { makeMainRoutes } from './routes';
import ExecutiveView from './ExecutiveView/ExecutiveView';


import App from './App';
import Calendar from './components/calendar/App';
import RouteTest from './components/Route_Test'

import reducers from './reducers';
const routes = makeMainRoutes();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

=======
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
>>>>>>> master

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
