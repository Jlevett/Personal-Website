import React, { Component } from "react";
import Preload from 'react-preloaded';
import { DotLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import "./App.css";

import scrollToComponent from "react-scroll-to-component";
import Swipeable from "react-swipeable";
import NavBar from "./components/NavBar.js";
import TitleSection from "./components/TitleSection.js";
import AboutSection from "./components/AboutSection.js";
import SkillsSection from "./components/SkillsSection.js";
import ProjectSection from "./components/ProjectSection.js";
import OtherSkills from "./components/OtherSkills.js";
import Interests from "./components/Interests.js";
import ContactMe from "./components/ContactMe.js";
import screenfull from 'screenfull';
/*Images passed into preloader*/
//Background Photo
import background from "./images/sea.jpg";
//About Me  Photo
import profilephoto from "./images/me_L.jpg";
//Other Skill  images.
import smoker from "./images/smoker_L.png";
import press from "./images/press_L.png";
import printer from "./images/printer_L.png";
import pro from "./images/pro_L.png";
import otherSkills from "./images/otherskills_L.png";
//Interest images
import climb from "./images/climb_L.jpeg";
import travel from "./images/travel_L.png";
import skydive from "./images/skydive_L.png";
//Project images
import project1 from "./images/mapsreact_L.png";
import project2 from "./images/myreads_L.png";
import project3 from "./images/restaurant_L.png";
import project4 from "./images/frogger_L.png";
import project5 from "./images/memory_L.png";
import project6 from "./images/feedreader_L.png";
//Skills images
import cssImage from "./images/icons/css3.svg";
import es6Image  from "./images/icons/es6.svg";
import gitImage  from "./images/icons/git.svg";
import gulpImage  from "./images/icons/gulp.svg";
import html5Image  from "./images/icons/html5.svg";
import jasmineImage  from "./images/icons/jasmine.svg";
import javaImage  from "./images/icons/java.svg";
import jsImage  from "./images/icons/js.svg";
import jqueryImage  from "./images/icons/jquery.svg";
import npmImage  from "./images/icons/npm.svg";
import reactImage  from "./images/icons/react.svg";
import reactrouterImage  from "./images/icons/reactrouter.svg";
import webpackImage  from "./images/icons/webpack.svg";
import pwaImage from "./images/icons/pwa.png";
import responsivedesignImage  from "./images/icons/responsivedesign.svg";
import ay11Image  from "./images/icons/ay11.png";
import apiImage  from "./images/icons/api.png";
import ajaxImage  from "./images/icons/ajax.png";

//Preloader List
const skillIcons = [reactImage, reactrouterImage, es6Image, jqueryImage, html5Image, cssImage ,
                  jsImage, apiImage, jasmineImage, gitImage, javaImage, pwaImage, npmImage ,
                  webpackImage, gulpImage , ay11Image,  ajaxImage, responsivedesignImage ];
const otherskills = [smoker, press, printer, pro, otherSkills];
const interests = [skydive, climb, travel];
const projects = [project1, project2, project3, project4, project5, project6];
//Order of loading images for preloader
let preloadImages = [background, profilephoto, travel, skydive, climb, project1, project2, project3, project4,
                  project5, project6, smoker, press, printer, pro, otherSkills].concat(skillIcons);

//loading indicator
var loadingIndicator = (<div id='preloaderContainer'>
                        <div id='preloaderItems'>
                          <div className='preloaderItemsContainer'>
                            <DotLoader
                              sizeUnit={"px"}
                              number={"50"}
                              color={'#F73749'}
                            />
                          </div>
                          <div className='preloaderItemsContainer'>
                            <p id='loadingText'>Loading...</p>
                          </div>
                        </div>
                      </div>);

class App extends Component{

  state = {
          sections: ["HOME", "ABOUT", "SKILLS", "PROJECTS", "OTHER SKILLS", "INTERESTS", "CONTACT ME"],
          scrollSettings: {offset: 1, duration: 500},
          currentSection: 0,
          fullscreen: false,
          scrollCount: 0
          }

  componentDidMount() {
    this.preventZoomByScroll();
    this.preventKeyUpDownNormalAction();
    this.actOnScrollDirection();
    this.actOnUpDownKeyPress();
    this.ifOrientationChangesScrollCurrentSection();
    this.ifTouchMakeFullScreen();
    this.unstableError();
  }
  //Error Alert if Internet explorer
  unstableError = () => {
       var isIE = false || !!document.documentMode;
       if(isIE){
          alert("WARNING: Web App not fully supported on Internet Explorer!");
       }
  }
  ifTouchMakeFullScreen = () => {
    let toplevel = document.getElementById('toplevel');
    toplevel.addEventListener('touchend', function(e){
     if(!this.state.fullscreen){
        this.setState({fullscreen: true, currentSection: 0});
        if (screenfull.enabled){
           screenfull.request();
        }
      }
    }.bind(this));
    document.addEventListener("visibilitychange", function() {
        this.setState({fullscreen: false})
    }.bind(this));
  }

  ifOrientationChangesScrollCurrentSection= () => {
    window.addEventListener("orientationchange", function() {
      //add small delay for screen change.
      window.setTimeout(function(){
        this.scrollToSection(this.state.currentSection);
      }.bind(this), 200);
    }.bind(this));
  }

  actOnUpDownKeyPress = (e) => {
    window.addEventListener("keyup", function(e){
      if(e.keyCode === 38){
        e.preventDefault();
        this.scrollUpToPreviousSection();
      }
      if(e.keyCode === 40){
        e.preventDefault();;
        this.scrollDownToNextSection();
      }
    }.bind(this));
  }

  preventZoomByScroll = () => {
    window.addEventListener("wheel", e => {
      if(e.ctrlKey)
        e.preventDefault();
    });
  }

  preventKeyUpDownNormalAction = () => {
    window.addEventListener("keydown", e => {
      if(e.keyCode === 38 || e.keyCode === 40 )
        e.preventDefault();
    });
  }

  actOnScrollDirection = () => {
    window.addEventListener("wheel", function(e){
      e.preventDefault();
      if(this.state.scrollCount>3 || this.state.scrollCount<-3)
        this.setState({scrollCount:0});
      if(!e.ctrlKey){
        if (e.deltaY < 0){
          this.setState((prevState)=>{return {scrollCount:prevState.scrollCount+1};});
          if(this.state.scrollCount===3){
            this.scrollUpToPreviousSection();
          }
        }
        if (e.deltaY > 0){
          this.setState(prevState=>{return {scrollCount:prevState.scrollCount-1};});
          if(this.state.scrollCount===-3){
            this.scrollDownToNextSection();
          }
        }
      }
    }.bind(this));
  }

  scrollUpToPreviousSection = () => {
    if(this.state.currentSection - 1 >= 0 )
      this.scrollToSection(this.state.currentSection - 1)
   }

   scrollDownToNextSection = () => {
    if(this.state.currentSection + 1  <= (this.state.sections.length - 1) )
      this.scrollToSection(this.state.currentSection + 1)
   }

  scrollToSection = (section) => {
    this.setState({currentSection: section, scrollCount:0})
    const references = [this.home, this.about, this.skills, this.projects, this.otherSkills, this.interests, this.contact];
    scrollToComponent(references[section], this.state.scrollSettings);
  }

  ontitlePageDownArrowClick = () => {
    this.scrollToSection(1);
  }

  // Handeler for preloader
  handleImageLoadError = (failedImages) => {
      console.log('failed loading images');
  }
  // Handeler for preloader
  handleImageLoadSuccess = () => {
      this.scrollToSection(0);
  }

  render(){

    return (
      <div id ='toplevel'>
        <Preload
          className={'dotLoader'}
          loadingIndicator={loadingIndicator}
          images={preloadImages}
          onError={this.handleImageLoadError}
          onSuccess={this.handleImageLoadSuccess}
          resolveOnError={true}
          mountChildren={true}
        >

          <div>
            <NavBar
              scrollToSection={this.scrollToSection}
              sections={this.state.sections}
            />
            <Swipeable
                preventDefaultTouchmoveEvent={true}
                onSwipedDown={() => {this.scrollUpToPreviousSection()}}
                onSwipedUp={() => {this.scrollDownToNextSection()}}
            >
              <TitleSection
                ref={(section) => {this.home = section;}}
                downArrowClick={this.ontitlePageDownArrowClick}
                background={background}
              />
              <AboutSection
                ref={(section) => {this.about = section;}}
                image={profilephoto}
              />
              <SkillsSection
                ref={(section) => {this.skills = section;}}
                skillIcons= {skillIcons}
              />
              <ProjectSection
                ref={(section) => {this.projects = section;}}
                images={projects}
              />
              <OtherSkills
                ref={(section) => {this.otherSkills = section;}}
                images={otherskills}
              />
              <Interests
                ref={(section) => {this.interests = section;}}
                images={interests}
              />
              <ContactMe ref={(section) => {this.contact = section;}}/>
            </Swipeable>
          </div>
        </Preload>
      </div>
    );
  };
}

export default App;

App.propTypes = {
        //Rendered during load
        loadingIndicator: PropTypes.node,
        //Array of image urls to be preloaded
        images: PropTypes.array,
        //If set, the preloader will automatically show
        //the children content after this amount of time
        autoResolveDelay: PropTypes.number,
        //Error callback. Is passed the error
        onError: PropTypes.func,
        //Success callback
        onSuccess: PropTypes.func,
        //Whether or not we should still show the content
        //even if there is a preloading error
        resolveOnError: PropTypes.bool,
        //Whether or not we should mount the child content after
        //images have finished loading (or after autoResolveDelay)
        mountChildren: PropTypes.bool
    }
