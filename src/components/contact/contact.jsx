import React from "react";
import styles from "./contact.module.css";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

const Contact = (props) => {
  return (
    <div className={styles.contact}>
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
      </div>
    </div>
  );
};

export default Contact;
