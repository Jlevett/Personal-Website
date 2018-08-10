import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./OtherSkills.css";

import smoker from '../images/L/smoker.png';
import press from '../images/L/press.png';
import printer from '../images/L/printer.png';
import pro from '../images/L/pro.png';
import otherskills from '../images/L/otherskills.png';
// import products from '../images/L/products.png';
// Might want to put these in later

class OtherSkills extends Component{

  render(){
    const blankSectionBeforeTitle = <div style={{maxHeight:'58px', 'backgroundColor':'var(--sectionTitleSpacers)'}}></div>;
    return(
      <div id='otherSection'>
        {blankSectionBeforeTitle}
        <SectionTitle name='Other Skills'/>
        <div id="otherContent">
          <div id='inOtherContent'>
            <div id='otherSkillsList'>
              <ScrollAnimation animateIn='lightSpeedIn' animateOut='lightSpeedOut'>
                <div id='otherskillcontainer'>
                  <p>I have expertise in manufacturing<br/>
                  products, start to finish:</p>
                  <li>From idea to design to prototype</li>
                  <li>Prototype to mass production</li>
                  <li>Mechanical and electronic design</li>
                  <li>Compliance</li>
                  <li>Global regulatory approval</li>
                </div>
              </ScrollAnimation>
            </div>
            <div id='otherskillsCarousel'>
              <Carousel emulateTouch  useKeyboardArrows  autoPlay interval={2500} infiniteLoop >
                 <div className='otherSkillPhotoContainer'>
                   <img className='projectImage' src={smoker} alt='other skills'/>
                  </div>
                 <div className='otherSkillPhotoContainer'>
                   <img className='projectImage' src={press} alt='other skills'/>
                  </div>
                 <div className='otherSkillPhotoContainer'>
                   <img className='projectImage' src={printer} alt='other skills'/>
                  </div>
                 <div className='otherSkillPhotoContainer'>
                   <img className='projectImage' src={pro} alt='other skills'/>
                  </div>
                  <div className="otherSkillPhotoContainer">
                    <img className='projectImage' src={otherskills} alt='products made'/>
                  </div>


              </Carousel>
             </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OtherSkills;