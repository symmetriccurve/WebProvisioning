import React, { Component } from 'react';
import './App.css'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className='mainContainer'>
          <div className='subContainer'>
              <div className='page1Cont'>
                  <button className='button1' onClick={(e)=>{console.log('onCLicke Triggered',e.type)}}> PAGE 1 </button>
                  <Link to="/Page1">Page1</Link>
              </div>
              <div className='page2Cont'>
                  <button  className='button2'> PAGE 2 </button>
                  <Link to="/Page2">Page2</Link>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
