import "./app.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
// import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        Copyright 2021. Lee Soojin All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
