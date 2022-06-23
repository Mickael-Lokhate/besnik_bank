import style from "../styles/circle_text.module.scss";

function CircleText({ position }) {
  return (
    <div style={position}>
      <div className={style.circle_text}>
        <div className={style.arrow}>
          <img src="/images/arrow_plain.png" alt=">" />
        </div>
        <span className={style.char1}>S</span>
        <span className={style.char2}>E</span>
        <span className={style.char3}>E</span>
        <span
          className={style.char4}
          style={{ fontSize: "18px", fontWeight: "700" }}
        >
          .
        </span>
        <span className={style.char5}>H</span>
        <span className={style.char6}>O</span>
        <span className={style.char7}>W</span>
        <span
          className={style.char8}
          style={{ fontSize: "18px", fontWeight: "700" }}
        >
          .
        </span>
        <span className={style.char9}>I</span>
        <span className={style.char10}>T</span>
        <span
          className={style.char11}
          style={{ fontSize: "18px", fontWeight: "700" }}
        >
          .
        </span>
        <span className={style.char12}>W</span>
        <span className={style.char13}>O</span>
        <span className={style.char14}>R</span>
        <span className={style.char15}>K</span>
        <span className={style.char16}>S</span>
      </div>
    </div>
  );
}
export default CircleText;
