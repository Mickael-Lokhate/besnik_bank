import About from "../components/About";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import style from "../styles/index.module.scss";

function Home() {
  return (
    <div className={style.homePage}>
      <Header />
      <About />
      <Testimonial />
      <Feature />
    </div>
  );
}

export default Home;
