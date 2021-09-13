import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
        <>
        
<Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={800}
              classNames="fade"
            >
<Switch>
<Route exact path="/" component={App} /> 
      <Route exact path="./about" component={About} /> 
      <Route exact path="./skills"component={Skills} /> 
      <Route exact path="./experience" component={Experience} /> 
      <Route exact path="./education" component={Education} /> 
      <Route exact path="./portfolio" component={Portfolio} /> 
      <Route exact path="./contact" component={Contact} /> 
      <Route exact path="./resume" component={Pdf1} /> 
              <Route component={NoMatch} />
            </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} >
        </Route>
        </>
      </Router>
  );
}

export default App;

        
