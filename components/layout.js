import Menu from "./menu";

export default function Layout({ children }) {
  return <div>
    <Menu elem="ZSeni"/>
    {children}
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
    </div>;
}