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
              <p id="aboutMeText">
                I am a ReactJS engineer with a background in mechatronics engineering.
                <br/><br/>
                I create prototypes that exceed expectations, and manufacture award winning products.
                I have been doing this for over 8 years while working in various roles
                across industries (including medical devices).
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
