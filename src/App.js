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

class App extends Component{

    state = {
            sections: ['HOME','ABOUT','SKILLS','PROJECTS','OTHER SKILLS','INTERESTS','CONTACT ME'],
            scrollSettings: {offset: 1, duration: 500},
            currentSection: 0
            }

    componentDidMount() {
        scrollToComponent(this.home, {duration: 500, ease:'inCirc'});
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
        <div>
            <NavBar scrollToSection = {this.scrollToSection} sections={this.state.sections}/>
            <TitleSection ref={(section) => { this.home = section;}} downArrowClick={this.ontitlePageDownArrowClick}/>
            <AboutSection ref={(section) => { this.about = section;}}/>
            <SkillsSection ref={(section) => { this.skills = section; }}/>
            <ProjectSection ref={(section) => { this.projects = section; }}/>
            <OtherSkills ref={(section) => { this.otherSkills = section; }}/>
            <Interests ref={(section) => { this.interests = section; }}/>
            <ContactMe ref={(section) => { this.contact = section; }}/>
        </div>
        );
    };

}

export default App;

//The arrow clicked goes to about
//TOuch pull down, touch pull up, scroll down, scroll up, key down, key up auto scrolls.
//Move this stuff into the nav bar section.
//look up bind,apply,call to get rid of let that=this....

//hamburger menu closes after selection
//nav bar has contact details.
//image lazy progressive loading
//http://paletton.com/#uid=54q1d0kB0B0AZTrvGLruop6qAlu
//add draw down arrow on first page... delay till 5 seconds