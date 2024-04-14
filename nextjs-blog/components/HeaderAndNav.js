import React, { useRef } from "react";
import styles from '../styles/Home.module.css';
import Spacer from "../components/Spacer";

function HeaderAndNav () {
    const downChev = useRef(null);
    const upChev = useRef(null);
    const navList = useRef(null);
    
    const toggleDisplayNav = () => {
      const downChevVisible = downChev.current.className.baseVal.includes('visible');
      if(downChevVisible){
        downChev.current.className.baseVal.replace('visible','hidden');
        upChev.current.className.baseVal.replace('hidden','visible');
        downChev.current.className.animVal.replace('visible','hidden');
        upChev.current.className.animVal.replace('hidden','visible');
      }
      // if(downChevVisible){
      //   const jsUpChev = document.getElementsById('chev-up');
      //     jsUpChev.classList.remove('hidden');
      //     jsUpChev.classList.add('visible');
      //   const jsDownChev = document.getElementsById('chev-down');
      //     jsDownChev.classList.remove('visible');
      //     jsDownChev.classList.add('hidden');
      // }
      // else{
      //   const jsUpChev = document.getElementsById('chev-up');
      //     jsUpChev.classList.remove('visible');
      //     jsUpChev.classList.add('hidden');
      //   const jsDownChev = document.getElementsById('chev-down');
      //     jsDownChev.classList.remove('hidden');
      //     jsDownChev.classList.add('visible');
      // }
        // console.log(downChev.current.className.baseVal);
        // console.log(upChev.current.className.baseVal);
        // console.log(downChev.current.className.animVal);
        // console.log(upChev.current.className.animVal);
        // console.log(navList.current.className);
    };
    return(
        <div className={styles.headerAndNav}>
        <h1 className={styles.headerTitle}>CARLO</h1>
        <Spacer height={"15px"} />
        <div className={styles.MobileNav} onClick={toggleDisplayNav}>
            <div>Nav</div>
            <svg id='chev-down' ref={downChev} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-down visible" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
            <svg id='chev-up' ref={upChev} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-up hidden" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
        </div>
        <div className={styles.nav} ref={navList}>
          <ul className={styles.list}>
            <li className={styles.navItem}> 
          <a href="/" className={styles.navItem}>
            <label>HOME</label>
            <div className={styles.navIcon}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_100)">
                  <path
                    d="M20.3125 45.3125V34.3594C20.3125 33.5937 21.0938 32.8125 21.875 32.8125H28.125C28.9063 32.8125 29.6875 33.5937 29.6875 34.375V45.3125C29.6875 45.7269 29.8521 46.1243 30.1451 46.4173C30.4382 46.7104 30.8356 46.875 31.25 46.875H43.75C44.1644 46.875 44.5618 46.7104 44.8549 46.4173C45.1479 46.1243 45.3125 45.7269 45.3125 45.3125V23.4375C45.3129 23.2322 45.2728 23.0288 45.1945 22.839C45.1162 22.6491 45.0013 22.4766 44.8563 22.3312L40.625 18.1031V7.81249C40.625 7.39808 40.4604 7.00066 40.1674 6.70763C39.8743 6.41461 39.4769 6.24999 39.0625 6.24999H35.9375C35.5231 6.24999 35.1257 6.41461 34.8326 6.70763C34.5396 7.00066 34.375 7.39808 34.375 7.81249V11.8531L26.1063 3.58124C25.9611 3.43573 25.7887 3.32028 25.5989 3.24151C25.409 3.16274 25.2055 3.12219 25 3.12219C24.7945 3.12219 24.591 3.16274 24.4011 3.24151C24.2113 3.32028 24.0389 3.43573 23.8938 3.58124L5.14375 22.3312C4.99875 22.4766 4.88382 22.6491 4.80553 22.839C4.72724 23.0288 4.68714 23.2322 4.6875 23.4375V45.3125C4.6875 45.7269 4.85212 46.1243 5.14515 46.4173C5.43817 46.7104 5.8356 46.875 6.25 46.875H18.75C19.1644 46.875 19.5618 46.7104 19.8549 46.4173C20.1479 46.1243 20.3125 45.7269 20.3125 45.3125Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_100">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
          </li>
          <li className={styles.navItem}>
          <a href="/about" className={styles.navItem}>
            <label>ABOUT</label>
            <div className={styles.navIcon}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_112)">
                  <path
                    d="M9.375 43.75C9.375 43.75 6.25 43.75 6.25 40.625C6.25 37.5 9.375 28.125 25 28.125C40.625 28.125 43.75 37.5 43.75 40.625C43.75 43.75 40.625 43.75 40.625 43.75H9.375ZM25 25C27.4864 25 29.871 24.0123 31.6291 22.2541C33.3873 20.496 34.375 18.1114 34.375 15.625C34.375 13.1386 33.3873 10.754 31.6291 8.99587C29.871 7.23772 27.4864 6.25 25 6.25C22.5136 6.25 20.129 7.23772 18.3709 8.99587C16.6127 10.754 15.625 13.1386 15.625 15.625C15.625 18.1114 16.6127 20.496 18.3709 22.2541C20.129 24.0123 22.5136 25 25 25Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_112">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
          </li>
          <li className={styles.navItem}>
          <a href="/projects" className={styles.navItem}>
            <label>PROJECTS</label>
            <div className={styles.navIcon}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_116)">
                  <path
                    d="M1.6875 12.0938L1.5625 9.375C1.5625 7.7174 2.22098 6.12769 3.39308 4.95558C4.56518 3.78348 6.1549 3.125 7.8125 3.125H19.2875C20.945 3.12535 22.5344 3.78407 23.7062 4.95625L26.2937 7.54375C27.4656 8.71593 29.055 9.37465 30.7125 9.375H43.1562C44.0247 9.37491 44.8837 9.55583 45.6784 9.90622C46.4731 10.2566 47.186 10.7688 47.7717 11.4101C48.3574 12.0513 48.8031 12.8077 49.0802 13.6308C49.3573 14.4539 49.4598 15.3257 49.3812 16.1906L47.3906 38.0656C47.2495 39.6185 46.533 41.0625 45.3819 42.1142C44.2307 43.1659 42.728 43.7494 41.1687 43.75H8.83125C7.27199 43.7494 5.76928 43.1659 4.61811 42.1142C3.46695 41.0625 2.75049 39.6185 2.60937 38.0656L0.618749 16.1906C0.485581 14.7431 0.86373 13.2946 1.6875 12.0969V12.0938ZM6.84375 12.5C6.40964 12.5 5.98029 12.5904 5.58307 12.7655C5.18584 12.9406 4.82945 13.1965 4.53662 13.517C4.24379 13.8375 4.02094 14.2154 3.88228 14.6268C3.74362 15.0382 3.69218 15.4739 3.73125 15.9062L5.72187 37.7812C5.79204 38.5577 6.14989 39.2799 6.72518 39.806C7.30047 40.3322 8.05164 40.6243 8.83125 40.625H41.1687C41.9484 40.6243 42.6995 40.3322 43.2748 39.806C43.8501 39.2799 44.208 38.5577 44.2781 37.7812L46.2687 15.9062C46.3078 15.4739 46.2564 15.0382 46.1177 14.6268C45.9791 14.2154 45.7562 13.8375 45.4634 13.517C45.1705 13.1965 44.8142 12.9406 44.4169 12.7655C44.0197 12.5904 43.5904 12.5 43.1562 12.5H6.84375ZM21.5 7.16563C21.2095 6.87505 20.8646 6.64461 20.4849 6.4875C20.1053 6.33038 19.6984 6.24968 19.2875 6.25H7.8125C6.99388 6.24985 6.20789 6.57093 5.62352 7.1442C5.03915 7.71747 4.70305 8.49716 4.6875 9.31562L4.70625 9.75C5.375 9.50625 6.09375 9.375 6.84375 9.375H23.7062L21.5 7.16563Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_116">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
          </li>
          <li className={styles.navItem}>
          <a href="/contact" className={styles.navItem}>
            <label>CONTACT</label>
            <div className={styles.navIcon}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_108)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.89063 1.59685C6.43743 1.05087 7.09401 0.62734 7.81687 0.354314C8.53973 0.0812885 9.31237 -0.0349959 10.0836 0.0131673C10.8548 0.0613304 11.6069 0.272841 12.2902 0.633683C12.9735 0.994525 13.5723 1.49646 14.0469 2.10622L19.6563 9.31247C20.6844 10.6343 21.0469 12.3562 20.6406 13.9812L18.9313 20.825C18.8429 21.1794 18.8477 21.5507 18.9451 21.9028C19.0426 22.2549 19.2294 22.5758 19.4875 22.8343L27.1656 30.5125C27.4245 30.7711 27.7459 30.9582 28.0986 31.0557C28.4513 31.1532 28.8232 31.1577 29.1781 31.0687L36.0188 29.3593C36.8207 29.1588 37.6577 29.1433 38.4665 29.3138C39.2753 29.4843 40.0348 29.8365 40.6875 30.3437L47.8938 35.95C50.4844 37.9656 50.7219 41.7937 48.4031 44.1093L45.1719 47.3406C42.8594 49.6531 39.4031 50.6687 36.1813 49.5343C27.935 46.6329 20.4477 41.912 14.275 35.7218C8.08528 29.55 3.36441 22.0639 0.462507 13.8187C-0.668743 10.6 0.346882 7.1406 2.65938 4.8281L5.89063 1.59685Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_108">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
          </li>
          </ul>
        </div>
        <Spacer height={"10px"} />
      </div>
    );
}
export default function MyNav(){
    return <HeaderAndNav></HeaderAndNav>;
}