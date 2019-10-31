import React, { Component } from 'react';

import WebDesigner from "../icons/Web Designer.svg";
import WebDeveloper from "../icons/Web Development.svg";
import AppDeveloper from "../icons/App Development.svg";
import AppDesigner from "../icons/App Designer.svg";

import "./Services.css";

class Services extends Component {
    render() {
        return (
            <div id="services">
                <h2 id="subTitle">Services</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img className="icons" src={WebDesigner}></img>
                            <h1 className="service-title">Web Designer</h1>
                            <p className="service-description">
                                I use protyping tools like Adobe XD and Figma to bring you the most beautiful and exiting designs for web sites.
                            </p>
                            <div className="hoverServices"></div>
                        </div>
                        <div className="col-sm">
                            <img className="icons" src={AppDesigner}></img>
                            <h1 className="service-title">App Designer</h1>
                            <p className="service-description">
                                Carefully analysing the structure and UI of the app before coding is an essential part to bring a pleasant and enjoyable User Experience.
                            </p>
                            <div className="hoverServices"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <img className="icons" src={WebDeveloper}></img>
                            <h1 className="service-title">Web Developer</h1>
                            <p className="service-description">
                                Using different JavaScript frameworks like React allows me to optimize development time and ensure good functionality across every single section of the site.
                            </p>
                            <div className="hoverServices"></div>
                        </div>
                        <div className="col-sm">
                            <img className="icons" src={AppDeveloper}></img>
                            <h1 className="service-title">Native App Developer</h1>
                            <p className="service-description">
                                Native mobile and desktop development are necessary to get the best performance you system can give.
                                Using tools and languages like C# for Windows development, React Native, Ionic and Electron; opens lots of possibilities for coding the best performance apps while mantaining an amazing UI and UX.  
                            </p>
                            <div className="hoverServices"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;