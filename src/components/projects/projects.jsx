import React from "react";
import styles from "./projects.module.css";
import ProjectImg1 from "../../imgs/projects_tft_img.PNG";
import { SiFirebase } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Projects = (props) => {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_container}>
        <h1 className={styles.projects_title}>PROJECTS</h1>
        <div className={styles.project}>
          <div className={styles.project_img}>
            <img
              src={ProjectImg1}
              alt="project tft card maker"
              className={styles.project_img_1}
            />
            <a href="https://60ae0a6fe8f9b7b5c17b7631--tft-deck-maker.netlify.app/">
              바로가기
            </a>
          </div>

          <div className={styles.project_description}>
            <h3 className={styles.project_name}>롤토체스 덱 메이커</h3>
            <div className={styles.project_description_text}>
              <p>전락적 팀 전투(롤토체스) 게임 유저들을 위한 사이트입니다.</p>
              <p>기능</p>
              <ul>
                <li>firebase를 이용한 로그인 / 소셜 로그인 / 회원가입</li>
                <li>
                  firebase realtime database를 이용한 카드 저장 / 수정 / 삭제
                </li>
              </ul>
            </div>
            <p className={styles.project_skills_title}>사용 기술</p>
            <section className={styles.project_skill_stack}>
              <div>
                <SiReact />
                <p>React </p>
              </div>
              <div>
                <SiFirebase />
                <p>Firebase</p>
              </div>
              <div>
                <SiPostcss />
                <p>PostCSS</p>
              </div>
              <div>
                <SiHtml5 />
                <p>HTML5</p>
              </div>
              <div>
                <SiCss3 />
                <p>CSS3</p>
              </div>
              <div>
                <SiJavascript />
                <p>JavaScript</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
