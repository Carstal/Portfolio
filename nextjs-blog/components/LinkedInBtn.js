import React from "react";
import styles from "../styles/Home.module.css";

export default function LinkedInBtn() {
  return (
    <a href="https://www.linkedin.com/in/carstal/" className={styles.resumeBtn}>
    <span className={styles.resumeBtnText}>LinkedIn</span>
    <div className={styles.resumeIcon}>
    <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_9_34)">
                      <path
                        d="M0 3.58125C0 1.60313 1.64375 0 3.67187 0H46.3281C48.3563 0 50 1.60313 50 3.58125V46.4188C50 48.3969 48.3563 50 46.3281 50H3.67187C1.64375 50 0 48.3969 0 46.4188V3.58125ZM15.4469 41.8563V19.2781H7.94375V41.8563H15.4469ZM11.6969 16.1938C14.3125 16.1938 15.9406 14.4625 15.9406 12.2937C15.8937 10.0781 14.3156 8.39375 11.7469 8.39375C9.17813 8.39375 7.5 10.0813 7.5 12.2937C7.5 14.4625 9.12813 16.1938 11.6469 16.1938H11.6969ZM27.0344 41.8563V29.2469C27.0344 28.5719 27.0844 27.8969 27.2844 27.4156C27.825 26.0687 29.0594 24.6719 31.1344 24.6719C33.85 24.6719 34.9344 26.7406 34.9344 29.7781V41.8563H42.4375V28.9062C42.4375 21.9688 38.7375 18.7437 33.8 18.7437C29.8188 18.7437 28.0344 20.9312 27.0344 22.4719V22.55H26.9844C27.001 22.5239 27.0176 22.4979 27.0344 22.4719V19.2781H19.5344C19.6281 21.3969 19.5344 41.8563 19.5344 41.8563H27.0344Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9_34">
                        <rect width="50" height="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
    </div>
  </a>
  );
}
