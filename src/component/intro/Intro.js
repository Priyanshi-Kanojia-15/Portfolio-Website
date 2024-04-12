import "./intro.css";
import CTA from "./CTA";
import ME from "../../imgfolder/me1.jpg";
import HeaderSocial from "./HeaderSocial";
export default function Intro() {
  return (
    <header id="home">
      <div className="container header_container">
        <h2 className="text-light">Hello I'm</h2>
        <h2 className="text-light">PRIYANSHI KANOJIA</h2>
        <h2 className="text-light">PASSIONATE LEARNER</h2>

        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  );
}
