import React from "react";
// core components
import Header from "../includes/Header";
import NavTop from "../includes/Nav";
import Footer from "../includes/Footer";
// sections for this page
import About from "./About.js";

const Home = () => {
  return (
    <>
      <div class="main-wrapper main-section">
        <Header />
        <NavTop />
        <About />
        <Footer />
      </div>
    </>
  );
};
export default Home;
