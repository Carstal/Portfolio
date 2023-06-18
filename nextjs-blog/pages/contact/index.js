import Head from "next/head";
import styles from "../../styles/Home.module.css";
import contact from "../../styles/Contact.module.css";
import HeaderAndNav from "../../components/HeaderAndNav";

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/project");
//   const projectData = await res.json();

//   // console.log(visits)
//   return { props: { projectData } };
// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlo Staltari - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.body}>
          <HeaderAndNav></HeaderAndNav>

          {/* Body Area */}
          <div className={styles.body}>

            <div className={contact.ContactBox}>
              <div className={contact.ContactHeader}>Email Me</div>
              <div className={contact.ContactContainer}>
                <div className={contact.ContactText}>carstaltari@gmail.com</div>
                <div className={contact.ContactIcon}>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.15625 11.1094C0.471307 9.72888 1.2458 8.49629 2.35288 7.61346C3.45996 6.73064 4.83401 6.2499 6.25 6.25H43.75C45.166 6.2499 46.54 6.73064 47.6471 7.61346C48.7542 8.49629 49.5287 9.72888 49.8437 11.1094L25 26.2937L0.15625 11.1094ZM0 14.6781V36.8781L18.1344 25.7594L0 14.6781ZM21.1281 27.5937L0.596875 40.1781C1.10415 41.2478 1.90477 42.1513 2.90557 42.7837C3.90636 43.416 5.06617 43.7511 6.25 43.75H43.75C44.9336 43.7503 46.093 43.4144 47.0932 42.7815C48.0935 42.1486 48.8934 41.2447 49.4 40.175L28.8687 27.5906L25 29.9563L21.1281 27.5937ZM31.8656 25.7625L50 36.8781V14.6781L31.8656 25.7594V25.7625Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
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
