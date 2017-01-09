import React, { Component } from 'react';
import './Home.css'
import { hashHistory } from 'react-router'
import ToDoRow from './ToDoRow'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo : [],
      currentTodo : 'Add your toDo here'
    }
  }

  _handleKeyPress = (keyPressed) => {
    console.log('before Enter',this.state.currentTodo);
    if(keyPressed.key == 'Enter'){
        this.setState({
          todo:[
            ...this.state.todo,
            {
              todo:this.state.currentTodo,
              status:false,
              id: Date.now()
            }
          ],
          currentTodo:''
        })
    }


  }

  _handleChange = (e) =>{
    console.log('e',e);
      this.setState({
          currentTodo:e.target.value
      })
  }

  render() {
    return (
      <div className='mainContainer'>
          <input className='toDoAddBar'
            value={this.state.currentTodo}
            onSubmit={(e)=>{console.log('onSubmit',e);}}
            onChange={(e)=>{this._handleChange(e)}}
            onKeyPress={(e)=>this._handleKeyPress(e)} />
          <div className='toDoListCont'>
            {this.state.todo.map((eachtoDo,i)=>{
              return <ToDoRow item={eachtoDo} key={i}/>
            })}
          </div>
      </div>
    );
  }
}

export default Home;
