import "./intro.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
export default function HeaderSocial() {
  return (
    <div className="headersocial">
      <a
        href="https://www.linkedin.com/in/priyanshi-kanojia-91709a205/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/Priyanshi-Kanojia-15" target="_blank">
        <BsGithub />
      </a>
      <a herf="mailto:kanojiapriyanshi15@gmail.com" target="_blank">
        <SiGmail />
      </a>
    </div>
  );
}
