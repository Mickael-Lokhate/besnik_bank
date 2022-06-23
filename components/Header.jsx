import Link from "next/link";
import style from "../styles/Header.module.scss";
import CircleText from "./CircleText";

function Deals() {
  return (
    <div className={style.dealsGroup}>
      <div className={`${style.deal} ${style.dealTitle}`}>
        <h2>
          Hot <img src="/images/fire_icon.png" alt="flame" />
          <br /> deals for you
        </h2>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>
      <div className={style.deal}>
        <img
          src="/images/cashback_icon.png"
          alt="cashback"
          width={32}
          height={35}
        />
        <h3>1.5% cashback</h3>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>
      <div className={style.deal}>
        <img
          src="/images/cashback_icon.png"
          alt="cashback"
          width={32}
          height={35}
        />
        <h3>30-days terms</h3>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>
      <div className={style.deal}>
        <img
          src="/images/cashback_icon.png"
          alt="cashback"
          width={32}
          height={35}
        />
        <h3>Save Money</h3>
        <p>Online shopping for retail sales direct to consumers</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className={style.card}>
      <div className={style.card_bg}>
        <div>
          <CircleText
            position={{ position: "absolute", bottom: "35px", right: "35px" }}
          />
        </div>
        <div>
          <div className={style.icon_container}>
            <div className={style.col}>
              <div className={style.icon}>
                <img src="/images/card_icon.png" alt="card" />
              </div>
              <div className={style.icon}>
                <img src="/images/write_icon.png" alt="write" />
              </div>
              <div className={`${style.icon}  ${style.icon_black}`}>
                <img src="/images/email_icon.png" alt="email" />
              </div>
            </div>
            <div className={style.col}>
              <div className={style.icon}>
                <img src="/images/info_icon.png" alt="info" />
              </div>
              <div className={`${style.icon}  ${style.icon_black}`}>
                <img src="/images/care_icon.png" alt="care" />
              </div>
              <div className={style.icon}>
                <img src="/images/question_icon.png" alt="question" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/visa_card.png"
          alt="visa card illu"
          className={style.card_img}
        />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className={style.content}>
      <h1>
        Banking
        <br /> more smart
      </h1>
      <p>
        Meet the only spend management
        <br />
        platform and corporate card.
      </p>
      <div className={style.button}>
        <div className={style.button_icon}>
          <img src="/images/arrow_r.png" alt="arrow" width={20} height={8} />
        </div>
        <p>Get your card</p>
      </div>
      <div className={style.shadow}></div>
    </div>
  );
}

function Header() {
  return (
    <header className={style.header}>
      <div className={style.nav}>
        <nav>
          <ul className={style.main_menu}>
            <li>
              <Link href="#">
                <a>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>HOW IT WORKS</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.logo}>
          <img src="/images/logo.png" alt="Besnik" />
        </div>

        <div className={style.shopping_cart}>
          <img src="/images/shop_cart.png" alt="Cart" width={16} height={16} />
        </div>
      </div>
      <div className={style.header_infos}>
        <Content />
        <Card />
      </div>
      <Deals />
    </header>
  );
}

export default Header;
