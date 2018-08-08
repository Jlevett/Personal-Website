import React, { Component } from 'react';

import NavBar from "./components/NavBar.js"; //Single use component
import TitleSection from "./components/TitleSection.js"; //Single use component
import AboutSection from "./components/AboutSection.js"; //Single use component
import SkillsSection from "./components/SkillsSection.js"; //Repeating component
import ProjectSection from "./components/ProjectSection.js"; //Repeating component
import OtherServices from "./components/OtherServices.js"; //Repeating component
import OutsideWork from "./components/OutsideWork.js"; //Repeating component
import ContactMe from "./components/ContactMe.js"; //Repeating component
import './App.css';

class App extends Component{

    render(){
        return (
        <div>
            <NavBar/>
            <TitleSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <OtherServices/>
            <OutsideWork/>
            <ContactMe/>
        </div>
        );
    };

}

export default App;

// TO DO
/*Fix layout issue on iphone X and pixel X
react router
scroll or key down to get to next heading https://www.npmjs.com/package/react-scroll-to-component
hamburger menu closes after selection
nav bar has contact details.
image lazy progressive loading
photos of climbing
http://paletton.com/#uid=50x0t0kB0B0AZTrvGLruop6qAlu
*/