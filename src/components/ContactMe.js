import React, { Component } from 'react';
import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';
import "./ContactMe.css";

class ContactMe extends Component{

  method = ()=>{

  }

  render(){
  	return(
  		<div id=''>
      <SectionHeading title="Contact Me"/>
        <div className=''>
        HELLO THERE. IM THE Contact Me section
        </div>
        <DownArrow delayShow={2}/>

      </div>
  )}

}
export default ContactMe;

