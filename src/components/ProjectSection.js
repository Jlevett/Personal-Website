import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from "./smallcomponents/SectionTitle.js"
import "./ProjectSection.css";

import project1 from '../images/L/mapsreact.png';
import project2 from '../images/L/myreads.png';
import project3 from '../images/L/restaurant.png';
import project4 from '../images/L/frogger.png';
import project5 from '../images/L/memory.png';
import project6 from '../images/L/feedreader.png';

const projectImages = [project1, project2, project3, project4, project5, project6];



const projects =[
        {
          name:'Maps React',
          link:'https://jlevett.github.io/Neighborhood-Map-React/',
          tech: ['Reactjs','HTML5', 'CSS3', 'API', 'JS ES6', 'AY11'],
          long:'This single page app uses the Google maps API and the location-based service Foursquare API to list some attractions in the Blue Mountains Katoomba, Australia. Includes a search functionality that filters out the markers by query. Made with responsiveness and a11y in mind.',
          short:'Single page React app that uses the Google Maps and FourSquare API.'
        },
        {
          name:'My Reads React',
          link:'https://jlevett.github.io/Myreads-App-React/',
          tech: ['Reactjs', 'react-router', 'CSS3', 'HTML5', 'AJAX', 'ES6'],
          long:'A front end application for managing books to read/already read (Similar to Goodreads). Leveraged React and react-router to support a dynamic user interface that interacts with an API server and client library.',
          short:'React application for managing books to read/already read. Similar to Goodreads.'
        },
        {
          name:'Restaurant Review Site',
          link:'https://jlevett.github.io/Restaurant-Review-Site/',
          tech: ['PWA', 'HTML5', 'CSS3', 'API', 'AY11', 'Responsive' ],
          long:'Transformed a static webpage into a mobile-ready offline web application. The code was updated to resolve these issues and add extra features while still maintaining the included functionality.',
          short:'A mobile-ready offline web application.'
        },
        {
          name:'Frogger Arcade Game',
          link:'https://jlevett.github.io/Frogger-Arcade-Game/',
          tech: ['JS', 'HTML5','CCS3', 'Canvas', 'howler.js'],
          long:'This is a take on the classic arcade game Frogger. It required HTML, CSS, JS and Canvas skills. The image resource management file and a basic loop engine file (that was worked on later by myself) was provided prior to starting the project.',
          short:'This is a take on the classic arcade game Frogger.'

        },
        {
          name:'Matching Game',
          link:'https://jlevett.github.io/Memory-Game-Project/',
          tech: ['CSS3', 'HTML5', 'JS'],
          long:'This is a classic memory game tester. Working with time and the least amount of moves, find each matching card (to complete a pair). To win, repeat until all cards are revealed.',
          short:'This is a classic memory game tester.  To win, repeat until all cards are revealed'
        },
        {
          name:'Jasmine Test Suites',
          link:'https://jlevett.github.io/Feedreader-Jasmine-Test-Suites/#',
          tech: ['Jasmine TDD', 'Gulp'],
          long:'Given a web-based application that reads RSS feeds. The task was to create test suites for the feedreader using Jasmine. Writing these test suites required analyzing multiple aspects of the application',
          short:'Test suites for a feedreader site using Jasmine.'
        }
      ];

class ProjectSection extends Component{
  state = {
    innerWidth:0,
    innerHeight:0
  }
  componentDidMount(){
    this.checkWindowDimensions();

  }
  checkWindowDimensions = () =>{
      this.setState({innerWidth:window.innerWidth, innerHeight:window.innerHeight})
      let that=this;
      window.addEventListener("resize",
       function(e){
        that.setState({innerWidth:window.innerWidth, innerHeight:window.innerHeight})
      });
  }

  render(){
    const blankSectionBeforeTitle = <div style={{maxHeight:'58px', backgroundColor:'white', 'zIndex':'-1'}}></div>;
  	return(
    <div id='projectSection'>
      {blankSectionBeforeTitle}
      <SectionTitle name='projects'/>
        <div id='projectContent'>
          <div>
          <Carousel emulateTouch  useKeyboardArrows  autoPlay interval={2000}  infiniteLoop>
            {projects.map((project,index)=>(
              <div className='project' key={project+index}>
                <img style={{'display':'none'}} alt=''/>
                <div className="projectTitleContainer">
                  <h2 className='projectTitle'>{project.name}</h2>
                </div>
                <div className='projectImageContainer'>
                    <img className='projectImage' src={projectImages[index]} alt={project.name}/>
                </div>
              <div className='projectInfoContainer'>
                <div className='projectDescriptionContainer'>
                  <p className='projectDescription'>
                    {this.state.innerWidth<800
                    ?   project.short: this.state.innerHeight<680
                    ?   project.short : project.long}
                  </p>
                </div>
                  <ul className='projectTechContainer'>
                    {project.tech.map((t)=>(
                    <li key={t} className='techPiece'>{t}</li>
                    ))}
                  </ul>
                <div className='buttonHolder'>
                  <a href={project.link} target="_blank" className="link">
                    <h3 className="demoButton">Open App</h3>
                  </a>
                </div>
              </div>
              <div className='fluffer'>
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

