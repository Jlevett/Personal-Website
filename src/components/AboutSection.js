import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import profilephotoL from '../images/meL.jpg';

import SectionTitle from "./smallcomponents/SectionTitle.js"

import "./AboutSection.css";
const blankSectionBeforeTitle = <div style={{maxHeight:'58px', backgroundColor:'white'}}></div>;

class AboutSection extends Component{

  render(){
    return(
      <div id='aboutSection'>
          {blankSectionBeforeTitle}
          <SectionTitle name='about'/>
        <div id="aboutContent">
          <div id='profileImgContainer'>
            <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut' style={{textAlign:'center'}}>
              <img id = 'profileImage' alt='profile shot'  src={profilephotoL}/>
            </ScrollAnimation>
          </div>
          <div id='blurbContainer'>
            <ScrollAnimation animateIn='lightSpeedIn' animateOut='lightSpeedOut'>
              <p id="aboutMeText">
              I am a web developer with a background in mechatronics.<br/><br/>
              For 6 years, as an R&D and PD Engineer, I helped companies
              fabricate complex product ideas into prototypes as well as design and
              manufacture original award winning products. In the medical device space, I
              created software, worked with and within software teams.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection;