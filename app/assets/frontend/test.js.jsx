"use strict";

//React
const React = require('react');
const ReactDOM = require('react-dom');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;

//Components
const App = require('./components/app');
const LoginForm = require('./components/login_form');

//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history = { hashHistory }>
    <Route path = "/" component = { App }>
      <Route path="/login" component={ LoginForm } />
      <Route path="/signup" component={ LoginForm } />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function(){
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
