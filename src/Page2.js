import React, { Component } from 'react';
import './App.css'
class Page2 extends Component {
  render() {
    return (
      <div className='mainContainer'>
          <div className='subContainer'>
              <div className='page2Cont'>
                  <button className='button2' onClick={(e)=>{console.log('onCLicke Triggered',e.type)}}> PAGE 2 </button>
              </div>
          </div>
      </div>
    );
  }
}

export default Page2;
