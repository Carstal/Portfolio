import Head from "next/head";
import styles from "../../styles/Home.module.css";
import link from "../../styles/Link.module.css";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlo Staltari - Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.body}>
          <Header></Header>

          {/* Body Area */}
          <div className={styles.body}>
            <div className={link.LinkContainer}>
              <a href="#" className={link.LinkBtn}>
                <span className={link.LinkText}>Resume</span>
                <div className={link.LinkIcon}>
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
              </a>

              <a href="/" className={link.LinkBtn}>
                <span className={link.LinkText}>Portfolio</span>
                <div className={link.LinkIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-window-fullscreen" viewBox="0 0 16 16">
  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
  <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
</svg>
                </div>
              </a>

              <a href="mailto: carstaltari@gmail.com" className={link.LinkBtn}>
                <span className={link.LinkText}>Email</span>
                <div className={link.LinkIcon}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.15625 11.1094C0.471307 9.72888 1.2458 8.49629 2.35288 7.61346C3.45996 6.73064 4.83401 6.2499 6.25 6.25H43.75C45.166 6.2499 46.54 6.73064 47.6471 7.61346C48.7542 8.49629 49.5287 9.72888 49.8437 11.1094L25 26.2937L0.15625 11.1094ZM0 14.6781V36.8781L18.1344 25.7594L0 14.6781ZM21.1281 27.5937L0.596875 40.1781C1.10415 41.2478 1.90477 42.1513 2.90557 42.7837C3.90636 43.416 5.06617 43.7511 6.25 43.75H43.75C44.9336 43.7503 46.093 43.4144 47.0932 42.7815C48.0935 42.1486 48.8934 41.2447 49.4 40.175L28.8687 27.5906L25 29.9563L21.1281 27.5937ZM31.8656 25.7625L50 36.8781V14.6781L31.8656 25.7594V25.7625Z" fill="black"/>
</svg>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/carstal/" className={link.LinkBtn}>
                <span className={link.LinkText}>LinkedIn</span>
                <div className={link.LinkIcon}>
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

              <a href="https://github.com/Carstal/" className={link.LinkBtn}>
                <span className={link.LinkText}>GitHub</span>
                <div className={link.LinkIcon}>
                  {/* GitHub */}
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 0C11.1875 0 0 11.1875 0 25C0 36.0625 7.15625 45.4062 17.0938 48.7188C18.3438 48.9375 18.8125 48.1875 18.8125 47.5312C18.8125 46.9375 18.7812 44.9688 18.7812 42.875C12.5 44.0312 10.875 41.3438 10.375 39.9375C10.0938 39.2188 8.875 37 7.8125 36.4062C6.9375 35.9375 5.6875 34.7812 7.78125 34.75C9.75 34.7188 11.1562 36.5625 11.625 37.3125C13.875 41.0938 17.4688 40.0312 18.9062 39.375C19.125 37.75 19.7812 36.6562 20.5 36.0312C14.9375 35.4062 9.125 33.25 9.125 23.6875C9.125 20.9688 10.0938 18.7188 11.6875 16.9688C11.4375 16.3438 10.5625 13.7812 11.9375 10.3438C11.9375 10.3438 14.0312 9.6875 18.8125 12.9062C20.8125 12.3438 22.9375 12.0625 25.0625 12.0625C27.1875 12.0625 29.3125 12.3438 31.3125 12.9062C36.0938 9.65625 38.1875 10.3438 38.1875 10.3438C39.5625 13.7812 38.6875 16.3438 38.4375 16.9688C40.0312 18.7188 41 20.9375 41 23.6875C41 33.2812 35.1562 35.4062 29.5938 36.0312C30.5 36.8125 31.2812 38.3125 31.2812 40.6562C31.2812 44 31.25 46.6875 31.25 47.5312C31.25 48.1875 31.7188 48.9688 32.9688 48.7188C37.932 47.0437 42.2448 43.8542 45.3001 39.5992C48.3553 35.3443 49.9991 30.2382 50 25C50 11.1875 38.8125 0 25 0Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </a>

              <a href="https://www.instagram.com/carlostaltari/" className={link.LinkBtn}>
                <span className={link.LinkText}>Instagram</span>
                <div className={link.LinkIcon}>
                  {/* Instagram */}
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_9_39)">
                      <path
                        d="M25 0C18.2156 0 17.3625 0.03125 14.6969 0.15C12.0312 0.275 10.2156 0.69375 8.625 1.3125C6.95654 1.94006 5.44529 2.92446 4.19688 4.19688C2.92524 5.44593 1.94096 6.957 1.3125 8.625C0.69375 10.2125 0.271875 12.0312 0.15 14.6875C0.03125 17.3594 0 18.2094 0 25.0031C0 31.7906 0.03125 32.6406 0.15 35.3063C0.275 37.9688 0.69375 39.7844 1.3125 41.375C1.95312 43.0187 2.80625 44.4125 4.19688 45.8031C5.58438 47.1937 6.97813 48.05 8.62187 48.6875C10.2156 49.3063 12.0281 49.7281 14.6906 49.85C17.3594 49.9688 18.2094 50 25 50C31.7906 50 32.6375 49.9688 35.3063 49.85C37.9656 49.725 39.7875 49.3063 41.3781 48.6875C43.0455 48.0596 44.5557 47.0752 45.8031 45.8031C47.1937 44.4125 48.0469 43.0187 48.6875 41.375C49.3031 39.7844 49.725 37.9688 49.85 35.3063C49.9688 32.6406 50 31.7906 50 25C50 18.2094 49.9688 17.3594 49.85 14.6906C49.725 12.0313 49.3031 10.2125 48.6875 8.625C48.0591 6.95695 47.0748 5.44586 45.8031 4.19688C44.5551 2.92399 43.0437 1.93952 41.375 1.3125C39.7812 0.69375 37.9625 0.271875 35.3031 0.15C32.6344 0.03125 31.7875 0 24.9937 0H25.0031H25ZM22.7594 4.50625H25.0031C31.6781 4.50625 32.4688 4.52813 35.1031 4.65C37.5406 4.75938 38.8656 5.16875 39.7469 5.50938C40.9125 5.9625 41.7469 6.50625 42.6219 7.38125C43.4969 8.25625 44.0375 9.0875 44.4906 10.2563C44.8344 11.1344 45.2406 12.4594 45.35 14.8969C45.4719 17.5312 45.4969 18.3219 45.4969 24.9937C45.4969 31.6656 45.4719 32.4594 45.35 35.0938C45.2406 37.5312 44.8313 38.8531 44.4906 39.7344C44.0898 40.8199 43.4501 41.8014 42.6187 42.6063C41.7437 43.4813 40.9125 44.0219 39.7438 44.475C38.8688 44.8188 37.5438 45.225 35.1031 45.3375C32.4688 45.4563 31.6781 45.4844 25.0031 45.4844C18.3281 45.4844 17.5344 45.4563 14.9 45.3375C12.4625 45.225 11.1406 44.8188 10.2594 44.475C9.17343 44.0748 8.19102 43.4362 7.38437 42.6063C6.55235 41.8001 5.91163 40.8177 5.50938 39.7313C5.16875 38.8531 4.75938 37.5281 4.65 35.0906C4.53125 32.4562 4.50625 31.6656 4.50625 24.9875C4.50625 18.3125 4.53125 17.525 4.65 14.8906C4.7625 12.4531 5.16875 11.1281 5.5125 10.2469C5.96563 9.08125 6.50937 8.24687 7.38437 7.37187C8.25937 6.49687 9.09062 5.95625 10.2594 5.50313C11.1406 5.15938 12.4625 4.75313 14.9 4.64062C17.2063 4.53438 18.1 4.50313 22.7594 4.5V4.50625ZM38.3469 8.65625C37.9529 8.65625 37.5628 8.73385 37.1988 8.88461C36.8348 9.03538 36.5041 9.25635 36.2256 9.53493C35.947 9.81351 35.726 10.1442 35.5752 10.5082C35.4245 10.8722 35.3469 11.2623 35.3469 11.6562C35.3469 12.0502 35.4245 12.4403 35.5752 12.8043C35.726 13.1683 35.947 13.499 36.2256 13.7776C36.5041 14.0561 36.8348 14.2771 37.1988 14.4279C37.5628 14.5787 37.9529 14.6562 38.3469 14.6562C39.1425 14.6562 39.9056 14.3402 40.4682 13.7776C41.0308 13.215 41.3469 12.4519 41.3469 11.6562C41.3469 10.8606 41.0308 10.0975 40.4682 9.53493C39.9056 8.97232 39.1425 8.65625 38.3469 8.65625ZM25.0031 12.1625C23.3002 12.1359 21.609 12.4484 20.0281 13.0817C18.4471 13.715 17.0079 14.6565 15.7942 15.8513C14.5806 17.0462 13.6168 18.4705 12.9589 20.0414C12.301 21.6124 11.9622 23.2985 11.9622 25.0016C11.9622 26.7047 12.301 28.3908 12.9589 29.9617C13.6168 31.5326 14.5806 32.957 15.7942 34.1518C17.0079 35.3467 18.4471 36.2881 20.0281 36.9214C21.609 37.5547 23.3002 37.8672 25.0031 37.8406C28.3736 37.788 31.5882 36.4122 33.9531 34.0102C36.3179 31.6081 37.6434 28.3724 37.6434 25.0016C37.6434 21.6307 36.3179 18.395 33.9531 15.993C31.5882 13.5909 28.3736 12.2151 25.0031 12.1625ZM25.0031 16.6656C27.2135 16.6656 29.3334 17.5437 30.8964 19.1067C32.4594 20.6697 33.3375 22.7896 33.3375 25C33.3375 27.2104 32.4594 29.3303 30.8964 30.8933C29.3334 32.4563 27.2135 33.3344 25.0031 33.3344C22.7927 33.3344 20.6728 32.4563 19.1098 30.8933C17.5468 29.3303 16.6688 27.2104 16.6688 25C16.6688 22.7896 17.5468 20.6697 19.1098 19.1067C20.6728 17.5437 22.7927 16.6656 25.0031 16.6656Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9_39">
                        <rect width="50" height="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>

            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 0;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: start;
          width: 100%;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 5px;
        }
        li {
          display: block;
          height: 25px;
          padding: S5px;
        }
        li:hover {
          background-color: #000000;
        }
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          height: 100%;
          width: 100vw;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
