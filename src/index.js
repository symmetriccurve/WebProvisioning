import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';
import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/Page1" component={Page1}/>
    <Route path="/Page2" component={Page2}/>
  </Router>
),
  document.getElementById('root')
);
