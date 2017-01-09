import React, { Component } from 'react';
import './Home.css'
import { hashHistory } from 'react-router'
import ToDoRow from './ToDoRow'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo : [
        {
          todo : 'Be Good',
          status : false
        },
        {
          todo : 'Talk Less',
          status : false
        },
        {
          todo : 'Think More',
          status : false
        },
        {
          todo : 'Aim High',
          status : false
        },
      ],
      currentTodo : 'Add To Do Here'
    }
  }

  _handleKeyPress = (keyPressed) => {

    if(keyPressed.key == 'Enter'){
        console.log('keyPressed',keyPressed.key);
        this.setState({
          todo:[...this.state.todo,this.state.currentTodo],
          currentTodo:''
        })
    }


  }

  render() {
    return (
      <div className='mainContainer'>
          <input className='toDoAddBar'
            value={this.state.currentTodo}
            onSubmit={(e)=>{console.log('onSubmit',e);}}
            onChange={(e)=>{this.setState({currentTodo:e.target.value})}}
            onKeyPress={this._handleKeyPress} />
          <div className='toDoListCont'>
            {this.state.todo.map((eachtoDo,i)=>{
              return <ToDoRow todo={eachtoDo.todo} key={i}/>
            })}
          </div>
      </div>
    );
  }
}

export default Home;
