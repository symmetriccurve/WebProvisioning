import React, { Component } from 'react';
import './Home.css'
import { hashHistory } from 'react-router'
import ToDoRow from './ToDoRow'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTodo : ''
    }
  }

  // const Home = (props) => {
  //   return
  // }

  _handleKeyPress = (keyPressed) => {
    //console.log('before Enter',this.state.currentTodo);
    if(keyPressed.key == 'Enter'){
      this.props.actions.addTodo(this.state.currentTodo)
      this.setState({
        currentTodo : ''
      })
    }
  }

  _handleChange = (e) =>{
    //console.log('e',e);
      this.setState({
          currentTodo:e.target.value
      })
  }

  render() {
    //console.log('Home Props', this.props);
    return (
      <div className='mainContainer'>
          <input className='toDoAddBar'
            placeholder = {'Add your to do here'}
            value={this.state.currentTodo}
            onChange={(e)=>{this._handleChange(e)}}
            onKeyPress={(e)=>this._handleKeyPress(e)} />
          <div className='toDoListCont'>
            {this.props.todos.allTodos.map((eachtoDo,i)=>{
              return <ToDoRow item={eachtoDo} key={i} actions={this.props.actions}/>
            })}
          </div>
      </div>
    );
  }
}

export default Home;
