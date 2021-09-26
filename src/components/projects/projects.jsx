import React from "react";
import styles from "./projects.module.css";
import ProjectImg1 from "../../imgs/projects_tft_img.PNG";
import ProjectImg2 from "../../imgs/projects_food_diary_img.png";
import { SiFirebase } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGithub } from "react-icons/si";

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
            <a
              className={styles.project_link}
              href="https://61403114f841584ba1bc3859--tft-deck-maker.netlify.app/"
              target="_blank"
            >
              바로가기
            </a>
            <a
              className={styles.project_github}
              href="https://github.com/Lee-Soojin/TFT_deck_maker"
              target="_blank"
            >
              <SiGithub /> GitHub
            </a>
          </div>

          <div className={styles.project_description}>
            <h3 className={styles.project_name}>롤토체스 덱 메이커</h3>
            <div className={styles.project_description_text}>
              <p>전락적 팀 전투(롤토체스) 게임 유저들을 위한 사이트입니다.</p>
              <p>기능</p>
              <ul>
                <li>React와 PostCss로 프론트엔드 작업</li>
                <li>Firebase를 이용한 로그인 / 소셜 로그인 / 회원가입</li>
                <li>
                  Firebase realtime database를 이용한 카드 저장 / 수정 / 삭제
                </li>
                <li>Netlify로 사이트 배포</li>
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
        {/* food diary */}
        <div className={styles.project}>
          <div className={styles.project_img}>
            <img
              src={ProjectImg2}
              alt="project food diary"
              className={styles.project_img_2}
            />
            <a
              className={styles.project_link}
              href="https://614c1d321fffb755093e35c2--food-diary.netlify.app/"
              target="_blank"
            >
              바로가기
            </a>
            <a
              className={styles.project_github}
              href="https://github.com/Lee-Soojin/Food_diary"
              target="_blank"
            >
              <SiGithub /> GitHub
            </a>
          </div>

          <div className={styles.project_description}>
            <h3 className={styles.project_name}>푸드 다이어리</h3>
            <div className={styles.project_description_text}>
              <p>음식을 주제로 일기를 쓰는 공간, 푸드 다이어리입니다. </p>
              <p>기능</p>
              <ul>
                <li>React와 PostCSS로 프론트엔드 작업</li>
                <li>Firebase를 이용한 로그인 / 소셜 로그인 / 회원가입</li>
                <li>
                  Firebase realtime database, Cloudinary 를 이용한 일기 저장 및
                  삭제
                </li>
                <li>
                  Naver 장소 검색 API 를 이용한 음식점 검색 & 위치 추가 기능{" "}
                </li>
                <li>
                  CKEditor5를 이용한 다양한 폰트, 색상, 사진 추가 등 자유로운 글
                  작성 기능
                </li>
                <li>Netlify로 사이트 배포</li>
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
              <div>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.skill_naver_icon}
                >
                  <title>Naver</title>
                  <path d="M1.6 0S0 0 0 1.6v20.8S0 24 1.6 24h20.8s1.6 0 1.6-1.6V1.6S24 0 22.4 0zm3.415 5.6h4.78l4.425 6.458V5.6h4.765v12.8h-4.78L9.78 11.943V18.4H5.015Z" />
                </svg>
                <p>Naver</p>
              </div>
              <div>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.skill_ckeditor_icon}
                >
                  <title>CKEditor 4</title>
                  <path d="M16.1237 3.7468a4.5092 4.5092 0 0 0-.469 2.009c0 2.5006 2.0271 4.5278 4.5278 4.5278a4.447 4.447 0 0 0 .0967-.001v6.3413a2.1307 2.1307 0 0 1-1.0654 1.8453l-8.0089 4.6239a2.1307 2.1307 0 0 1-2.1307 0l-8.0088-4.624A2.1307 2.1307 0 0 1 0 16.624V7.3761c0-.7613.4061-1.4647 1.0654-1.8453L9.0742.907a2.1307 2.1307 0 0 1 2.1307 0zM5.733 7.9753a.5327.5327 0 0 0-.5327.5327v.2542c0 .2942.2385.5327.5327.5327h8.9963a.5327.5327 0 0 0 .5327-.5327V8.508a.5327.5327 0 0 0-.5327-.5327zm0 3.281a.5327.5327 0 0 0-.5327.5326v.2542c0 .2942.2385.5327.5327.5327h6.5221a.5327.5327 0 0 0 .5327-.5327v-.2542a.5327.5327 0 0 0-.5327-.5327zm0 3.2809a.5327.5327 0 0 0-.5327.5327v.2542c0 .2942.2385.5326.5327.5326h8.9963a.5327.5327 0 0 0 .5327-.5326v-.2542a.5327.5327 0 0 0-.5327-.5327zm14.5383-5.1414c-2.0593 0-3.7287-1.6694-3.7287-3.7288 0-2.0593 1.6694-3.7287 3.7287-3.7287S24 3.6077 24 5.667c0 2.0594-1.6694 3.7288-3.7288 3.7288zm.6347-2.7825h.393v-.5904h-.397V4.139h-.8144l-1.1668 1.8623v.612H20.27v.5991h.636zm-.632-1.7277v1.1373h-.6928l.6807-1.1373Z" />
                </svg>
                <p>CKEditor5</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
