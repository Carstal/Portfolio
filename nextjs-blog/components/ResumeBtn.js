import React from "react";
import styles from "../styles/Home.module.css";

export default function ResumeBtn() {
  return (
    <div className={styles.resumeBtn}>
    <span className={styles.resumeBtnText}>Resume</span>
    <div className={styles.resumeIcon}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_9_26)">
          <path
            d="M29.0406 0H12.5C10.8424 0 9.25268 0.65848 8.08058 1.83058C6.90848 3.00269 6.25 4.5924 6.25 6.25V43.75C6.25 45.4076 6.90848 46.9973 8.08058 48.1694C9.25268 49.3415 10.8424 50 12.5 50H37.5C39.1576 50 40.7473 49.3415 41.9194 48.1694C43.0915 46.9973 43.75 45.4076 43.75 43.75V14.7094C43.7498 13.8806 43.4205 13.0859 42.8344 12.5L31.25 0.915625C30.6641 0.329533 29.8694 0.000176992 29.0406 0ZM29.6875 10.9375V4.6875L39.0625 14.0625H32.8125C31.9837 14.0625 31.1888 13.7333 30.6028 13.1472C30.0167 12.5612 29.6875 11.7663 29.6875 10.9375ZM14.0625 28.125C13.6481 28.125 13.2507 27.9604 12.9576 27.6674C12.6646 27.3743 12.5 26.9769 12.5 26.5625C12.5 26.1481 12.6646 25.7507 12.9576 25.4576C13.2507 25.1646 13.6481 25 14.0625 25H35.9375C36.3519 25 36.7493 25.1646 37.0424 25.4576C37.3354 25.7507 37.5 26.1481 37.5 26.5625C37.5 26.9769 37.3354 27.3743 37.0424 27.6674C36.7493 27.9604 36.3519 28.125 35.9375 28.125H14.0625ZM12.5 32.8125C12.5 32.3981 12.6646 32.0007 12.9576 31.7076C13.2507 31.4146 13.6481 31.25 14.0625 31.25H35.9375C36.3519 31.25 36.7493 31.4146 37.0424 31.7076C37.3354 32.0007 37.5 32.3981 37.5 32.8125C37.5 33.2269 37.3354 33.6243 37.0424 33.9174C36.7493 34.2104 36.3519 34.375 35.9375 34.375H14.0625C13.6481 34.375 13.2507 34.2104 12.9576 33.9174C12.6646 33.6243 12.5 33.2269 12.5 32.8125ZM14.0625 40.625C13.6481 40.625 13.2507 40.4604 12.9576 40.1674C12.6646 39.8743 12.5 39.4769 12.5 39.0625C12.5 38.6481 12.6646 38.2507 12.9576 37.9576C13.2507 37.6646 13.6481 37.5 14.0625 37.5H26.5625C26.9769 37.5 27.3743 37.6646 27.6674 37.9576C27.9604 38.2507 28.125 38.6481 28.125 39.0625C28.125 39.4769 27.9604 39.8743 27.6674 40.1674C27.3743 40.4604 26.9769 40.625 26.5625 40.625H14.0625Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_26">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  );
}