import React from "react";
import styles from "./home.module.css";
import profileImg from "../../imgs/profile_img.jpg";

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
          <span></span>
          <p className={styles.site_banner__subdescription}>
            배움의 재미와 디버깅의 뿌듯함을 동력으로 매일매일 자라나는
            개발자입니다
            <br />
            새로운 공부에 재미를 느끼고 하나에 꽂히면 <br /> 끝까지 파고드는
            성격이 저의 강점입니다
          </p>
        </div>
        <figure className={styles.site_banner__img_container}>
          <img src={profileImg} alt="profile_img" width="320" height="453" />
        </figure>
      </div>
    </section>
  );
};

export default Home;
