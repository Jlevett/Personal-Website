import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./OtherServices.css";

const blankSectionBeforeTitle = <div style={{maxHeight:'58px','backgroundColor':'white'}}></div>;

class OtherServices extends Component{

  method = ()=>{

  }

  render(){
  return(
      <div id='otherSection'>
          {blankSectionBeforeTitle}
          <SectionTitle name='Other Skills'/>
        <div id="otherContent">
          <Carousel emulateTouch  useKeyboardArrows  autoPlay>

          </Carousel>
        </div>
      </div>
  )}

}
export default OtherServices;


 // <ScrollAnimation animateIn='lightSpeedIn' animateOut='lightSpeedOut'>

 //   </ScrollAnimation>