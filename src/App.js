import React, { Component } from 'react';

import NavBar from "./components/NavBar.js"; //Single use component
import TitleSection from "./components/TitleSection.js"; //Single use component
import AboutSection from "./components/AboutSection.js"; //Single use component
import SkillsSection from "./components/SkillsSection.js"; //Repeating component
import ProjectSection from "./components/ProjectSection.js"; //Repeating component
import OtherSkills from "./components/OtherSkills.js"; //Repeating component
import Interests from "./components/Interests.js"; //Repeating component
import ContactMe from "./components/ContactMe.js"; //Repeating component
import './App.css';

import scrollToComponent from 'react-scroll-to-component';
import "./components/NavBar.css";

import Swipeable from 'react-swipeable';

class App extends Component{

    state = {
            sections: ['HOME','ABOUT','SKILLS','PROJECTS','OTHER SKILLS','INTERESTS','CONTACT ME'],
            scrollSettings: {offset: 1, duration: 500},
            currentSection: 0
            }

    componentDidMount() {

        scrollToComponent(this.home, {duration: 500, ease:'inCirc'});
          let that = this;

        /*Prevent zoom in and out*/
          window.addEventListener("wheel", e=>{
            if(e.ctrlKey)
              e.preventDefault();
          });

          /*Detect wheel scroll direction*/
          window.addEventListener('wheel', function(e){
                e.preventDefault();
                if(!e.ctrlKey){
                    if (e.deltaY < 0) {
                        that.scrollUpToPreviousSection();
                      }
                      if (e.deltaY > 0) {
                        console.log('scrolling down');
                        that.scrollDownToNextSection();
                      }
              }
          });

          /*Detect if a key is pressed*/

          window.addEventListener('keyup', function(e){
            that.keyPressed(e);
          });

     }
     /*
     *Changes current section
     */

     keyPressed = (e) =>{
           if(e.keyCode===38){
            e.preventDefault();
            this.scrollUpToPreviousSection();
           }

             if(e.keyCode===40){
            e.preventDefault();
              this.scrollDownToNextSection();
             }
     }

     scrollUpToPreviousSection = () => {
        if(this.state.currentSection -1 >= 0 )
          this.scrollToSection(this.state.currentSection -1)
     }

     scrollDownToNextSection = () => {
        let sectionsTotal = this.state.sections.length;
        if(this.state.currentSection + 1  <= (this.state.sections.length - 1) )
          this.scrollToSection(this.state.currentSection +1)
     }

    scrollToSection =(section)=>{
        this.setState({currentSection:section});
        const references = [this.home, this.about, this.skills, this.projects, this.otherSkills, this.interests, this.contact];
        scrollToComponent(references[section],this.state.scrollSettings);
    }

    ontitlePageDownArrowClick = () =>{
       this.scrollToSection(1);
    }

    render(){
        return (

        <div >

            <NavBar scrollToSection = {this.scrollToSection} sections={this.state.sections}/>
    <Swipeable
        preventDefaultTouchmoveEvent={true}
        onSwipedDown={()=>{this.scrollUpToPreviousSection()}}
        onSwipedUp={()=>{this.scrollDownToNextSection()}}
    >
            <TitleSection ref={(section) => { this.home = section;}} downArrowClick={this.ontitlePageDownArrowClick}/>
            <AboutSection ref={(section) => { this.about = section;}}/>
            <SkillsSection ref={(section) => { this.skills = section; }}/>
            <ProjectSection ref={(section) => { this.projects = section; }}/>
            <OtherSkills ref={(section) => { this.otherSkills = section; }}/>
            <Interests ref={(section) => { this.interests = section; }}/>
            <ContactMe ref={(section) => { this.contact = section; }}/>
           </Swipeable>

        </div>


        );
    };

}
//

export default App;
// Parallax Scrolling

//look up bind,apply,call to get rid of let that=this....
//tidy and code up
//image lazy progressive loading
//minimize the screen size.


//parrallex effect....
