import React, { Component } from 'react';
import DownArrow from './DownArrow.js';
import "./OutsideWork.css";

class OutsideWork extends Component{

  method = ()=>{

  }

  render(){
  return(
      <div id=''>
        <div className=''>
        HELLO THERE. IM THE OUTSIDE
        </div>
        <DownArrow delayShow={2}/>

      </div>
  )}

}
export default OutsideWork;
