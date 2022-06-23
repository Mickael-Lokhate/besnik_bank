import About from "../components/About";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Testimonial from "../components/Testimonial";
import style from "../styles/index.module.scss";

function Home() {
  return (
    <div className={style.homePage}>
      <Header />
      <About />
      <Testimonial />
      <Feature />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
