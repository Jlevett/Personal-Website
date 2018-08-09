import React, { Component } from 'react';
import "./NavBar.css";
import "./smallcomponents/LuxBar.css"

class NavBar extends Component{

     closeNavAfterClick = () => {
		let menuStateElement = document.getElementById('luxbar-checkbox');
		console.log(menuStateElement);
		menuStateElement.checked = false;
     }


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
			            {this.props.sections.map((section, index)=>
				         <li className="luxbar-item" key={section}>
		                    <a
		         			onClick={()=>{this.props.scrollToSection(index); this.closeNavAfterClick();}}>
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



