import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import PropTypes from 'prop-types';

import "./SkillsSection.css";
import SectionTitle from "./smallcomponents/SectionTitle.js"

const iconNames = ["REACT", "REACT ROUTER", "JS ES6", "JQUERY", "HTML5", "CSS3", "JAVASCRIPT",
                  "API", "JASMINE TDD", "GIT", "JAVA", "PROGRESSIVE WEB APP", "NPM", "WEBPACK", "GULP", "ACCESSIBILITY ",
                  "AJAX", "RESPONSIVE DESIGN"];
const blankSectionBeforeTitle = <div style={{maxHeight: "58px","backgroundColor": "#79BDB4"}}></div>;

class SkillsSection extends Component{

  randomizeAnimation = ()=>{
                              const animationType = ["shake", "tada", "wobble", "jello", "swing", "rubberBand"];
                              let random =Math.floor(Math.random() * animationType.length);
                              return animationType[random];
                            }

render(){
    return(
      <div id="skillSection">
        {blankSectionBeforeTitle}
        <SectionTitle name="Software Skills"/>
        <div id="skillContent">
          {iconNames.map((icon,index)=>(
           <ScrollAnimation key={icon} initiallyVisible={true} animateIn={this.randomizeAnimation()} offset={10}>
            <img src={this.props.skillIcons[index]} alt ={iconNames[index]} className="iconImage" />
            <p className="icontTitle">{iconNames[index]}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    )
  }
}

export default SkillsSection;

SkillsSection.propTypes = {
        skillIcons: PropTypes.array,
    }
