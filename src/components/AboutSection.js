import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group' // ES6
 // import VisibilitySensor from 'react-visibility-sensor';//https://github.com/joshwnj/react-visibility-sensor

import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';

import profilephoto from '../images/L/me.jpg';//https://pixabay.com/en/sea-water-holidays-blue-background-2755908/
import ScrollAnimation from 'react-animate-on-scroll';//https://dbramwell.github.io/react-animate-on-scroll/#home
import "./AboutSection.css";

class AboutSection extends Component{

  render(){
  	return(
  		<div id='sectionContainer'>
			<SectionHeading title="About"/>
			<div id='aboutMeContent'>
				<div id='profileImageContainer'>
                <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'>
            		<img id = 'profileImage' alt='profile shot' src={profilephoto}/>
           </ScrollAnimation>
            	</div>
            	<div id='profileTextContainer'>
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
          	<DownArrow delayShow={2}/>
        </div>
  )}

}
export default AboutSection;


