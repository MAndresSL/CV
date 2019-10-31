import React from "react";
//import { Link } from "gatsby";

import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Home from "../components/Home";
import SEO from "../components/seo";
import "../components/Universal.css";

const IndexPage = () => (
  <div>
    <SEO />
    <Navbar />
    <Home />
    <Services />
    <Skills />
  </div>
)

export default IndexPage
