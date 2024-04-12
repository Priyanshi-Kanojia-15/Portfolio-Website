import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
export default function portfolio() {
  return (
    <footer>
      <a href="#home" className="logo">
        Portfolio
      </a>
      <ul className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        {/* <a href="https://facebook.com">
          {" "}
          <AiFillFacebook />
        </a> */}
        {/* <a href="https://instagram.com">
          {" "}
          <AiFillInstagram />
        </a> */}
        <a href="mailto:kanojiapriyanshi15@gmail.com">
          {" "}
          <MdEmail />
        </a>
        <a href="https://github.com/Priyanshi-Kanojia-15">
          {" "}
          <BsGithub />{" "}
        </a>
        <a href="https://www.linkedin.com/in/priyanshi-kanojia-91709a205/">
          {" "}
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy;Priyanshi Kanojia . All right reserved.</small>
      </div>
    </footer>
  );
}
