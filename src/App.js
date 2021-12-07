import './scss/styles.scss';
import ReactDOM from 'react-dom'

// import './App.css';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Contact from './Contact.js';





// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee, fahtml5 } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

// library.add(fab, faCheckSquare, faCoffee, faGithub)




function App() {
  return (
    <div className="appDiv">

      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      

    </div>
  );
}


export default App;



