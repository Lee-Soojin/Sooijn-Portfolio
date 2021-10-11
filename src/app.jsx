import "./app.css";
import React, { useState } from "react";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
// import "aos/dist/aos.css";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { RiArrowUpCircleFill } from "@react-icons/all-files/ri/RiArrowUpCircleFill";
import { DiGithubFull } from "@react-icons/all-files/di/DiGithubFull";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [visible, setVisible] = useState(false);
  const [footer, setFooter] = useState(false);

  useEffect(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
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
        <RiArrowUpCircleFill />
      </button>
      <footer className="footer">
        <div className="footer__link">
          <a href="https://github.com/Lee-Soojin" target="_blank">
            <DiGithubFull />
          </a>
        </div>
        <div className="footer__copyright">
          Copyright 2021. Lee Soojin All Rights Reserved
        </div>
        <div className="footer__email">soojl1005@naver.com</div>
      </footer>
    </div>
  );
}

export default App;
