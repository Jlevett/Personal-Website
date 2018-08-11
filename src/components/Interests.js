import React, { Component } from "react";
import SectionTitle from "./smallcomponents/SectionTitle.js"
import PropTypes from 'prop-types';
import { Carousel } from "react-responsive-carousel";
import "./Interests.css";

const imagesAltText = [ 'Jeremy Skydiving', 'Jeremy Climbing', 'Jeremy in Morroco'];
const blankSectionBeforeTitle = <div style={{maxHeight:"58px", "backgroundColor":"#79BDB4"}}></div>;

class Interests extends Component{

  render(){
    return(
      <div id="funSection">
         {blankSectionBeforeTitle}
        <SectionTitle name="Interests"/>
        <div id="funContent">
          <div id="infunContent">
            <div id="funList">
                <div id="funcontainer">
                  <p>Outside work, I like to:</p>
                  <li>Rock climb</li>
                  <li>Slackline</li>
                  <li>Bike</li>
                  <li>Run</li>
                  <li>Snowboard</li>
                  <li>Scuba dive</li>
                  <li>Travel</li>
                </div>
            </div>
            <div id="funCarousel">
              <Carousel emulateTouch  useKeyboardArrows showArrows={false} autoPlay interval={3500} infiniteLoop showThumbs={false}>
                {imagesAltText.map((image,index)=>(
                  <div className="funPhotoContainer" key={index}>
                      <img src={this.props.images[index]} alt={imagesAltText[index]}/>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Interests;


Interests.propTypes = {
        images: PropTypes.array,
    }
