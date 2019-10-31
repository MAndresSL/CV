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
                            <h4 id="section">No se qué putas poner aquí</h4>
                            <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut
                                vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem
                                turpis quis leo. Nulla in feugiat elit.</p>
                            <br></br>
                            <p>Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis
                                in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia Curae</p>
                        </div>

                        <div className="col-md-6">
                            <h4 id="section">Basics</h4>
                            <h5 id="first" className="ts-progress-title">HTML</h5>
                            <p className="ts-progress-value" style={{left: "90%"}}>100%</p>
                            <div id="100" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "100%"}}></div>
                            <h5 className="ts-progress-title">JavaScript</h5>
                            <p className="ts-progress-value" style={{left: "75%"}}>85%</p>
                            <div id="85" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "85%"}}></div>
                            <h5 className="ts-progress-title">CSS</h5>
                            <p className="ts-progress-value" style={{left: "30%"}}>40%</p>
                            <div id="40" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "40%"}}></div>
                            <h5 className="ts-progress-title">Java</h5>
                            <p className="ts-progress-value" style={{left: "85%"}}>95%</p>
                            <div id="95" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "95%"}}></div>
                            <h5 className="ts-progress-title">C/C++</h5>
                            <p className="ts-progress-value" style={{left: "70%"}}>80%</p>
                            <div id="80" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "80%"}}></div>
                            <h5 className="ts-progress-title">C#</h5>
                            <p className="ts-progress-value" style={{left: "50%"}}>60%</p>
                            <div id="60" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <br></br>
                            <h4 id="section">Framework</h4>
                            <h5 id="first" className="ts-progress-title">Bootstrap</h5>
                            <p className="ts-progress-value" style={{left: "80%"}}>90%</p>
                            <div id= "90" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "90%"}}></div>
                            <h5 className="ts-progress-title">React</h5>
                            <p className="ts-progress-value" style={{left: "65%"}}>75%</p>
                            <div id="75" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                            <h5 className="ts-progress-title">Firebase</h5>
                            <p className="ts-progress-value" style={{left: "65%"}}>75%</p>
                            <div id="75" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                            <h5 className="ts-progress-title">Meteor</h5>
                            <p className="ts-progress-value" style={{left: "10%"}}>20%</p>
                            <div id="20" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "20%"}}></div>
                        </div>

                        <div className="col-md-6">
                            <br></br>
                            <h4 id="section">Database</h4>
                            <h5 id="first" className="ts-progress-title">SQL</h5>
                            <p className="ts-progress-value" style={{left: "65%"}}>75%</p>
                            <div id="75" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                            <h5 className="ts-progress-title">Mongo</h5>
                            <p className="ts-progress-value" style={{left: "55%"}}>65%</p>
                            <div id="65" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "65%"}}></div>
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
