import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import { Carousel } from 'react-responsive-carousel';
import "./Interests.css";

import climb from '../images/L/climb.jpeg';
import travel from '../images/L/travel.png';
import skydive from '../images/L/skydive.png';



class Interests extends Component{

  render(){
    //Not working correctly
   const blankSectionBeforeTitle = <div style={{maxHeight:'58px', 'backgroundColor':'var(--sectionTitleSpacers)'}}></div>;
    return(
      <div id='funSection'>
         {blankSectionBeforeTitle}
        <SectionTitle name='Interests'/>
        <div id="funContent">
          <div id='infunContent'>
            <div id='funList'>
              <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOutLeft'>
                <div id='funcontainer'>
                  <p>Outside work, I like to:</p>
                  <li>Rock climb</li>
                  <li>Slackline</li>
                  <li>Bike and Run</li>
                  <li>Snowboard</li>
                  <li>Scuba dive</li>
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
                  <img className='projectImage' src={skydive} alt='travel'/>
                </div>
                <div className="funPhotoContainer">
                  <img className='projectImage' src={travel} alt='skydive'/>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Interests;