import React, { Component } from 'react';
import './Home.css'

import {hashHistory } from 'react-router'

class ToDoRow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    //console.log('Props to ToDoRow', this.props);
    return (
      <div className='eachToDoRow'>
          <h1>{this.props.item.todo}</h1>
          <input type="checkbox"
              className='checkBox'
              checked = {this.props.item.status}
              onChange={(e)=>{
                console.log('Checked on ToDo',this.props.item.id)
                this.props.actions.toggleTodo(this.props.item.id)
              }}
              />
          {
            this.props.item.status ?
            <button
              className='checkBox'
              onClick={()=>{this.props.actions.deleteTodo(this.props.item.id)}}>DEL</button> : null
          }
      </div>
    );
  }
}

export default ToDoRow;
