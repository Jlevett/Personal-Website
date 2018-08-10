import React, { Component } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import "./SkillsSection.css";
import SectionTitle from "./smallcomponents/SectionTitle.js"

import cssImage from "../images/icons/css3.svg";
import es6Image  from "../images/icons/es6.svg";
import gitImage  from "../images/icons/git.svg";
import gulpImage  from "../images/icons/gulp.svg";
import html5Image  from "../images/icons/html5.svg";
import jasmineImage  from "../images/icons/jasmine.svg";
import javaImage  from "../images/icons/java.svg";
import jsImage  from "../images/icons/js.svg";
import jqueryImage  from "../images/icons/jquery.svg";
import npmImage  from "../images/icons/npm.svg";
import reactImage  from "../images/icons/react.svg";
import reactrouterImage  from "../images/icons/reactrouter.svg";
import webpackImage  from "../images/icons/webpack.svg";
import pwaImage from "../images/icons/pwa.png";
import responsivedesignImage  from "../images/icons/responsivedesign.svg";
import ay11Image  from "../images/icons/ay11.png";
import apiImage  from "../images/icons/api.png";
import ajaxImage  from "../images/icons/ajax.png";


const icons = [reactImage , reactrouterImage , es6Image , jqueryImage , html5Image , cssImage ,
               jsImage , apiImage , jasmineImage , gitImage , javaImage , pwaImage , npmImage ,
              webpackImage , gulpImage , ay11Image ,  ajaxImage , responsivedesignImage ];
const iconNames = ['REACT', 'REACT ROUTER','JS ES6', 'JQUERY', 'HTMLL5', 'CSS3', 'JAVASCRIPT',
                   'API','JASMINE TDD', 'GIT', 'JAVA','PROGRESSIVE WEB APP', 'NPM', 'WEBPACK', 'GULP', 'ACCESSIBILITY ',
                   'AJAX','RESPONSIVE DESIGN'];


class SkillsSection extends Component{

  randomizeAnimation = ()=>{
                              const animationType = ['shake','tada','wobble', 'jello', 'swing','rubberBand'];
                              let random =Math.floor(Math.random() * animationType.length);
                              return animationType[random];
                            }

  render(){
    const blankSectionBeforeTitle = <div style={{maxHeight:'58px','backgroundColor':'var(--sectionTitleSpacers)'}}></div>;
    return(
    <div id='skillSection'>
      {blankSectionBeforeTitle}
      <SectionTitle name='Software Skills'/>
      <div id='skillContent'>
        {icons.map((icon,index)=>(
         <ScrollAnimation key={icon} initiallyVisible={true} animateIn={this.randomizeAnimation()}>
          <img src={icon} alt ={iconNames[index]} className='iconImage' />
          <p className="icontTitle">{iconNames[index]}</p>
          </ScrollAnimation>
        ))}
      </div>
    </div>
    )
  }
}

export default SkillsSection;