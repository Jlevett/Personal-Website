import React from "react";
import "./SectionHeading.css";

//import PropTypes from "prop-types";

function SectionHeading(props){
	return (
  		<div className="section-box">
           <h1 className="section-title">{props.title}</h1>
        </div>
    )
}

export default SectionHeading;