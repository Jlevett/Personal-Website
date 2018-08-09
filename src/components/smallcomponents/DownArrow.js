import React, { Component } from 'react';
import "./DownArrow.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class DownArrow extends Component{

render(){
      return (
      <div className="arrowContainer">
        <div className='arrowHolder' onClick ={()=>this.props.click()}>
            <FontAwesomeIcon icon={faAngleDoubleDown}/>
        </div>
      </div>
      );
    }
}

export default DownArrow;
