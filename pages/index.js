import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <header>
      <nav>
        <div className="hMenu">

          <span className="menu-button">
            <img src="./img/list.svg" alt="lixitcon" />
          </span>
        </div>

        <div className="logo">
          <img src="./img/HomeBeerLogo.png" alt="homebeerlogo" />
        </div>
        <ul className="nav-menu">
          <li><a href="#">Főoldal</a></li>
          <li><a href="#">Szállítása és fizetés</a></li>
          <li><a href="#">Legújabb termék</a></li>
          <li><a href="#">Kapcsolat</a></li>
        </ul>
        <div className="cart-area">
          <span className="nav-icon">
            <img src="./img/search.svg" alt="kereseslogo" />
            <span className="cart-text">Keresés</span>
          </span>
          <span className="nav-icon">
            <img src="./img/cart-fill.svg" alt="kosar" />
            <span className="crat-text">Kosár (0)</span>
          </span>
        </div>
      </nav>
      <section className="banner">
        <h1>Minden ami sör!</h1>
        <h2>Minőségi sör széles választékban!</h2>
      </section>
    </header>

    <main>
      <section id="welcome">
        <article className="welcome-card products">
          <h3>Termékeink</h3>
          <button className="btn">Megnezem</button>
        </article>

        <article className="welcome-card brewing">
          <h3>Főzés folyamata</h3>
          <Link href="sor/folyamatok"><button className="btn">Megnezem</button></Link>
        </article>

        <article className="welcome-card about">
          <h3>Rólunk</h3>
          <button className="btn">Megnezem</button>
        </article>
      </section>

      <section id="action">
        <h2>Akciós termékek</h2>

        <section className="action-cards">
          <article className="action-card">
            <img src="./img/klassicmalata.png" alt="klassicmalata" />
            <h3>Klasszikus Maláta</h3>
            <p className="price">600,-Ft</p>
          </article>

          <article className="action-card">
            <img src="./img/kekloalom.png" alt="kekloalom" />
            <h3>Kéklő Álom</h3>
            <p className="price">700,-Ft</p>
          </article>

          <article className="action-card">
            <img src="./img/keklodobozos.png" alt="keklodobozos" />
            <h3>Kéklő dobozos</h3>
            <p className="price">550,-Ft</p>
          </article>

          <article className="action-card">
            <img src="./img/mergesmalnas.png" alt="mergesmalnas" />
            <h3>Mérges Málnás</h3>
            <p className="price">700,-Ft</p>
          </article>
        </section>
      </section>

      <section>
        <article className="subscribe-card">
          <h2>Feliratkozás hírlevélre</h2>
          <div className="input-area">
            <form action="https://formspree.io/f/mrgvzdqy" method="post">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Az Ön vezetékneve"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Az Ön keresztneve"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Az Ön e-mail címe"
              />
              <label className="licence" htmlFor="check">
                <input type="checkbox" name="check" id="check" />
                Hozzárjárulok ahhoz, hogy a Home Beer Kft. a nevemet és e-mail
                címemet hírlevelezés céllal kezelje és reklámot küldjön
              </label>
              <input className="btn" type="submit" value="Feliratkozás" />
            </form>
          </div>
        </article>
      </section>

      <section id="tips">
        <h2>Tippek és trükkök</h2>
        <article className="tips-cards">
          <article className="tips-card">
            <img src="./img/hutes.png" alt="hutes" />
            <div>
              <h3>A hűtésről</h3>
              <p className="date">2022.12.27</p>
              <p className="text">
                Lorem ipsum, dolor sit amet. Ipsa placeat ordit...
              </p>
            </div>
            <button className="btn">Részletek</button>
          </article>

          <article className="tips-card">
            <img src="./img/fozo.png" alt="fozo" />
            <div>
              <h3>A Főző</h3>
              <p className="date">2022.12.28</p>
              <p className="text">
                Lorem ipsum, dolor sit amet. Ipsa placeat ordit...
              </p>
            </div>
            <button className="btn">Részletek</button>
          </article>

          <article className="tips-card big-card">
            <img src="./img/sorkemia.png" alt="sorkemia" />
            <div>
              <h3>Sör kémia</h3>
              <p className="date">2022.12.29</p>
              <p className="text">
                Lorem ipsum, dolor sit amet. Ipsa placeat ordit...
              </p>
            </div>
            <button className="btn">Részletek</button>
          </article>
        </article>
      </section>
    </main>
    <footer>
      <section className="footer-menu">
        <ul className="footer-list">
          <li>Sütik (cooki) kezelése</li>
          <li>Adatvédelmi irányelvek</li>
          <li>Impresszum</li>
          <li>Kapcsolat</li>
          <li>Vásárlási feltételek</li>
        </ul>
      </section>
      <section className="soc-icon">
        <ul>
          <li>
            <img
              className="fa-brands"
              src="./img/facebook.svg"
              alt="facebooklogo"
            />
          </li>
          <li>
            <img className="fa-brands" src="./img/twitter.svg" alt="twitterlogo" />
          </li>
          <li>
            <img
              className="fa-brands"
              src="./img/instagram.svg"
              alt="instagramlogo"
            />
          </li>
          <li>
            <img className="fa-brands" src="./img/youtube.svg" alt="youtubelogo" />
          </li>
        </ul>
      </section>
      <p>COPYRIGHT ©2022 CSIBOR</p>
    </footer>
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
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
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: borde r-box;
        }
      `}</style>
    </div>
  )
}