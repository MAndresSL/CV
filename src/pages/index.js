import React from "react";
import { Link } from "gatsby";

import "../components/Universal.css";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Services from "../components/Services";

const IndexPage = () => (
  <div>
    <Navbar />
    <Services />
    <Skills />
  </div>
)

export default IndexPage
