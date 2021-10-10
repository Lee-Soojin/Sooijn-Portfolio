import "./app.css";
import React, { useState } from "react";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
// import "aos/dist/aos.css";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { FaArrowCircleUp } from "@react-icons/all-files/fa/FaArrowCircleUp";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setVisible(true);
    }
  });

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="portfolio">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <button
        className={visible ? "button_scrollUp" : "button_scrollUp_invisible"}
        onClick={handleClick}
      >
        <FaArrowCircleUp />
      </button>
      <footer className="footer">
        Copyright 2021. Lee Soojin All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
