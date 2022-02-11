
import React from 'react';

import resume from './assets/resume.pdf';
import image2 from './cosmetics/resume.png';
import image3 from './cosmetics/twit.png';
import image4 from './cosmetics/linked.png';
import image5 from './cosmetics/git.png';
import image6 from './cosmetics/mail.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faEnvelope, faFile, faGithub, faLinkedin)

function ContactLinks() {
    return (

      <div className="contactLinkBox">
          <div className="wrapper">


            <div className="contactIcons">

                    <a href="https://www.linkedin.com/in/andrew-craig-6220a5194/" aria-label="Email">
                      <span class="sr-only">Opens in a new window</span>
                      <div className="tooltip logo logo1" 
                      data-aos="flip-left" 
                      data-aos-duration="3000" 
                      data-aos-anchor-placement="top-bottom">
                    
                      <img src={image4} className="icon" alt="A logo link for LinkedIN"/>
                      <span className="tooltiptext">LinkedIn</span>
                      </div>       
                    </a>

                    <a href="mailto:info@andrewcraigdev.com" aria-label="Email">
                      <span class="sr-only">Opens in a new window</span>
                      <div className="tooltip logo"
                        data-aos="flip-left" 
                        data-aos-duration="3000" 
                        data-aos-anchor-placement="top-bottom">
                    
                        <img src={image6} className="icon" alt="A logo link for email"/>
                        <span className="tooltiptext">Email</span>
                      </div>
                      <span class="sr-only">Open email window</span>
                    </a>

                    <a href={resume} aria-label="Resume">
                    <span class="sr-only">Opens in a new window</span>
                <div className="tooltip logo" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                  <img src={image2} className="icon" alt="A logo link for resume"/>
                  <span className="tooltiptext">Resume</span>
                </div>
                    <span class="sr-only">Open resume pdf</span>
                    </a>

                    <a href="https://github.com/AndrewCraig101" aria-label="Github">
                    <span class="sr-only">Opens in a new window</span>
                <div className="tooltip logo" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                  <img src={image5} className="icon" alt="A logo link for github"/>
                  <span className="tooltiptext">Github</span>
                </div>
                    <span class="sr-only">Navigate to GitHub profile</span>                  
                    </a>

                  <a href="https://twitter.com/andrewcraig101" aria-label="Twitter">
                    <span class="sr-only">Opens in a new window</span>
                    <div className="tooltip logo" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                      <img src={image3} className="icon" alt="A logo link for Twitter"/>
                    <span className="tooltiptext">Twitter</span>
                    </div>
                    <span class="sr-only">Navigate to Twitter profile</span>                  
                  </a>
            </div>
        </div>
    </div>
    )
 
}



  export default ContactLinks




  