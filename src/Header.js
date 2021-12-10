// Header.js
// Header.js
// Header.js

import image from './assets/1.jpeg';


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <div className="builtInBox">
            <p>Built in</p>
            </div>
            <div className="heroImgDiv">
                <img src={image} alt=""/>
            </div>
            <h1>Andrew Craig</h1>
            <h2>Front End Web Developer</h2>
        </header>
    )
}


export default Header
