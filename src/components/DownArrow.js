import React, { Component } from 'react';
import "./DownArrow.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class DownArrow extends Component{

render(){
      return (
      <div className="arrowContainer"
           style={{
               'WebkitAnimation': 'bounce 2s infinite',
               'WebkitAnimationDelay': `${this.props.delayShow}s`,
                'animation': 'bounce 2s infinite',
                'animationDelay': `${this.props.delayShow}s`,
                'position': this.props.position==='first'? 'absolute':'relative'
             }}
      >
        <div className='arrowHolder'>
            <FontAwesomeIcon icon={faAngleDoubleDown}/>
        </div>
      </div>
      );
    }
}

export default DownArrow;
//
