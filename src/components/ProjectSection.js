import React, { Component } from 'react';
import DownArrow from './DownArrow.js';
import "./ProjectSection.css";


import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// import profilephoto from '../images/L/me.jpg';//DELETE LATER

const projects =[
        {
          name:'Neighborhood Map React',
          image:'mapsreact.png',
          link:'https://jlevett.github.io/Neighborhood-Map-React/',
          tech: ['Reactjs','HTML5', 'CSS3', 'Foursquare API','Google Maps API', 'JS ES6', 'AY11'],
          about:'This single page app uses the Google maps API and the location-based service Foursquare API to list some attractions in the Blue Mountains Katoomba, Australia. Includes a search functionality that filters out the markers by query. Made with responsiveness and a11y in mind.',
          short:'Single page React app that uses the Google Maps and FourSquare API.'
        },
        {
          name:'My Reads React',
          image:'myreads.png',
          link:'https://jlevett.github.io/Myreads-App-React/',
          tech: ['Reactjs', 'react-router', 'CSS3', 'HTML5', 'AJAX', 'JS ES6'],
          about:'A front end application for managing books to read/already read (Similar to Goodreads). Leveraged React and react-router to support a dynamic user interface that interacts with an API server and client library.',
          short:'React application for managing books to read/already read. Similar to Goodreads.'
        },
        {
          name:'Restaurant Review Site',
          image:'restaurant.png',
          link:'https://jlevett.github.io/Restaurant-Review-Site/',
          tech: ['PWA - serviceWorker', 'HTML5', 'CSS3', 'Google Maps API', 'AY11', 'Responsive CSS' ],
          about:'Transformed a static webpage into a mobile-ready offline web application. The code was updated to resolve these issues and add extra features while still maintaining the included functionality.',
          short:'A mobile-ready offline web application.'
        },
        {
          name:'Frogger Aracade Game',
          image:'frogger.png',
          link:'https://jlevett.github.io/Frogger-Arcade-Game/',
          tech: ['JS', 'HTML5','CCS3', 'Canvas animation', 'howler.js'],
          about:'This is a take on the classic arcade game Frogger. It required HTML, CSS, JS and Canvas skills. The image resource management file and a basic loop engine file (that was worked on later by myself) was provided prior to starting the project.',
          short:'This is a take on the classic arcade game Frogger.'

        },
        {
          name:'Matching Game',
          image:'memory.png',
          link:'https://jlevett.github.io/Memory-Game-Project/',
          tech: ['CSS3', 'HTML5', 'JS'],
          about:'This is a classic memory game tester. Working with time and the least amount of moves, find each matching card (to complete a pair). To win, repeat until all cards are revealed.',
          short:'This is a classic memory game tester.  To win, repeat until all cards are revealed'
        },
        {
          name:'FeedreaderJasmine Test Suites',
          image:'feedreader.png',
          link:'https://jlevett.github.io/Feedreader-Jasmine-Test-Suites/#',
          tech: ['Jasmine testing framework', 'Gulp'],
          about:'Given a web-based application that reads RSS feeds. The task was to create test suites for the feedreader using Jasmine. Writing these test suites required analyzing multiple aspects of the application',
          short:'Test suites for a feedreader site using Jasmine.'
        }
      ];

class ProjectSection extends Component{

  method = ()=>{

  }

  render(){

    console.log(projects[1].image);
    console.log('../images/L/'+projects[1].image);

  	return(
  		<div>

          <Carousel showArrows={true}   emulateTouch autoPlay  useKeyboardArrows infiniteLoop showThumbs={true}>



          <div >
              <p className="legend">{projects[1].name}</p>


          </div>



          <div>

                 <p className="legend">Legend 2</p>
          </div>
          <div>

              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
      <DownArrow delayShow={1}/>
    </div>



  )}

}
export default ProjectSection;
 // <img  alt='profile shot' src={profilephoto} />

// https://www.npmjs.com/package/react-slick
// https://www.npmjs.com/package/react-responsive-carousel