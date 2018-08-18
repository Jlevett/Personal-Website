import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PropTypes from 'prop-types';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import "./AboutSection.css";

const blankSectionBeforeTitle = <div style={{maxHeight:"58px", "backgroundColor": "transparent"}}></div>;

class AboutSection extends Component{

  render(){
    return(
      <div id="aboutSection">
          {blankSectionBeforeTitle}
          <SectionTitle name="about"/>
        <div id="aboutContent">
          <div id="profileImgContainer">
            <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" style={{textAlign:"center"}}>
              <img id="profileImage" alt="Profile of Jeremy" src={this.props.image}/>
            </ScrollAnimation>
          </div>
          <div id="blurbContainer">
              <p id="aboutMeText">I am a React developer with a background in mechatronics engineering.
              <br/><br/>For the last 8 years in various industries I have created prototypes that exceed
               expectations and manufactured award winning products.
              </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection;

AboutSection.propTypes = {
        image: PropTypes.string,
    }
