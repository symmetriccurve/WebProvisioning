import React, { Component } from 'react';
import './App.css'
class Page1 extends Component {
  render() {
    return (
      <div className='mainContainer'>
          <div className='subContainer'>
              <div className='page1Cont'>
                  <button className='button1' onClick={(e)=>{console.log('onCLicke Triggered',e.type)}}> PAGE 1 </button>
              </div>
          </div>
      </div>
    );
  }
}

export default Page1;
