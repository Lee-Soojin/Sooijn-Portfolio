import React from "react";
import styles from "./home.module.css";
import profileImg from "../../imgs/profile_example.jpg";

const Home = (props) => {
  return (
    <section className={styles.site_banner}>
      <div className={styles.site_banner_container}>
        <div className={styles.site_banner__contents}>
          <h1 className={styles.site_banner__title}>Hi!</h1>
          <span>
            <p className={styles.site_banner__description}>
              프론트엔드 개발자 <br></br>
              이수진입니다
            </p>
          </span>

          <p className={styles.site_banner__subdescription}>
            배움의 재미와 성장의 뿌듯함을 동력으로 매일매일 자라나는
            개발자입니다
            <br></br>
          </p>
        </div>
        <figure className={styles.site_banner__img_container}>
          <img src={profileImg} alt="profile_img" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
