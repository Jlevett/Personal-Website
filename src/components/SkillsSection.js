import React, { Component } from 'react';

import SectionHeading from "./SectionHeading.js";
import DownArrow from './DownArrow.js';
import ScrollAnimation from 'react-animate-on-scroll';//https://dbramwell.github.io/react-animate-on-scroll/#home
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

import responsivedesign from "../images/icons/responsivedesign.png";
import ay11 from "../images/icons/ay11.png";
import api from "../images/icons/api.png";
import ajax from "../images/icons/ajax.png";

class SkillsSection extends Component{

  render(){
  	return(
  		<div id='skillssection'>
  			<SectionHeading title="Software Skills"/>
  				<div id='skillsContainer'>
            <img src={css}alt ="CSS3"   className='image' />
            <img src={es6}alt ="CSS3"   className='image' />
            <img src={git}alt ="CSS3"   className='image' />
            <img src={gulp}alt ="CSS3"   className='image' />
            <img src={jasmine}alt ="CSS3"   className='image' />
            <img src={java}alt ="CSS3"   className='image' />
            <img src={js}alt ="CSS3"   className='image' />
            <img src={jquery}alt ="CSS3"   className='image' />
            <img src={npm}alt ="CSS3"   className='image' />
            <img src={react}alt ="CSS3"   className='image' />
            <img src={reactrouter}alt ="CSS3"   className='image' />
            <img src={webpack}alt ="CSS3"   className='image' />
            <img src={responsivedesign}alt ="CSS3"   className='image' />
            <img src={ay11}alt ="CSS3"   className='image' />
            <img src={api}alt ="CSS3"   className='image' />
            <img src={ajax}alt ="CSS3"   className='image' />
           <img src={html5}alt ="CSS3"   className='image' />
        </div>
        <DownArrow delayShow={0}/>
      </div>
  )}

}
export default SkillsSection;



// Missing ES6, API, AJAX, W3C WCAG

//API Integration, Ay11 Accesibility, PWA (Service Worker), RESPONSIVe Design