import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="navbar" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">HOME<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ts-scroll" href="#">ABOUT ME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ts-scroll" href="#services">SERVICES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ts-scroll" href="#skills">SKILLS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ts-scroll" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ts-scroll" href="#">Clients</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;