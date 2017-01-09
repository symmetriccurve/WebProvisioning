import React, { Component } from 'react';
import './Home.css'

import {hashHistory } from 'react-router'

class ToDoRow extends Component {
  constructor(props){
    super(props)
    console.log('initial State Trigger on Page1');
  }
  render() {
    return (
      <div className='eachToDoRow'>
          <h1>{this.props.todo}</h1>
      </div>
    );
  }
}

export default ToDoRow;
