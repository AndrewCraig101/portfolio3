// Skills.js
// Skills.js
// Skills.js

import React from 'react';
// import FontAwesome from 'react-fontawesome'

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCoffee, faFire, faUniversalAccess, faSass } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons'

// ffaReact
// ffaJsSquare
// ffaSass

// import { ffaCss3Alt } from '@fortawesome/free-Regular-svg-icons'
// import { ffaCss3Alt } from '@fortawesome/free-light-svg-icons'

// library.add( faHtml5, faGithub);

const Skills = () => {
    return (
      <section id="skills" className="skills">
        <div className="wrapper">
            <h3>Skills</h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHtml5} className="icon"></FontAwesomeIcon>
                    <p>HTML5</p>
                </li>
                <li>
                {/* <FontAwesomeIcon icon="fa-brands fa-css3-alt" /> */}
                    {/* <FontAwesomeIcon icon={fa-brands fa-sass}></FontAwesomeIcon> */}
                    {/* <FontAwesomeIcon icon="ffa-css3-alt" />     */}
                    <p>CSS3</p>
                </li>
                <li>
                    {/* <FontAwesomeIcon icon={ffaSass}></FontAwesomeIcon> */}
                    {/* <FontAwesomeIcon icon=""/> */}
                    <p>SCSS</p>
                </li>
                <li>
                    {/* <FontAwesomeIcon icon={ffaJsSquare}></FontAwesomeIcon> */}
                    {/* <FontAwesomeIcon icon="" /> */}
                    <p>Javascript</p>
                </li>
                <li>
                    {/* <FontAwesomeIcon icon={ffaReact}></FontAwesomeIcon> */}
                    <p>ReactJS</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faFire} className="icon"></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon="" />  */}
                    <p>Firebase</p>
                </li>
                <li>
                    {/* <FontAwesomeIcon icon={}></FontAwesomeIcon> */}
                    <FontAwesomeIcon icon={faUniversalAccess} className="icon"/>
                    <p>Accessibility</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
                    {/* <FontAwesomeIcon icon="" /> */}
                    <p>Git/Github</p>
                </li>
                <li>
                    <p></p>
                </li>
            </ul>
        </div>
      </section>
    )
  }
  
  export default Skills;

  

  

  

  

  

  

  




