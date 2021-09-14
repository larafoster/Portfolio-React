import { Route, Switch } from 'react-router-dom';
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/main.css"; 
import "./assets/css/responsive.css";
import "./assets/css/renderPage.css";

import About from './components/pages/About.js';
import Skills from './components/pages/Skills.js';
import Experience from './components/pages/Experience.js';
import Education from './components/pages/Education.js';
import Portfolio from './components/pages/Portfolio.js';
import Contact from './components/pages/Contact.js';
//pages
import Pdf1 from "./components/pages/Pdf1.js";
import NoMatch from "./components/pages/Error404";

const Routes = () => {
  return (


<Switch>
      <Route exact path="/"> <About /></Route>
      <Route exact path="/about"> <About /></Route>
      <Route exact path="/skills"> <Skills /></Route>
      <Route exact path="/experience"> <Experience /></Route>
      <Route exact path="/education"> <Education /></Route>
      <Route exact path="/portfolio"> <Portfolio /></Route>
      <Route exact path="/contact"> <Contact /></Route>
      <Route exact path="/resume"><Pdf1 /></Route>
     <Route path="*"><NoMatch /> </Route>
             </Switch>
          
    

           
  );
};

export default Routes;
