import React, { Component } from 'react';
import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';
import "./OutsideWork.css";

class OutsideWork extends Component{

  method = ()=>{

  }

  render(){
  return(
      <div id=''>
      <SectionHeading title="OUTSIDE WORK"/>
        <div className=''>
        HELLO THERE. IM THE OUTSIDE
        </div>
        <DownArrow delayShow={2}/>

      </div>
  )}

}
export default OutsideWork;
