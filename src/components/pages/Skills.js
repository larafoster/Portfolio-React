import React from "react";
import { Progress } from "reactstrap";

const Skills = () => {
  return (
    <>
      <div id="skill" className="skill-section bg-color section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>My Skills</h1>
             </div>
            </div>
            <div className="col-md-8">
              <div className="section-content">
                <div className="text-info">
                  <h4>Technical Skills</h4>
                  <p>
                    I am a proven problem-solver who is passionate about
                    developing apps with a focus on mobile-first design and
                    development. My strengths include creativity, teamwork, and
                    building projects from ideation to execution.
                  </p>
                  <p>These are some of the tools I utilize in development. Click on the <span className="small"> <i className="fas fa-caret-down fa-3x"></i> </span>for more information.</p>
                </div>
                <div className="progress-content">
                  <div className="rating-bar bar-left pr-3">
                    <div className="d-flex justify-content-between mt-4">
                      <strong>Express</strong>
                      <span className="pr-3">  <a data-toggle="collapse" href="#collapseExpress" role="button" aria-expanded="false" aria-controls="collapseExpress"><i className="fas fa-caret-down text-warning fa-2x"></i></a></span>
                       </div>
                        <div className="skill-progress">
                      <div className="progress">
                        <Progress value={100} />
                      </div>
                    </div>                                       
<div class="collapse" id="collapseExpress">
<div className="card mx-1 border-warning">
<div className="card-header">Example</div>
     <ul class="list-group list-group-flush">
    <li class="list-group-item">	Configure an Express.js app to handle GET and POST requests	</li>
    <li class="list-group-item">	Configure an Express.js app to serve static files	</li>
    <li class="list-group-item">	Identify how client-side requests relate to server-side responses	</li>
    <li class="list-group-item">	Parse optional and required parameters when creating server-side routes	</li>
    <li class="list-group-item">	Implement client-side POST requests to submit form data to a server	</li>
    <li class="list-group-item">	Explain and configure middleware to extend the functionality of Express.js	</li>
    </ul>
</div>
                 </div>     
                   
                   
                    <div className="d-flex justify-content-between mt-4">
                      <strong>React</strong>
                       <span className="pr-3">  <a data-toggle="collapse" href="#collapseReact" role="button" aria-expanded="false" aria-controls="collapseReact"><i className="fas fa-caret-down text-cyan fa-2x"></i></a></span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar1" value={100} />
                      </div>
                    </div>
                    <div class="collapse" id="collapseReact">
<div className="card mx-1 border-info">
<div className="card-header">Example</div>

     <ul class="list-group list-group-flush">
    <li class="list-group-item">	Explain and identify the pros and cons of React Single-Page Applications	</li>
    <li class="list-group-item">	Explain and use React props.	</li>
    <li class="list-group-item">	Explain and use React state.	</li>
    <li class="list-group-item">	Explain and use React hooks.	</li>
    <li class="list-group-item">	Use Jest to test React Components	</li>
    </ul>
 
</div>
</div>
                    <div className="d-flex justify-content-between mt-4">
                      <strong>Html 5 &amp; CSS 3</strong>
                       <span className="pr-3">  <a data-toggle="collapse" href="#collapseHtml" role="button" aria-expanded="false" aria-controls="collapseHtml"><i className="fas fa-caret-down text-blue fa-2x"></i></a></span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar2" value={100} />
                      </div>
                    </div>
                    <div class="collapse" id="collapseHtml">
<div className="card mx-1 border-primary">
<div className="card-header">Example</div>
     <ul class="list-group list-group-flush">
    <li class="list-group-item">	Build and style static webpages with semantic HTML and CSS	</li>
    <li class="list-group-item">	Implement best practices and standards when structuring HTML files using nested elements, indentation, comments, and line breaks	</li>
    <li class="list-group-item">	Implement CSS styling via class, id and element selectors using external stylesheets, in-line styles and embedded style tags	</li>
    <li class="list-group-item">	Explain the "cascading" in Cascading Style Sheets and implement the box model for HTML elements	</li>
    <li class="list-group-item">	Implement a flexbox layout for a responsive design	</li>
    <li class="list-group-item">	Explain and implement CSS custom properties (variables)	</li>
    <li class="list-group-item">	Explain and implement basic media queries	</li>
    <li class="list-group-item">	Explain and implement CSS selectors beyond single classes or elements	</li>
    </ul>
</div>
</div>
                  </div>

                  <div className="skill rating-bar bar-right">
                    <div className="d-flex justify-content-between mt-4">
                      <strong>Node</strong>
                      <span className="pr-3">  <a data-toggle="collapse" href="#collapseNode" role="button" aria-expanded="false" aria-controls="collapseNode"><i className="fas fa-caret-down text-orange fa-2x"></i></a></span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar3" value={100} />
                      </div>
                    </div>
                    <div class="collapse" id="collapseNode">
<div className="card mx-1 border-orange">
<div className="card-header">Example</div>
     <ul class="list-group list-group-flush">
        <li class="list-group-item">	Build interactive command-line applications that process user input.	</li>
    <li class="list-group-item">	Explain modularization and how it relates to npm and the standard library.	</li>
    <li class="list-group-item">	Initialize new Node.js projects with npm, and install and import dependencies.	</li>
    <li class="list-group-item">	Explain the importance and usefulness of ES6+ concepts such as let, const, and arrow functions.	</li>
    <li class="list-group-item">	Handle asynchronicity with callbacks	</li>
    </ul>
</div>
</div>        
                    <div className="d-flex justify-content-between mt-4">
                      <strong>Bootstrap</strong>
 <span className="pr-3">  <a data-toggle="collapse" href="#collapseBootstrap" role="button" aria-expanded="false" aria-controls="collapseBootstrap"><i className="fas fa-caret-down text-danger fa-2x"></i></a></span>                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar4" value={100} />
                      </div>
                    </div>
                         <div class="collapse" id="collapseBootstrap">
<div className="card mx-1 border-danger">
<div className="card-header">Example</div>
     <ul class="list-group list-group-flush">
        <li class="list-group-item">	Build interactive command-line applications that process user input.	</li>
    <li class="list-group-item">	Explain modularization and how it relates to npm and the standard library.	</li>
    <li class="list-group-item">	Initialize new Node.js projects with npm, and install and import dependencies.	</li>
    <li class="list-group-item">	Explain the importance and usefulness of ES6+ concepts such as let, const, and arrow functions.	</li>
    <li class="list-group-item">	Handle asynchronicity with callbacks	</li>
    </ul>
</div>
</div>                
                    <div className="d-flex justify-content-between mt-4">
                      <strong>Github</strong>
                      <span className="pr-3">90%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar5" value={100} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="language-skill">
                  <div className="text-info">
                    <h4 className="pt-5">Design Skills</h4>
                    <p>
                      I have extensive experience working with Adobe Creative
                      Tools.
                    </p>
                    <div className="row">
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/photoshop.png")
                              .default
                          }
                        />
                        <br /> Photoshop
                      </div>
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/illustrator.png")
                              .default
                          }
                        />
                        <br /> Illustrator
                      </div>
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/indesign.png")
                              .default
                          }
                        />
                        <br /> InDesign
                      </div>
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/acrobat-pro.png")
                              .default
                          }
                        />
                        <br /> Acrobat Pro
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Skills;
