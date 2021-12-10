// Skills.js
// Skills.js
// Skills.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
      <section className="skills">
        <h5>Skills</h5>
        <ul>
            <li>
                <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>
                <p>HTML5</p>
            </li>
            <li>
                <p>CSS3</p>
            </li>
            <li>
                <p>SCSS</p>
            </li>
            <li>
                <p>Javascript</p>
            </li>
            <li>
                <p>ReactJS</p>
            </li>
            <li>
                <p>Firebase</p>
            </li>
            <li>
                <p>Accessibility</p>
            </li>
            <li>
                <p>Git/Github</p>
            </li>
            <li>
                <p></p>
            </li>
        </ul>
      </section>
    )
  }
  
  export default Skills;

//   <FontAwesomeIcon icon="fa-brands fa-css3-alt" />

//   <FontAwesomeIcon icon="fa-brands fa-sass" />

//   <FontAwesomeIcon icon="fa-brands fa-js-square" />

//   <FontAwesomeIcon icon="fa-brands fa-react" />

//   <FontAwesomeIcon icon="fa-solid fa-fire" />

//   <FontAwesomeIcon icon="fa-solid fa-universal-access" />

//   <FontAwesomeIcon icon="fa-brands fa-github" />




