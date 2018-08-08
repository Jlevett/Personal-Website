import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact} from '@fortawesome/free-brands-svg-icons';




import "./ContactMe.css";

const blankSectionBeforeTitle = <div style={{maxHeight:'58px'}}></div>;

class ContactMe extends Component{

  render(){
  	return(
  	 <div id='contactSection'>
        {blankSectionBeforeTitle}
        <SectionTitle name='Contact Me Today'/>
        <div id="conactContent">
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faLinkedin}/>
        jlevett@engineer.com
        Built in react
        <FontAwesomeIcon icon={faReact}/>
          LinkedIN GitHub and email which opens email with a click.
          BUBBLE IN THANKS
        </div>
      </div>
  )}

}
export default ContactMe;

