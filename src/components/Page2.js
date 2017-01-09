import React, { Component } from 'react';
import './Home.css'


import {hashHistory } from 'react-router'

class Page2 extends Component {
  constructor(props){
    super(props)
    console.log('initial State Trigger on Page2');
  }
  render() {
    return (
      <div className='mainContainer'>
          <div className='subContainer'>
                  <h1> This is Page 2 </h1>
                  <button className='button1' onClick={()=>{hashHistory.goBack()}}> Go back to Home </button>
          </div>
      </div>
    );
  }
}

export default Page2;
