import React from "react";
import styles from "./about.module.css";
import aboutImg1 from "../../imgs/about_school.svg";
import aboutImg2 from "../../imgs/about_birth.svg";
import aboutImg3 from "../../imgs/about_awards_icon.svg";
import aboutImg4 from "../../imgs/about_certification.svg";

const About = (props) => {
  return (
    <div className={styles.about}>
      <div className={styles.about_container}>
        <h1 className={styles.about_title}>ABOUT</h1>
        <section className={styles.about_reason}>
          <h3 className={styles.about_reason_title}>
            왜 프론트엔드 개발자가 되고 싶은가?
          </h3>
          <p className={styles.about_reason_contents}>
            막연히 대학생활을 하면서 진로 생각은 여러번 했지만 정확히 내가 하고
            싶은일이 무엇인진 알지 못했습니다. 그렇게 구체적인 꿈없이 지내던 중
            졸업작품에서 소프트웨어를 담당한 저는 작품의 완성도를 높이기 위해
            어플을 제작하게 되었습니다. <br />그 과정에서 간편하게 어플을
            제작하는 사이트를 이용하게 되었습니다. <br />그 사이트는 UI/UX
            부분이나 기능구현에서 제한이 매우 많았기 때문에 만족스럽지
            못했습니다.
            <br />
            졸업을 앞두고 작품에 미련이 남아 UI/UX에 대해 더 알고 싶어
            찾아보았습니다.
            <br /> 그리고 프론트엔드라는 직업의 존재를 알게 되었습니다. 평소에
            프로그래밍에 흥미를 느끼고 있던 저에게 프론트엔드라는 직업은
            처음으로 꼭 해내고 싶은 꿈이자 목표가 되었습니다.
          </p>
        </section>
        <section className={styles.about_introduction}>
          <div className={styles.about_intro_school}>
            <img src={aboutImg1} alt="school" width="160" height="107" />
            <p>
              연성대학교 <br />
              정보통신과 졸업
            </p>
          </div>
          <div className={styles.about_intro_birth}>
            <img src={aboutImg2} alt="birth" width="160" height="107" />
            <p>1999.07.24</p>
          </div>
          <div className={styles.about_intro_awards}>
            <img src={aboutImg3} alt="awards" width="160" height="107" />
            <ul>
              <li>
                2018 AIR SPORTS 경진대회 보고서상 <p>산업통상자원부</p>
              </li>
              <li>
                2019 전국대학교 스마트 로봇 경진대회 장려상
                <p>대한전자공학회 / 로보웰코리아</p>
              </li>
            </ul>
          </div>
          <div className={styles.about_intro_certification}>
            <img src={aboutImg4} alt="certification" width="160" height="107" />
            <ul>
              <li>정보통신산업기사</li>
              <li>네트워크관리사 2급</li>
              <li>MOS 파워포인트, 엑셀</li>
              <li>TOEIC 800</li>
            </ul>
          </div>
          <div className={styles.about_intro_hobby}></div>
          <div className={styles.about_intro_subskills}></div>
        </section>
      </div>
    </div>
  );
};

export default About;
