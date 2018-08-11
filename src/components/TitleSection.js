import React, { Component } from "react";
import Particles from "react-particles-js";
import particlePropJson from "../json/particles.json";
import Typist from "react-typist";
import PropTypes from 'prop-types';
import ScrollAnimation from "react-animate-on-scroll";
import DownArrow from "./smallcomponents/DownArrow.js";
import "./TitleSection.css";

class TitleSection extends Component{

  render(){
    return (
      <div id="titlesection" >
        <div className="parallax" style={{backgroundImage: "url(" + this.props.background + ")"}}></div>
        <Particles id="coveringCanvas" params={particlePropJson} height="100vh"/>
        <div id="title_container">
          <ScrollAnimation  animateIn="fadeIn" animateOnce={true}>
            <h1 id="title"className="titleAnimation">JEREMY<br/>LEVETT</h1>
          </ScrollAnimation>
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
        <DownArrow click={this.props.downArrowClick}/>
      </div>

    );
  }
}

export default TitleSection;

TitleSection.propTypes = {
        downArrowClick: PropTypes.func,
        background: PropTypes.string,
    }

