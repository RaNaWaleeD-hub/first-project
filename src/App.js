import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

// Sections
// import TopNavbar from "./components/Nav/TopNavbar";
// import Header from "./components/Sections/Header";
// import Services from "./components/Sections/Services";
// import Projects from "./components/Sections/Projects";
// import Blog from "./components/Sections/Blog";
// import Pricing from "./components/Sections/Pricing";
// import Contact from "./components/Sections/Contact";
// import Footer from "./components/Sections/Footer";
import Wordpress from "./components/Sections/courses-info/Wordpress";
import Appdev from "./components/Sections/courses-info/App-dev";
import Lancing from "./components/Sections/courses-info/Free-lancing";
import Front from "./components/Sections/courses-info/front-end-dev";
import RJS from "./components/Sections/courses-info/React";
import Seo from "./components/Sections/courses-info/Seo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./screens/Landing";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* <Landing /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/wordpress" element={<Wordpress />}></Route>
          <Route exact path="/appdev" element={<Appdev />}></Route>
          <Route exact path="/lancing" element={<Lancing />}></Route>
          <Route exact path="/front" element={<Front />}></Route>
          <Route exact path="/reactjs" element={<RJS />}></Route>
          <Route exact path="/seo" element={<Seo />}></Route>
        </Routes>
      </Router>
    </>
  );
}
