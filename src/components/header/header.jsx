import React, { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import { BiMenuAltLeft } from "@react-icons/all-files/bi/BiMenuAltLeft";

const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setHeight(headerRef.current.clientHeight);
    setWidth(headerRef.current.clientWidth);
    console.log("width:", width);
  });

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(!isClicked);
  };

  const handleScrollToHome = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setIsClicked(false);
  };

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    window.scrollTo(0, 900);
    setIsClicked(false);
  };

  const handleScrollToSkills = (event) => {
    event.preventDefault();
    window.scrollTo(0, 1600);
    if (width <= 540) {
      window.scrollTo(0, 2230);
    }
    setIsClicked(false);
  };

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    window.scrollTo(0, 2350);
    if (width <= 780) {
      window.scrollTo(0, 2900);
    } else if (width <= 540) {
      window.scrollTo(0, 3900);
    }
    setIsClicked(false);
  };

  const handleScrollToContact = (event) => {
    event.preventDefault();
    window.scrollTo(0, 4500);
    if (width <= 780) {
      window.scrollTo(0, 4800);
    } else if (width <= 540) {
      window.scrollTo(0, 5200);
    }
    setIsClicked(false);
  };

  return (
    <header
      className={scroll < height ? styles["header"] : styles["header_white"]}
      ref={headerRef}
    >
      <button className={styles.header_toggle_button} onClick={handleClick}>
        <BiMenuAltLeft alt="menu toggle icon" />
      </button>
      <nav
        className={
          isClicked ? styles["header_navbar__active"] : styles["header_navbar"]
        }
      >
        <ul className={styles.header_navbar_menu}>
          <li>
            <a href="#" onClick={handleScrollToHome}>
              HOME
            </a>
          </li>
          <li>
            <a href="#" onClick={handleScrollToAbout}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" onClick={handleScrollToSkills}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#" onClick={handleScrollToProjects}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#" onClick={handleScrollToContact}>
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
