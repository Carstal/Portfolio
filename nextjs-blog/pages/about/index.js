import Head from "next/head";
import styles from "../../styles/Home.module.css";
import projects from "../../styles/Projects.module.css";
import about from "../../styles/About.module.css";
import HeaderAndNav from "../../components/HeaderAndNav";
import ResumeBtn from "../../components/ResumeBtn";
import LinkedInBtn from "../../components/LinkedInBtn";

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
            <div className={projects.ProjectTabContainer}>
              <div className={projects.ProjectTab}>
                History
              </div>
              <div className={projects.ProjectTab}>
                Hobbies
              </div>
              <div className={projects.ProjectTab}>
                ...
              </div>
            </div>
            <div className={projects.ProjectContainer}>
                <div className={about.InfoRow}>
                    <div className={about.BlurbContainer}>

                    </div>
                    <div className={about.ResumeContainer}>
                        <ResumeBtn/>
                        <LinkedInBtn/>
                    </div>
                </div>
                <div className={about.InfoRow}>
                    <div className={about.LeftSide}>
                        <div className={about.Work}>
                            <div className={about.WorkHeader}>Work Experience</div>
                            <div className={about.WorkContainer}>
                                <div className={about.WorkInfo}>
                                    <div className={about.CompanyAndDate}>
                                        <div className={about.Company}>NexOne</div>
                                        <div className={about.Date}>May 2023 - Present</div>
                                    </div>
                                    <div className={about.Role}>Jr Software Developer</div>
                                </div>
                                <div className={about.WorkInfo}>
                                    <div className={about.CompanyAndDate}>
                                        <div className={about.Company}>NexOne</div>
                                        <div className={about.Date}>March 2023 - May 2023</div>
                                    </div>
                                    <div className={about.Role}>Jr Software Developer Intern</div>
                                </div>
                                <div className={about.WorkInfo}>
                                    <div className={about.CompanyAndDate}>
                                        <div className={about.Company}>Precise Parklink</div>
                                        <div className={about.Date}>2019 - 2023</div>
                                    </div>
                                    <div className={about.Role}>Terminal Programmer</div>
                                </div>
                            </div>
                        </div>
                        <div className={about.Work}>
                            <div className={about.WorkHeader}>Education</div>
                            <div className={about.WorkContainer}>
                                <div className={about.WorkInfo}>
                                    <div className={about.CompanyAndDate}>
                                        <div className={about.Company}>Champlain College</div>
                                        <div className={about.Date}>2023</div>
                                    </div>
                                    <div className={about.Role}>DEC in Computer Science</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={about.RightSide}>

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
          align-items: center;
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
