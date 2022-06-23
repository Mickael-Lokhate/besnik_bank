import style from "../styles/testimonial.module.scss";

function Testimonial() {
  return (
    <div className={style.testimonial}>
      <div className={style.content}>
        <div className={style.infos}>
          <h2>1000+ Customers</h2>
          <p>
            Analyze any Business or Creator account—including your
            competitors—to find the imagery, visuals, and captions that drive
            audience engagement. Get social calendars planned faster and spend
            less time testing content strategies.
          </p>
        </div>
        <div className={style.table}>
          <table cellSpacing={0}>
            <tbody>
              <tr>
                <td>
                  <h3>PRODUCTS</h3>
                  <p>10,000+</p>
                </td>
                <td>
                  <h3>LIKES</h3>
                  <p>45600</p>
                </td>
                <td>
                  <h3>SALES</h3>
                  <p>576864</p>
                </td>
                <td>
                  <h3>CUSTOMERS</h3>
                  <p>947444</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
