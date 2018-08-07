import React, { Component } from 'react';
import "./SectionTitle.css";

class SectionTitle extends Component{
  render(){
    return(
      <h1 className="sectionTitle">{this.props.name}</h1>
    )
  }
}
export default SectionTitle;
