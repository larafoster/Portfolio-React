import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import NavMobile from './NavMobile';
import {
    Container,
    Navbar,
    Collapse,
} from 'reactstrap';

const NavTop = () => {
    return (
        <>
            <Container>
                <div id="navigation" className="menu-two d-none d-lg-block">
                    <Navbar className="navbar-expand-lg ">
                        <div className="navbar-header">
                            <div className="navbar-brand logo">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    width="285"
                                    src={require("../../assets/images/logo.png").default}
                                />
                            </div>
                        </div> 
                        <Collapse className="navbar-collapse">
                       
                            <nav id="mainmenu">
                                <ul className="nav navbar-nav">
                                    <li><NavHashLink duration={500} exact to="/#top">Home</NavHashLink></li>

                                    <li>
                                        <NavHashLink duration={500} exact activeClassName="current" to="about#navigation">About Me</NavHashLink></li><li>
                                        <NavHashLink duration={500} exact activeClassName="current" to="skills#navigation">Skills</NavHashLink></li><li>
                                        <NavHashLink duration={500} exact activeClassName="current" to="experience#navigation">Experience</NavHashLink></li><li>
                                        <NavHashLink duration={500} exact activeClassName="current" to="education#navigation">Education</NavHashLink></li><li>
                                        <NavHashLink duration={500} exact activeClassName="current" to="portfolio#navigation">Portfolio</NavHashLink></li>
                                        <li>

                                        <NavHashLink duration={500} exact activeClassName="current" to="contact#navigation">Contact</NavHashLink></li>
                                </ul>

                            </nav>
                        </Collapse>

                    </Navbar>
                </div>
            </Container> 
                    <div className="d-lg-none">
 <NavMobile  />
                        </div>               

             </>
    );
}

export default NavTop;

