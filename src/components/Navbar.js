import React, { Component } from "react"
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
        >
          <a className="navbar-brand" href="#" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  HOME<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ts-scroll" href="#">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ts-scroll" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ts-scroll" href="#technolgies">
                  TECHNOLOGIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ts-scroll" href="#skills">
                  SKILLS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link ts-scroll" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ts-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
