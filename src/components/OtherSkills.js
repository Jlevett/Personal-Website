import React, { Component } from "react";
import SectionTitle from "./smallcomponents/SectionTitle.js"
import { Carousel } from "react-responsive-carousel";
import PropTypes from 'prop-types';

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./OtherSkills.css";

const imagesAltText = ['Smoking Gun', 'Perfect Press', 'Trophon Printer', 'Smoking Gun Pro', 'Other Skills'];
const blankSectionBeforeTitle = <div style={{maxHeight: "58px", "backgroundColor": "#79BDB4"}}></div>;

class OtherSkills extends Component{

  render(){
    return(
      <div id="otherSection">
        {blankSectionBeforeTitle}
        <SectionTitle name="Other Skills"/>
        <div id="otherContent">
          <div id="inOtherContent">
            <div id="otherSkillsList">
                <div id="otherskillcontainer">
                  <p>Apart from software I also have<br/>
                  expertise in manufacturing<br/>
                  products, start to finish:</p>
                  <li>From idea to design to prototype</li>
                  <li>Prototype to mass production</li>
                  <li>Mechanical and electronic design</li>
                  <li>Compliance</li>
                  <li>Global regulatory approval</li>
                </div>
            </div>
            <div id="otherskillsCarousel">
              <Carousel emulateTouch  useKeyboardArrows showArrows={false} infiniteLoop  showThumbs={false} autoPlay interval={3500}>
                {imagesAltText.map((image,index)=>(
                  <div className="otherSkillPhotoContainer" key={index}>
                    <img src={this.props.images[index]} alt={imagesAltText[index]}/>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OtherSkills;

OtherSkills.propTypes = {
        images: PropTypes.array,
    }
