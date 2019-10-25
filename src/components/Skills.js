import React, { Component } from 'react';

import "./Skills.css";

export class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <h2 id="subTitle">My Skills</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 id="section">No se qué putas poner aquí</h4>
                            <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut
                                vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem
                                turpis quis leo. Nulla in feugiat elit.</p>
                            <br></br>
                            <p>Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis
                                in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia Curae</p>
                        </div>

                        <div class="col-md-6">
                            <h4 id="section">Basics</h4>
                            <h5 id="first" class="ts-progress-title">HTML</h5>
                            <p class="ts-progress-value" style={{left: "100%"}}>100%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "100%"}}></div>
                            <h5 class="ts-progress-title">JavaScript</h5>
                            <p class="ts-progress-value" style={{left: "85%"}}>85%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "85%"}}></div>
                            <h5 class="ts-progress-title">CSS</h5>
                            <p class="ts-progress-value" style={{left: "40%"}}>40%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "40%"}}></div>
                            <h5 class="ts-progress-title">Java</h5>
                            <p class="ts-progress-value" style={{left: "95%"}}>95%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "95%"}}></div>
                            <h5 class="ts-progress-title">C/C++</h5>
                            <p class="ts-progress-value" style={{left: "80%"}}>80%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "80%"}}></div>
                            <h5 class="ts-progress-title">C#</h5>
                            <p class="ts-progress-value" style={{left: "60%"}}>60%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "60%"}}></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <br></br>
                            <h4 id="section">Framework</h4>
                            <h5 id="first" class="ts-progress-title">Bootstrap</h5>
                            <p class="ts-progress-value" style={{left: "90%"}}>90%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "90%"}}></div>
                            <h5 class="ts-progress-title">React</h5>
                            <p class="ts-progress-value" style={{left: "75%"}}>75%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                            <h5 class="ts-progress-title">Firebase</h5>
                            <p class="ts-progress-value" style={{left: "75%"}}>75%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                            <h5 class="ts-progress-title">Meteor</h5>
                            <p class="ts-progress-value" style={{left: "20%"}}>20%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "20%"}}></div>
                        </div>

                        <div class="col-md-6">
                            <br></br>
                            <h4 id="section">Database</h4>
                            <h5 id="first" class="ts-progress-title">SQL</h5>
                            <p class="ts-progress-value" style={{left: "75%"}}>75%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "75%"}}></div>
                            <h5 class="ts-progress-title">Mongo</h5>
                            <p class="ts-progress-value" style={{left: "65%"}}>65%</p>
                            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                style={{width: "65%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
