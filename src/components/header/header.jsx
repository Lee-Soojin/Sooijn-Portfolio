import React, { useEffect, useState, useRef } from "react";
import styles from "./header.module.css";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setHeight(headerRef.current.clientHeight);
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
    window.scrollTo(0, 1850);
    setIsClicked(false);
  };

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    window.scrollTo(0, 2600);
    setIsClicked(false);
  };

  const handleScrollToContact = (event) => {
    event.preventDefault();
    window.scrollTo(0, 3500);
    setIsClicked(false);
  };

  return (
    <header
      className={
        scroll < height ? styles["header"] : styles["header_transparent"]
      }
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
