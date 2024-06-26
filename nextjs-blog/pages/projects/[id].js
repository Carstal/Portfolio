import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import { useRouter } from "next/router";
import HeaderAndNav from "../../components/HeaderAndNav";
import { server } from '../../config';

export async function getServerSideProps(context) {
    const url = server+"/api/project/"+context.params.id;
    //console.log(url);
    const res = await fetch(url);
    const project = await res.json();

    //console.log(project)
    return { props: { project }};
}

export default function Home({project}) {
    const router = useRouter();
    return (
    <div className={styles.container}>
    <Head>
        <title>Project Name - Carlo Staltari</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <main>
        <div className={styles.body}>
          <HeaderAndNav></HeaderAndNav>
        {/* Body Area */}
        <div className={styles.body}>
            <div id="name">
            <h1 className={styles.title}>
                {project.title}
            </h1>
            <h2 className={styles.subtitle}>
                {project.subtitle}
            </h2>
            <h3 className={styles.subtitle}>
                Technologies used: {project.tech1}, {project.tech2}
            </h3>
            </div>
        <div className='projectView'>
          {/* TODO: Get list of all projects */}
            <div className='imgCarousel'>
            {/* Carousel or single image of project */}
            <img src={project.img} alt="Project Image" height="500"/>
            </div>
          {/* Div for all project */}
            <div className='projectInfo'>
            <div className='projectDesc'>
                {project.desc}
            </div>
            <div className='projectLinks'>
                <div className='hostLink'>
                    <a href="">Hosted link</a>
                </div>
                <div className='gitHub'>
                    <div className="card" href={project.github}>
                        <div className="card2">
                            <img src='../../public/github-logo-vec' alt='Github Image' width="180" height="65"/>
                        </div>
                    </div>
                </div>
            </div>
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
        // @import url('https://fonts.googleapis.com/css2?family=Quattrocento&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@700&display=swap');

        .card {
            width: 200px;
            height: 75px;
            background-image: linear-gradient(163deg, #7500ff 0%, #7500ff 100%);
            border-radius: 20px;
            transition: all .3s;
        }

        .card2 {
            width: 200px;
            height: 75px;
            background-color: #3a3a3a;
            border-radius: 20px;
            transition: all .2s;
            display: flex;
            align-content: center;
            justify-content: center;
        }
        .card2 img {
            display:flex;
            height: 90px;
            width: 175px;
        }

        .card2:hover {
            transform: scale(0.98);
            border-radius: 20px;
        }

        .card:hover {
            box-shadow: 0px 0px 30px 1px rgba(33, 33, 33, 0.50);
        }
        .name {
            font-size: 1.75rem;
            font-family: 'Quattrocento', serif;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .firstName {
            padding: 0;
            margin: 0;
        }
        .lastName {
            padding: 0;
            margin: 0;
        }
        .projectView {
            display: flex;
            flex-direction: row;
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
            flex-direction: row;
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

        .projectLinks{
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            width: 30%;
            height: 90%;
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
            display: flex;
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
            height: 95vh;
        }
        footer {
            width: 100%;
            height: 5vh;
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