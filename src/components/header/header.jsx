import React, { useState } from "react";
import styles from "./header.module.css";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(!isClicked);
  };

  const handleScrollToHome = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    window.scrollTo(0, 1100);
  };

  const handleScrollToSkills = (event) => {
    event.preventDefault();
    window.scrollTo(0, 2000);
  };

  const handleScrollToProjects = (event) => {
    event.preventDefault();
    window.scrollTo(0, 2760);
  };

  const handleScrollToContact = (event) => {
    event.preventDefault();
    window.scrollTo(0, 3500);
  };

  return (
    <header className={styles.header}>
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
