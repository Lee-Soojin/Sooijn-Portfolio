import "./app.css";
import React, { useState, useEffect } from "react";
import About from "./components/about/about";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { RiArrowUpCircleFill } from "@react-icons/all-files/ri/RiArrowUpCircleFill";
import { DiGithubFull } from "@react-icons/all-files/di/DiGithubFull";

function App() {
  const [visible, setVisible] = useState(false);
  const [footer, setFooter] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 0) {
      setVisible(true);
    }
    window.addEventListener("scroll", handleScroll);
  });

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="portfolio">
      <Header />
      <div className="blank">
        <p>포트폴리오 준비 중입니다...</p>
        <p>더 업그레이드된 포트폴리오로 돌아오겠습니다:)</p>
      </div>
      {/* <Home />
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
      <footer className={scroll > 2600 ? "footer" : "footer_invisible"}>
        <div className="footer__link">
          <a href="https://github.com/Lee-Soojin" target="_blank">
            <DiGithubFull />
          </a>
        </div>
        <div className="footer__copyright">
          Copyright 2021. Lee Soojin All Rights Reserved
        </div>
        <div className="footer__email">soojl1005@naver.com</div>
      </footer> */}
    </div>
  );
}

export default App;
