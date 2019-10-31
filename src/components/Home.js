import React, { Component } from 'react';

import code from "../images/code.jpg";

import "./Home.css";

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <div className="homeInfo">
                    <h1 id="name">Mario Sánchez</h1>
                    <h2 id="developer">Developer</h2>
                </div>
                <img id="image" src={code}/>
            </div>
        );
    }
}

export default Home;
