import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import { Carousel } from 'react-responsive-carousel';
import "./OutsideWork.css";

import climb from '../images/L/climb.jpeg';
import travel from '../images/L/travel.png';
import skydive from '../images/L/skydive.png';



class OutSideWork extends Component{

  render(){
   const blankSectionBeforeTitle = <div style={{maxHeight:'58px','backgroundColor':'white'}}></div>;
    return(
      <div id='funSection'>
        {blankSectionBeforeTitle}
        <SectionTitle name='Outside Work'/>
        <div id="funContent">
          <div id='infunContent'>
            <div id='funList'>
              <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutLeft'>
                <div id='funcontainer'>
                  <p>Outside work, I like to:</p>
                  <li>Rock Climb</li>
                  <li>Slack Line</li>
                  <li>Bike and Run</li>
                  <li>Snowboard</li>
                  <li>Scuba Dive</li>
                  <li>Travel</li>
                </div>
              </ScrollAnimation>
            </div>
            <div id='funCarousel'>
              <Carousel emulateTouch  useKeyboardArrows   autoPlay interval={2000} infiniteLoop >
                <div className='funPhotoContainer'>
                  <img className='projectImage' src={climb} alt='climb'/>
                </div>
                <div className="funPhotoContainer">
                  <img className='projectImage' src={travel} alt='travel'/>
                </div>
                <div className="funPhotoContainer">
                  <img className='projectImage' src={skydive} alt='skydive'/>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OutSideWork;