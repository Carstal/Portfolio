import Head from 'next/head'
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlo Staltari</title>
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
        <h3 className={styles.title}>
            Login
        </h3>

        <div className="container">
          <div className="card mt-5">
            <form className="card-body" action="/api/login" method="POST">
            <div className="inputGroup">
                <input type="text" id="username"
                  name="username" required=""
                  autocomplete="off"/>
                <label for="identifier">Identifier</label>
            </div>
            <div className="inputGroup">
                <input type="text" id="password"
                  name="password" required=""
                  autocomplete="off"/>
                <label for="password">Password</label>
            </div>

              <div className="form-group mt-3">
                <button type="submit" className={styles.submitbutton}>
                  Login
                </button>
              </div>
                    </form>
                </div>
            </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .inputGroup {
            font-family: 'Segoe UI', sans-serif;
            margin: 1em 0 1em 0;
            max-width: 190px;
            position: relative;
        }
        .inputGroup input {
            font-size: 100%;
            padding: 0.8em;
            outline: none;
            border: 2px solid rgb(200, 200, 200);
            background-color: transparent;
            border-radius: 20px;
            width: 100%;
        }
        .inputGroup label {
            font-size: 100%;
            position: absolute;
            left: 0;
            padding: 0.8em;
            margin-left: 0.5em;
            pointer-events: none;
            transition: all 0.3s ease;
            color: #555555;
        }
        .inputGroup :is(input:focus, input:valid)~label {
            transform: translateY(-50%) scale(.9);
            margin: 0em;
            margin-left: 1.3em;
            padding: 0.4em;
            background-color: #fafafa;
        }
        .inputGroup :is(input:focus, input:valid) {
            border-color: rgb(150, 150, 200);
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
          color: #FFFFFF;
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