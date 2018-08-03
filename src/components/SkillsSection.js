import React, { Component } from 'react';

import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';
import ScrollAnimation from 'react-animate-on-scroll';
import "./SkillsSection.css";

import css from "../images/icons/css3.svg";
import es6 from "../images/icons/es6.svg";
import git from "../images/icons/git.svg";
import gulp from "../images/icons/gulp.svg";
import html5 from "../images/icons/html5.svg";
import jasmine from "../images/icons/jasmine.svg";
import java from "../images/icons/java.svg";
import js from "../images/icons/js.svg";
import jquery from "../images/icons/jquery.svg";
import npm from "../images/icons/npm.svg";
import react from "../images/icons/react.svg";
import reactrouter from "../images/icons/reactrouter.svg";
import webpack from "../images/icons/webpack.svg";
import pwa from "../images/icons/pwa.png";
import responsivedesign from "../images/icons/responsivedesign.svg";
import ay11 from "../images/icons/ay11.png";
import api from "../images/icons/api.png";
import ajax from "../images/icons/ajax.png";

class SkillsSection extends Component{

  randomizeAnimation = ()=>{
    const animationType = ['shake', 'bounce','tada','wobble', 'jello', 'swing','rubberBand'];
    let random =Math.floor(Math.random() * animationType.length);
    return animationType[random];
  }

  render(){

    const icons = [react, reactrouter, es6, jquery, html5, css, js, api, jasmine, git, java, pwa, npm,
              webpack, gulp, ay11,  ajax, responsivedesign];
    const iconNames = ['REACT', 'REACT ROUTER','JS ES6', 'JQUERY', 'HTMLL5', 'CSS3', 'JAVASCRIPT',
                   'API','JASMINE TDD', 'GIT', 'JAVA','PROGRESSIVE WEB APP', 'NPM', 'WEBPACK', 'GULP', 'ACCESSIBILITY ',
                   'AJAX','RESPONSIVE DESIGN'];
  	return(
  		<div id='skillssection'>
  			<SectionHeading title="Software Skills"/>
  				<div id='skillsContainer'>
            {icons.map((icon,index)=>(
              <ScrollAnimation initiallyVisible={true} animateIn={this.randomizeAnimation()} key={icon}>
                  <img src={icon}alt ={iconNames[index]} className='iconImage' />
                     <p className="titleIcon">{iconNames[index]}</p>
              </ScrollAnimation>
            ))}
        </div>
        <DownArrow delayShow={0}/>
      </div>
  )}

}
export default SkillsSection;

