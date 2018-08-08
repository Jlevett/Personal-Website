import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./OtherServices.css";


import otherskills from '../images/L/otherskills.png';
import products from '../images/L/products.png';



class OtherServices extends Component{

  render(){
    const blankSectionBeforeTitle = <div style={{maxHeight:'58px','backgroundColor':'white'}}></div>;
    return(
      <div id='otherSection'>
        {blankSectionBeforeTitle}
        <SectionTitle name='Other Skills'/>
        <div id="otherContent">
          <div id='inOtherContent'>
            <div id='otherSkillsList'>
              <ScrollAnimation animateIn='lightSpeedIn' animateOut='lightSpeedOut'>
                <div id='otherskillcontainer'>
                  <p>I have award winning <br/> expertise in manufacturing:</p>
                  <li>Idea, design to prototype</li>
                  <li>Mechanical electronic design</li>
                  <li>Compliance</li>
                  <li>Prototype to mass production</li>
                  <li>Global regulatory approval</li>
                </div>
              </ScrollAnimation>
            </div>
            <div id='otherskillsCarousel'>
              <Carousel emulateTouch  useKeyboardArrows  autoPlay interval={2000} infiniteLoop >
                 <div className='otherSkillPhotoContainer'>
                   <img className='projectImage' src={products} alt='other skills'/>
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

export default OtherServices;