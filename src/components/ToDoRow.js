import React, { Component } from 'react';
import './Home.css'

import {hashHistory } from 'react-router'

class ToDoRow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className='eachToDoRow'>
          <h1>{this.props.item.todo}</h1>
          <input type="checkbox" className='checkBox'/>
          {
            this.props.item.status ? <button className='checkBox'>DEL</button> : null
          }
      </div>
    );
  }
}

export default ToDoRow;
