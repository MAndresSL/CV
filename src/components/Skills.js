import React, { Component } from 'react';

import "./Skills.css";

export class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <h2 id="subTitle">My Skills</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 id="section">About</h4>
                            <p>2 years of experience in collboration with my team of developers. 
                                Having creativity to build such websites can have a positive impact 
                                in the final product along with solving problems that may occur during development.</p>
                            <br></br>
                            <p>Open to working with new or different technologies and adapt to them in the process, constant communication with my 
                                clients to ensure the best product possible</p>
                        </div>

                        <div className="col-md-6">
                            <h4 id="section">Basics</h4>
                            <h5 id="first" className="ts-progress-title">HTML</h5>
                            <p className="ts-progress-value" style={{left: "90%"}}>100%</p>
                            <div id="pg" className="progress-bar-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">JavaScript</h5>
                            <p className="ts-progress-value" style={{left: "75%"}}>85%</p>
                            <div id="pg" className="progress-bar-85" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">CSS</h5>
                            <p className="ts-progress-value" style={{left: "30%"}}>40%</p>
                            <div id="pg" className="progress-bar-40" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">Java</h5>
                            <p className="ts-progress-value" style={{left: "85%"}}>95%</p>
                            <div id="pg" className="progress-bar-95" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">C/C++</h5>
                            <p className="ts-progress-value" style={{left: "70%"}}>80%</p>
                            <div id="pg" className="progress-bar-80" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">C#</h5>
                            <p className="ts-progress-value" style={{left: "50%"}}>60%</p>
                            <div id="pg" className="progress-bar-60" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <br></br>
                            <h4 id="section">Framework</h4>
                            <h5 id="first" className="ts-progress-title">Bootstrap</h5>
                            <p className="ts-progress-value" style={{left: "80%"}}>90%</p>
                            <div id= "pg" className="progress-bar-90" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">React</h5>
                            <p className="ts-progress-value" style={{left: "65%"}}>75%</p>
                            <div id="pg" className="progress-bar-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">Firebase</h5>
                            <p className="ts-progress-value" style={{left: "65%"}}>75%</p>
                            <div id="pg" className="progress-bar-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">Meteor</h5>
                            <p className="ts-progress-value" style={{left: "10%"}}>20%</p>
                            <div id="pg" className="progress-bar-20" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                        </div>

                        <div className="col-md-6">
                            <br></br>
                            <h4 id="section">Database</h4>
                            <h5 id="first" className="ts-progress-title">SQL</h5>
                            <p className="ts-progress-value" style={{left: "65%"}}>75%</p>
                            <div id="pg" className="progress-bar-75" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                            <h5 className="ts-progress-title">Mongo</h5>
                            <p className="ts-progress-value" style={{left: "55%"}}>65%</p>
                            <div id="pg" className="progress-bar-65" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                ></div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default Skills;
