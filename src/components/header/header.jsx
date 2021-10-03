import React, { useState } from "react";
import styles from "./header.module.css";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(!isClicked);
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
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
