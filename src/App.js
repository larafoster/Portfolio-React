import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/main.css"; 
import "./assets/css/responsive.css";
import "./assets/css/renderPage.css";


// home page
import Home from "./components/pages/Home.js";
// portfolio sections
import About from './components/pages/About.js';
import Skills from './components/pages/Skills.js';
import Experience from './components/pages/Experience.js';
import Education from './components/pages/Education.js';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact.js';
//pages
import Pdf1 from "./components/pages/Pdf1.js";
import NoMatch from "./components/pages/Error404";

function App() {
  return (
        <>

<Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={800}
              classNames="fade"
            >
<Switch>
<Switch>
      <Route path="/"> <Home /></Route>
       <Route path="/about"> <About /></Route>
      <Route path="/skills"> <Skills /></Route>
      <Route path="/experience"> <Experience /></Route>
      <Route path="/education"> <Education /></Route>
      <Route path="/portfolio"> <Portfolio /></Route>
      <Route path="/contact"> <Contact /></Route>
      <Route path="/resume"><Pdf1 /></Route>
     <Route path="*"><NoMatch /> </Route>
             </Switch>
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} >
        </Route>
        </>
  );
}

export default App;

        
