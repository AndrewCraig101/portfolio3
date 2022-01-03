import image from './assets/1.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithub, faSass, faReact, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faSass, faReact, faJsSquare, faCss3)

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><a href="#about" class="nombore"><span>About</span><span class="slider"></span></a></li>
                        <li><a href="#projects" class="nombore"><span>Projects</span><span class="slider"></span></a></li>
                        <li><a href="#skills" class="nombore"><span>Skills</span><span class="slider"></span></a></li>
                        <li><a href="#contact" class="nombore"><span>Contact</span><span class="slider"></span></a></li>
                        
                    </ul>
                </nav>
                <div className="heroImgDiv">
                    <img src={image} alt="" />
                </div>
                <h1>Andrew Craig</h1>
                <h2>Front End Web Developer</h2>
            </div>
        </header>
    )
}

export default Header
