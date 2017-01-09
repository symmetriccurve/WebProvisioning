import React, { Component } from 'react';
import './App.css'
import { Link,hashHistory } from 'react-router'
class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
          <div className='subContainer'>
              <div className='page1Cont'>
                  <button className='button1' onClick={(e)=>{hashHistory.push('/Page1')}}> PAGE 1 </button>
              </div>
              <div className='page2Cont'>
                  <button className='button2' onClick={(e)=>{hashHistory.push('/Page2')}}> PAGE 2 </button>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
