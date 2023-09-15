import Head from "next/head";
import styles from "../../styles/Home.module.css";
import projects from "../../styles/Projects.module.css";
import ProjectCard from "../../components/ProjectCard";
import HeaderAndNav from "../../components/HeaderAndNav";
import { server } from '../../config';

export async function getServerSideProps() {
  // const rootUri = process.env.REACT_APP_SERVER_URL || 'http://localhost:3000'
  const res = await fetch(server+"/api/project");
  const dbProjects = await res.json();
   console.log(dbProjects);
  return { props: { dbProjects }};
}

export default function Home({dbProjects}) {
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
                All
              </div>
              <div className={projects.ProjectTab}>
                School
              </div>
              <div className={projects.ProjectTab}>
                Personal
              </div>
            </div>
            <div className={projects.ProjectContainer}>
              {/* Run .map on received JSON to Display all projects on DB */}
                {/* TODO: Get list of all projects */}
                {dbProjects.map((project) => (
                  <ProjectCard project={project}/>
                ))}
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
