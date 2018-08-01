import React, { Component } from 'react';
import Particles from 'react-particles-js'; //https://www.npmjs.com/package/react-particles-js
import particlePropJson from '../json/particles.json';
import Typist from 'react-typist';
import background from '../images/sea.jpg';//https://pixabay.com/en/sea-water-holidays-blue-background-2755908/
import DownArrow from './DownArrow.js';


import "./TitleSection.css";

class TitleSection extends Component{
  render(){
    return (
    	      <div id = 'intro_container'>
               <img id = 'background_image' alt='beach' src={background}/>
               <Particles id='covering_canvas' params={particlePropJson}/>
               <div id='title_container' >
               <div id='holder'>
                    <h1 id='title'className='titleAnimation'>JEREMY<br/>LEVETT</h1>
               </div>
                    <Typist className="subtitle"
                        cursor ={{ show: false, hideWhenDone: true,hideWhenDoneDelay: 500}}
                        avgTypingDelay = {120}
                    >
                    <Typist.Delay ms={5000} />
                    <span className="subtitle">DESIGN.</span>
                    <Typist.Delay ms={500} />
                     <span > CREATE.</span>
                   <Typist.Delay ms={500} />
                   <span> INSPIRE.</span>
                   </Typist>
                </div>
                <DownArrow delayShow={10} position='first'/>
            </div>
    	);
      }
}

export default TitleSection;