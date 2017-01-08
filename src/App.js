import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      color : 'tan'
    }
  }
  render() {
    return (
      <div style={{flex:1,backgroundColor:this.state.color,alignItems:'center',justifyContent:'center'}}>
        <div>
          <h1>Hello world </h1>
          <input style={{height:100,backgroundColor:this.state.color}}
          onFocus={()=>{console.log('Focus');}}
          onBlur={()=>{console.log('blur');}}
          onMouseOver={()=>{this.setState({color:'coral'})}}
          onMouseOut={()=>{this.setState({color:'tan'})}}
          />
        </div>  
      </div>
    );
  }
}

export default App;
