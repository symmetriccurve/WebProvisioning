import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Page2 from './components/Page2';
import { Router, Route, hashHistory } from 'react-router'



ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/Page2" component={Page2}/>
  </Router>
),
  document.getElementById('root')
);
