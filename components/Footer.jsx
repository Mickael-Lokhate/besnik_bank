import Link from "next/link";
import style from "../styles/footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <nav className={style.menu}>
          <ul className={style.mainMenu}>
            <li>
              <Link href={"#"}>
                <a>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a>HOW IT WORKS</a>
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
          <img src="/images/logo.png" alt="Besnik" />
          <div className={style.right}>
            <ul className={style.menuAccount}>
              <li>
                <Link href={"#"}>
                  <a>Signup</a>
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <a>Login</a>
                </Link>
              </li>
            </ul>

            <ul className={style.menuSocial}>
              <li>
                <Link href={"#"}>
                  <img src="/images/fb_icon.png" alt="fb" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <img src="/images/insta_icon.png" alt="insta" />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <img src="/images/yt_icon.png" alt="yt" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className={style.copyright}>
          <p>Copyright © 2020.Besnik creative</p>
          <div className={style.hline}></div>
          <p>Designed by Besnik</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
