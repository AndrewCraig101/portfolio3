
import image from './assets/1.jpeg'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faGithub, faSass, faReact, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faSass, faReact, faJsSquare, faCss3)


const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <nav>
                    <ul 
                    data-aos="fade-left"
                    data-aos-duration="1300"
                    data-aos-delay="300"
                    data-aos-easing="ease-out"
                    >
                        <li><a href="#about" className="nombore"><span>About</span><span className="slider"></span></a></li>
                        <li><a href="#projects" className="nombore"><span>Projects</span><span className="slider"></span></a></li>
                        <li><a href="#skills" className="nombore"><span>Skills</span><span className="slider"></span></a></li>
                        <li><a href="#contact" className="nombore"><span>Contact</span><span className="slider"></span></a></li>
                    </ul>
                </nav>
                <div className="heroImgDiv" 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-easing="ease-out"
                >
                    <img src={image} alt=""/>
                </div>
                <h1>Andrew Craig</h1>
                <h2>Front End Web Developer</h2>
            </div>
        </header>
    )
}

export default Header
