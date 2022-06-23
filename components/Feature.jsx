import style from "../styles/feature.module.scss";

function Feature() {
  return (
    <div className={style.feature}>
      <div className={style.content}>
        <div className={style.imgBackground}>
          <img src="/images/example.svg" alt="illustration" />
        </div>
        <div className={style.infos}>
          <h2>Handoff your work smarter now</h2>
          <p>
            Create documentation for the collaborators (i.e. designers or devs)
            directly in your design file.
          </p>
          <div className={style.card}>
            <div className={style.cardIcon}>
              <img
                src="/images/strategic_icon.png"
                alt="strategic_icon"
                width={30}
                height={30}
              />
            </div>
            <div className={style.cardInfos}>
              <h3>Strategic</h3>
              <p>
                Suggests that the component spacing between cards and elements.
              </p>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardIcon}>
              <img
                src="/images/schedule_icon.png"
                alt="schedule_icon"
                width={25}
                height={29}
              />
            </div>

            <div className={style.cardInfos}>
              <h3>Work schedule</h3>
              <p>
                Work schedule is the time an employee is expected to be on the
                job
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
