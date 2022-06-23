import style from "../styles/about.module.scss";

function Circle() {
  return <div className={style.circle}></div>;
}

function About() {
  return (
    <section className={style.about}>
      <div className={style.content}>
        <div className={style.card}>
          <h2>We Building Social uniqueness</h2>
          <p>The marketing lays out target markets and the value.</p>
        </div>
        <div className={style.card}>
          <h2>Social Media beyond probability</h2>
          <p>Essentially a formula for how a business is going to compete.</p>
        </div>
      </div>
      <Circle />
    </section>
  );
}

export default About;
