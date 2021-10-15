import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import { IoPhonePortraitOutline } from "@react-icons/all-files/io5/IoPhonePortraitOutline";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";

const Contact = (props) => {
  const [scroll, setScroll] = useState(0);
  const skillsRef = useRef();

  const handleScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={
        scroll > 2200 ? styles["contact"] : styles["contact_invisible"]
      }
      ref={skillsRef}
    >
      <div className={styles.contact_container}>
        <h1 className={styles.contact_title}>CONTACT</h1>
        <ul>
          <li className={styles.contact_phone}>
            <IoPhonePortraitOutline className={styles.contact_icon} />
            <p>010-8601-8226</p>
          </li>
          <li className={styles.contact_email}>
            <HiOutlineMail className={styles.contact_icon} />
            <p>soojl1005@naver.com</p>
          </li>
        </ul>
        <p className={styles.contact_paragraph}>
          연락 남겨주시면 3일 이내로 답장드리겠습니다 😊
        </p>

        <div className={styles.contact_button__resume}>
          <a
            href="https://tidal-colt-40a.notion.site/b876b2625e56453298e299dd8cde4a51"
            target="_blank"
          >
            더 궁금하신 점이 있으신가요?
            <div className={styles.resume__link}>
              <p>
                이력서 보러가기
                <BsArrowRightShort className={styles.resume__link_icon} />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
