import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./smallcomponents/LuxBar.css"

import "./NavBar.css";


class NavBar extends Component{

     closeNavAfterClick = () => {
		document.getElementById('luxbar-checkbox').checked = false;
		document.getElementsByClassName('luxbar-menu')[0].scrollTop = 0;
     }

	render(){
		return (
			<header id="luxbar" className="luxbar-fixed">
			    <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox"/>
			     <div className="luxbar-menu luxbar-menu-left luxbar-menu-dark">
			        <ul className="luxbar-navigation" >
			            <li className="luxbar-header" >
			                <label className="luxbar-hamburger luxbar-hamburger-doublespin"
			                id="luxbar-hamburger" htmlFor="luxbar-checkbox" > <span></span> </label>
			            </li>
			            {this.props.sections.map((section, index) =>
				         <li className="luxbar-item" key={section}>
		                    <a
		         			onClick={()=>{
		         				this.props.scrollToSection(index);
		         				this.closeNavAfterClick();}}
		         			>
		                    {section}
		                    </a>
		                </li>
			            )}
			        </ul>
			    </div>
			</header>
	    )
	}
}

export default NavBar;

NavBar.propTypes = {
        smallProfilePhoto: PropTypes.string,
        sections: PropTypes.array
    }
