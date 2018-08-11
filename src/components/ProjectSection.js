import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import PropTypes from 'prop-types';

import SectionTitle from "./smallcomponents/SectionTitle.js"
import "./ProjectSection.css";

const blankSectionBeforeTitle = <div style={{maxHeight: "58px","backgroundColor": "#79BDB4"}}></div>;
const projects = [
                  {
                    name: "Maps React",
                    link: "https://jlevett.github.io/Neighborhood-Map-React/",
                    tech: ["Reactjs","HTML5", "CSS3", "API", "JS ES6", "AY11"],
                    long: "This React app uses the Google maps API and the Foursquare API to list some attractions in the Blue Mountains, Australia. Includes a search functionality that filters out the markers by query.",
                    short: "A React app that uses the Google Maps and FourSquare API."
                  },
                  {
                    name: "My Reads React",
                    link: "https://jlevett.github.io/Myreads-App-React/",
                    tech: ["Reactjs", "react-router", "ES6", "HTML5", "AJAX"],
                    long: "A React app for managing books from read to already read (Like Goodreads). Supports a dynamic user interface that interacts with an API server and client library.",
                    short: "A React app for managing books. Like Goodreads."
                  },
                  {
                    name: "Restaurant Review Site",
                    link: "https://jlevett.github.io/Restaurant-Review-Site/",
                    tech: ["PWA", "HTML5", "CSS3", "API", "AY11", "Responsive" ],
                    long: "Created a mobile-ready offline web restaurant review application from a static site. Extra features were added while still maintaining the functionality.",
                    short: "A mobile-ready offline web application."
                  },
                  {
                    name: "Frogger Arcade Game",
                    link: "https://jlevett.github.io/Frogger-Arcade-Game/",
                    tech: ["JS", "HTML5","CCS3", "Canvas", "howler.js"],
                    long: "This is a take on the classic arcade game Frogger. Try and get a high score. Sound recommended.",
                    short: "This is a take on the retro game Frogger."

                  },
                  {
                    name:"Matching Game",
                    link:"https://jlevett.github.io/Memory-Game-Project/",
                    tech: ["CSS3", "HTML5", "JS"],
                    long: "This is a memory game tester. Working with time and the least amount of moves, find each matching card (to complete a pair). To win, repeat until all cards are revealed.",
                    short: "This is a classic memory tester game."
                  },
                  {
                    name: "Jasmine Test Suites",
                    link: "https://jlevett.github.io/Feedreader-Jasmine-Test-Suites/#",
                    tech: ["Jasmine TDD", "Gulp"],
                    long: "Created Jasmine test suites for an application that reads RSS feeds. Writing these test suites required analyzing many aspects of the application.",
                    short: "Jasmine Test suites for a feedreader site."
                  }
                ]

class ProjectSection extends Component{

  state = {
            innerWidth: 0,
            innerHeight: 0,
          }

  componentDidMount(){
    this.checkWindowDimensions();
  }

  checkWindowDimensions = () => {
      this.setState({innerWidth: window.innerWidth, innerHeight: window.innerHeight});
      window.addEventListener("resize",
       function(e){
        this.setState({innerWidth: window.innerWidth, innerHeight: window.innerHeight});
      }.bind(this));
  }

  render(){
  	return(
    <div id="projectSection">
      {blankSectionBeforeTitle}
      <SectionTitle name="projects"/>
        <div id="projectContent">
          <div>
          <Carousel emulateTouch  useKeyboardArrows  autoPlay interval={5500} >
            {projects.map((project,index) => (
              <div className="project" key={project+index}>
                <img style={{"display": "none"}} alt=""/>
                <div className="projectTitleContainer">
                  <h2 className="projectTitle">{project.name}</h2>
                </div>
                <div className="projectImageContainer">
                  <img src={this.props.images[index]} alt={project.name}/>
                </div>
              <div className="projectInfoContainer">
                <div className="projectDescriptionContainer">
                  <p className="projectDescription">
                    {this.state.innerWidth < 800
                    ?   project.short: this.state.innerHeight < 380
                    ?   project.short : project.long}
                  </p>
                </div>
                  <ul className="projectTechContainer">
                    {project.tech.map((t) => (
                    <li key={t} className="techPiece">{t}</li>
                    ))}
                  </ul>
                <div className="buttonHolder">
                  <a href={project.link} target="_blank" className="link">
                    <h3 className="demoButton">Open App</h3>
                  </a>
                </div>
              </div>
              <div className="fluffer">
             </div>
            </div>
          ))}
        </Carousel>
      </div>
      </div>
    </div>
  )}
}

export default ProjectSection;

ProjectSection.propTypes = {
        images: PropTypes.array,
    }