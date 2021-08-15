import React from "react";
import styles from "./skills.module.css";

const Skills = (props) => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills_container}>
        <h1 className={styles.skills_title}>SKILLS</h1>
        <div className={styles.circle_chart_container}>
          {/* html */}
          <div className={styles.chart_html}>
            <svg
              className={styles.circle_chart}
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
            >
              <circle
                className={styles.chart_outer}
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <circle
                className={styles.chart_inner_html}
                strokeLinecap="round"
                strokeDasharray="90,100"
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <g className={styles.chart_text}>
                <text
                  className={styles.chart_text_percentage}
                  x="16.5"
                  y="15.1"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="5"
                >
                  HTML
                </text>
                <text
                  className={styles.chart_text_skillname}
                  x="16.5"
                  y="20"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="4"
                >
                  90%
                </text>
              </g>
            </svg>
          </div>
          {/* css3 */}
          <div className={styles.chart_css}>
            <svg
              className={styles.circle_chart}
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
            >
              <circle
                className={styles.chart_outer}
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <circle
                className={styles.chart_inner_css}
                strokeLinecap="round"
                strokeDasharray="80,100"
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <g className={styles.chart_text}>
                <text
                  className={styles.chart_text_percentage}
                  x="16.5"
                  y="15.1"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="5"
                >
                  CSS3
                </text>
                <text
                  className={styles.chart_text_skillname}
                  x="16.5"
                  y="20"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="4"
                >
                  80%
                </text>
              </g>
            </svg>
          </div>

          {/* javascript */}
          <div className={styles.chart_javascript}>
            <svg
              className={styles.circle_chart}
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
            >
              <circle
                className={styles.chart_outer}
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <circle
                className={styles.chart_inner_javascript}
                strokeLinecap="round"
                strokeDasharray="90,100"
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <g className={styles.chart_text}>
                <text
                  className={styles.chart_text_percentage}
                  x="16.5"
                  y="15.1"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="5"
                >
                  JavaScript
                </text>
                <text
                  className={styles.chart_text_skillname}
                  x="16.5"
                  y="20"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="4"
                >
                  90%
                </text>
              </g>
            </svg>
          </div>

          {/* REACT */}
          <div className={styles.chart_react}>
            <svg
              className={styles.circle_chart}
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
            >
              <circle
                className={styles.chart_outer}
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <circle
                className={styles.chart_inner_react}
                strokeLinecap="round"
                strokeDasharray="90,100"
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <g className={styles.chart_text}>
                <text
                  className={styles.chart_text_percentage}
                  x="16.5"
                  y="15.1"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="5"
                >
                  React
                </text>
                <text
                  className={styles.chart_text_skillname}
                  x="16.5"
                  y="20"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="4"
                >
                  90%
                </text>
              </g>
            </svg>
          </div>

          {/* typescript */}
          <div className={styles.chart_typescript}>
            <svg
              className={styles.circle_chart}
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
            >
              <circle
                className={styles.chart_outer}
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <circle
                className={styles.chart_inner_typescript}
                strokeLinecap="round"
                strokeDasharray="40,100"
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <g className={styles.chart_text}>
                <text
                  className={styles.chart_text_percentage}
                  x="16.5"
                  y="15.1"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="5"
                >
                  TypeScript
                </text>
                <text
                  className={styles.chart_text_skillname}
                  x="16.5"
                  y="20"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="4"
                >
                  40%
                </text>
              </g>
            </svg>
          </div>
          {/* firebase */}
          <div className={styles.chart_firebase}>
            <svg
              className={styles.circle_chart}
              viewBox="0 0 33 33"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
            >
              <circle
                className={styles.chart_outer}
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <circle
                className={styles.chart_inner_firebase}
                strokeLinecap="round"
                strokeDasharray="40,100"
                cx="16.5"
                cy="16.5"
                r="15.5"
              />
              <g className={styles.chart_text}>
                <text
                  className={styles.chart_text_percentage}
                  x="16.5"
                  y="15.1"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="5"
                >
                  Firebase
                </text>
                <text
                  className={styles.chart_text_skillname}
                  x="16.5"
                  y="20"
                  alignmentBaseline="central"
                  textAnchor="middle"
                  fontSize="4"
                >
                  70%
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
