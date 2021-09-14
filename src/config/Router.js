import React from "react"
import { Switch, Route } from "react-router-dom"
// home page
import Home from "../components/pages/Home.js";
// portfolio sections
import About from '../components/pages/About.js';
import Skills from '../components/pages/Skills.js';
import Experience from '../components/pages/Experience.js';
import Education from '../components/pages/Education.js';
import Portfolio from '../components/pages/Portfolio.js';
import Contact from '../components/pages/Contact.js';
//pages
import Pdf1 from "../components/pages/Pdf1.js";
import NoMatch from "../components/pages/Error404";

const AppRouter = () => {

    return (

        <Switch>

        <Route path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/skills"component={Skills} /> 
        <Route exact path="/experience" component={Experience} /> 
        <Route exact path="/education" component={Education} /> 
        <Route exact path="/portfolio" component={Portfolio} /> 
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path="/resume" component={Pdf1} /> 
        <Route component={NoMatch} />

        </Switch>

    )

}
export default AppRouter