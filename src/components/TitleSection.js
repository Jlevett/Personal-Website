import React, { Component } from 'react';
import Particles from 'react-particles-js'; //https://www.npmjs.com/package/react-particles-js
import particlePropJson from '../json/particles.json';
import Typist from 'react-typist';
import DownArrow from './smallcomponents/DownArrow.js';
import "./TitleSection.css";

class TitleSection extends Component{
  render(){
    return (
      <div id='titlesection'>
        <Particles  params={particlePropJson} height='100vh'/>
        <div id='title_container'>
          <h1 id='title'className='titleAnimation'>JEREMY<br/>LEVETT</h1>
          <Typist
            className="subtitle"
            cursor ={{ show: false, hideWhenDone: true}}
            avgTypingDelay = {120}
          >
            <span className="subtitle">DESIGN.</span>
            <Typist.Delay ms={500} />
            <span > CREATE.</span>
            <Typist.Delay ms={500} />
            <span> INSPIRE.</span>
          </Typist>
        </div>
        <DownArrow/>
      </div>
    );
  }
}

export default TitleSection;