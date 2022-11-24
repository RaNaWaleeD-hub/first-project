import React from "react";

// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Courses from "../components/Sections/Courses";
import Services from "../components/Sections/Services";

import Blog from "../components/Sections/Blog";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Courses />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
