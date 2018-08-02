import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

import TitleSection from "./components/TitleSection.js"; //Single use component
import AboutSection from "./components/AboutSection.js"; //Single use component
import SkillsSection from "./components/SkillsSection.js"; //Repeating component
import SectionHeading from "./components/SectionHeading.js"; //Repeating component
import './App.css';
//import PropTypes from "prop-types";
import DownArrow from "./components/DownArrow.js";




class App extends Component{

    render(){
        return (
            <div>
              	<TitleSection/>
                <AboutSection/>
                <SkillsSection/>


                <SectionHeading title="Projects"/>
                <div className='fill'></div>
                <DownArrow delayShow={2}/>
                <SectionHeading title="Other Services"/>
                <div className='fill'>
                </div><DownArrow delayShow={2}/>
                <SectionHeading title="Outside Work"/>
                <div className='fill'></div>
                <DownArrow delayShow={2}/>
                <SectionHeading title="Contact Me"/>
            </div>

        );
    };

}



export default App;



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGulp, faCss3Alt, faReact, faJs, faJava, faHtml5, faGit, faNpm} from '@fortawesome/free-brands-svg-icons';
// for github etx