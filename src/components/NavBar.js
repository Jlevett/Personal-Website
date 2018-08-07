import React, { Component } from 'react';
import "./NavBar.css";

class NavBar extends Component{


	render(){
	        return (
			<header id="luxbar" className="luxbar-fixed">
    		<input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox"/>
    		<div className="luxbar-menu luxbar-menu-left luxbar-menu-dark">
        		<ul className="luxbar-navigation">
		            <li className="luxbar-header">
		                <label className="luxbar-hamburger luxbar-hamburger-doublespin"
		                id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span> </label>
		            </li>
							<li className="luxbar-item"><a href="#">HOME</a></li>
				            <li className="luxbar-item"><a href="#">ABOUT</a></li>
				            <li className="luxbar-item"><a href="#">SKILLS</a></li>
				            <li className="luxbar-item"><a href="#">PROJECTS</a></li>
				            <li className="luxbar-item"><a href="#">OTHER SKILLS</a></li>
				            <li className="luxbar-item"><a href="#">INTERESTS</a></li>
				            <li className="luxbar-item"><a href="#">CONTACT</a></li>
        				</ul>
    				</div>
				</header>
	           )
	    }
}

export default NavBar;