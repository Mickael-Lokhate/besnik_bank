import style from "../styles/newsletter.module.scss";
import CircleText from "./CircleText";

function Newsletter() {
  return (
    <div className={style.newsletter}>
      <div className={style.content}>
        <div className={style.infos}>
          <div className={style.text}>
            <p>Subscribe to get updated news</p>
            <div className={style.vline}></div>
            <div className={style.callToAction}>
              <h2>Subscribe Our Newsletter</h2>
              <button>Subscribe</button>
            </div>
          </div>
          <div className={style.details}>
            <CircleText
              style={{ position: "absolute", bottom: "35px", right: "35px" }}
            />
          </div>
        </div>
        <div className={style.illustration}>
          <div className={style.visaCard}>
            <img src="/images/card.png" alt="visa card" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
