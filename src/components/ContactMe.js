import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from "./smallcomponents/SectionTitle.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import "./ContactMe.css";



class ContactMe extends Component{

  state = {
          textCopied:false
          }

  copyToClipboard = () => {
    var textField = document.createElement('textarea')
    textField.innerText = 'jlevett@engineer.com'
    document.body.appendChild(textField)
    textField.select();
    document.execCommand('copy')
    textField.remove();
    this.setState({textCopied:true})
    let that=this;
    setTimeout(function(){
       that.setState({textCopied:false})
     }, 3000);
  }

  render(){
    const blankSectionBeforeTitle = <div style={{maxHeight:'57px'}}></div>;
  	return(
      <div id='contactSection'>
        {blankSectionBeforeTitle}
        <SectionTitle name='Contact Me Today'/>
        <div id="contactContent">
          <div className='contactparttop' key={'linkedin'}>
            <a href='https://www.linkedin.com/in/jeremylevett/' target="_blank" className="iconColor"  rel="noopener noreferrer" >
              <ScrollAnimation animateIn='flip' animateOut='fadeOutLeft'>
                <FontAwesomeIcon icon={faLinkedin} className='contactIcons'/>
              </ScrollAnimation>
            </a>
          </div>
          <div className='contactparttop' key={'github'}>
            <a href='https://github.com/Jlevett' target="_blank" className="iconColor"  rel="noopener noreferrer" >
              <ScrollAnimation animateIn='flip' animateOut='fadeOutRight'>
                <FontAwesomeIcon icon={faGithub} className='contactIcons'/>
              </ScrollAnimation>
            </a>
          </div>
          <div className='contactpartbottom'>
            <div className ='email'>
               <a
               onClick={this.copyToClipboard}
               className='emailLink'
               target="_blank"
               rel="noopener noreferrer"
               href="mailto:jlevett@engineer.com?subject=G'day&body=Thanks%20for%20getting%20in%20touch.%0D%0A%0D%0ACheers,%20Jeremy."
               >
                jlevett@engineer.com
              </a>
            </div>
            <div className ='email'>
              <p   className='emailLink' style={{'color':'green'}} >{this.state.textCopied ? 'Email copied to clipboard':null }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe;