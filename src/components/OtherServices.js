import React, { Component } from 'react';
import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';
import "./OtherServices.css";

class OtherServices extends Component{

  method = ()=>{

  }

  render(){
  return(
      <div id=''>
      <SectionHeading title="OTHER SERVICES"/>
        <div className=''>
        HELLO THERE. IM THE SERVICES SECTION
        </div>
        <DownArrow delayShow={2}/>

      </div>
  )}

}
export default OtherServices;

