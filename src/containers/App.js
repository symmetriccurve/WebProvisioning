import React, { Component } from 'react';
import Home from '../components/Home';
import Page2 from '../components/Page2';
import * as action  from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Router, Route, hashHistory } from 'react-router'

class App extends Component{
  render(){
      console.log('Props into App', this);
      return <Home actions={this.props.actions} todos = {this.props.todos}/>
  }
}

const props = state => ({
  todos: state.todos,
  name: 'Moses'
})

const Actions = Actions =>({
  actions: bindActionCreators(action, Actions)
})

export default connect( props, Actions )(App)
