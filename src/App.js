import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";
import Navbar from "./component/navbar/Navbar";
import Services from "./component/services/Services";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import "./styles.css";

export default function App() {
  return (
    <>
      <Intro />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
