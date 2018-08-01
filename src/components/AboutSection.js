import React, { Component } from 'react';

import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';

import profilephoto from '../images/me.png';//https://pixabay.com/en/sea-water-holidays-blue-background-2755908/


//
import "./AboutSection.css";

class AboutSection extends Component{
  render(){
  	return(
  		<div id='sectionContainer'>
			<SectionHeading title="About"/>
			<div id='aboutMeContent'>
				<div id='profileImageContainer'>
            		<img id = 'profileImage' alt='profile shot' src={profilephoto}/>
            	</div>
            	<div id='profileTextContainer'>
          			<p id='aboutMeText'>
          			I am a web developer with a background in mechatronics.<br/><br/>
          			For 6 years, as an R&D and PD Engineer, I previously helped companies
          			fabricate complex product ideas into prototypes as well as design and
          			manufacture original award-winning products. <br/><br/>
          			I have created software, worked with and within software teams in the medical device space.
          			</p>
          		</div>
          	</div>
          	<DownArrow delayShow={2}/>
        </div>
  )}

}

export default AboutSection;

/*Update About me section*/