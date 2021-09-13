import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                                    <li><NavLink duration={500} exact to="/#top">Home</NavLink></li>

                                    <li>
                                        <HashLink duration={500} exact activeClassName="current" to="/#me">About Me</HashLink></li><li>
                                        <NavLink duration={500} exact activeClassName="current" to="./skills">Skills</NavLink></li><li>
                                        <NavLink duration={500} exact activeClassName="current" to="./experience">Experience</NavLink></li><li>
                                        <NavLink duration={500} exact activeClassName="current" to="./education">Education</NavLink></li><li>
                                        <NavLink duration={500} exact activeClassName="current" to="./portfolio">Portfolio</NavLink></li><li>
                                        <NavLink duration={500} exact activeClassName="current" to="./contact">Contact</NavLink></li>
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

