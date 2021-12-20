import './scss/styles.scss';
import ReactDOM from 'react-dom'

import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Emoji from './Emoji.js'

import './sass/app.scss';



// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee, fahtml5 } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

// library.add(fab, faCheckSquare, faCoffee, faGithub)




function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
