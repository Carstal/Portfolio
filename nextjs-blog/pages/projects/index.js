import Head from "next/head";
import styles from "../../styles/Home.module.css";
import projects from "../../styles/Projects.module.css";
import ProjectCard from "../../components/ProjectCard";
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
            <div className={projects.ProjectContainer}>
              {/* Run .map on received JSON to Display all projects on DB */}
                {/* TODO: Get list of all projects */}
                <div className={projects.ProjectCard}>
                  <div className={projects.ProjectCardImg}></div>
                  <div className={projects.ProjectCardDesc}>
                    <div className={projects.ProjectCardTitleContainer}>
                      <div className={projects.ProjectCardTitle}>Title</div>
                      <div className={projects.ProjectCardSubtitle}>Subtitle</div>
                    </div>
                    <div className={projects.ProjectCardTechContainer}>
                      <div className={projects.ProjectCardTech}>Next.js</div>
                      <div className={projects.ProjectCardTech}>Python</div>
                    </div>
                  </div>
                </div>
                {/* {projectData.map((e) => (
                  <ProjectCard project={e} />
                ))} */}
                <div className={projects.ProjectCard}>
                  <div className={projects.ProjectCardImg}></div>
                  <div className={projects.ProjectCardDesc}>
                    <div className={projects.ProjectCardTitleContainer}>
                      <div className={projects.ProjectCardTitle}>Title</div>
                      <div className={projects.ProjectCardSubtitle}>Subtitle</div>
                    </div>
                    <div className={projects.ProjectCardIconContainer}>
                      <div className={projects.ProjectCardIcon}></div>
                      <div className={projects.ProjectCardIcon}></div>
                      <div className={projects.ProjectCardIcon}></div>
                      <div className={projects.ProjectCardIcon}></div>
                    </div>
                  </div>
                </div>

                <div className={projects.ProjectCard}>
                  <div className={projects.ProjectCardImg}></div>
                  <div className={projects.ProjectCardDesc}>
                    <div className={projects.ProjectCardTitleContainer}>
                      <div className={projects.ProjectCardTitle}>Title</div>
                      <div className={projects.ProjectCardSubtitle}>Subtitle</div>
                    </div>
                    <div className={projects.ProjectCardTechContainer}>
                      <div className={projects.ProjectCardTech}>Next.js</div>
                      <div className={projects.ProjectCardTech}>Python</div>
                    </div>
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
