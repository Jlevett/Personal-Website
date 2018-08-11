import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./SectionTitle.css";

class SectionTitle extends Component{
  render(){
    return(
      <h1 className="sectionTitle">{this.props.name}</h1>
    )
  }
}
export default SectionTitle;

SectionTitle.propTypes = {
        name: PropTypes.string,
    }