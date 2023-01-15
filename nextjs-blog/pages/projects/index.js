import Head from 'next/head'
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlo Staltari - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navigation Area */}
        <div className={styles.nav}>
          <div>
            <h4>
              Carlo Staltari
              </h4>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        {/* Body Area */}
        <div className={styles.body}>
          <div id="name">
            <h1 className={styles.title}>
              Projects
            </h1>
            <h3 className={styles.subtitle}>
              Here are some of my favourites
            </h3>
          </div>
          <div className='projectsView'>
          {/* TODO: Get list of all projects */}
          {/* TODO: Align image and info horizontally */}
            <div className='projectCard'>
                {/* TODO: Display Image */}
                <div className='projectImage'><div className='image'>Image</div></div>
                {/* TODO: Display Info */}
                <div className='projectInfo'>
                    {/* TODO: Align title and desc vertically */}
                    {/* TODO: Justify title and desc left */}
                    <div className='projectTitle'>Project Name</div>
                    <div className='projectDesc'>Description</div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/Carstal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created & Maintained by Carlo Staltari
        </a>
      </footer>

      <style jsx>{`
        .projectsView {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin: auto;
        }
        .projectCard {
            display: flex;
            flex-direction: row;
            width: 60%;
            height: 200px;
            border: 2px solid #555555;
            border-radius: 30px;
        }
        .projectInfo{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            width: 70%;
            height: 90%;
        }
        .projectImage {
            margin-top: 10px;
            display: flex;
            height: 90%;
            width: 30%;
            align-content: center;
            justify-content: center;
        }
        .image {
            display: flex;
            width:80%;
            height:100px;
            background-color: black;
        }
        .projectTitle {
            height: 20%;
            font-weight: bold;
        }
        .projectDesc {
            height: 80%;
        }
        main {
          padding: 5rem 0;
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
        li:hover{
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
  )
}