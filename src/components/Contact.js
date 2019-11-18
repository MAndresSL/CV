import React, { Component } from "react"
import "./Contact.css"

import facebook from "../icons/facebook.svg";
import twitter from "../icons/twitter.svg";
import linkedin from "../icons/linkedin.svg";

export class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
    console.log(event.target.value)
  }

  submit() {}

  render() {
    return (
      <div id="contact">
        <h1 id="subTitle-1">Contact me</h1>
        <h1 id="subTitle-2">Get in touch</h1>
        <div id="contactContainer" className="container">
          <div className="row">
            <div className="col">
              <img id="icons" src={linkedin} href="https://www.linkedin.com/in/mario-s%C3%A1nchez-ba3974191/"/>
              <br></br>
              <img id="icons" src={facebook} href=""/>
              <br></br>
              <img id="icons" src={twitter} href=""/>
              
            </div>
            <div className="col">
              <input
                onChange={this.handleChange("name")}
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="col">
              <input
                onChange={this.handleChange("email")}
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <textarea
                onChange={this.handleChange("message")}
                className="form-control"
                aria-label="With textarea"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <button id="submit" type="button" className="btn btn-dark">
            send
          </button>
        </div>
        <br />
      </div>
    )
  }
}

export default Contact
