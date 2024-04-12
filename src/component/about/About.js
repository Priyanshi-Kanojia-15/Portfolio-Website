import React from "react";
import "./about.css";
import ME from "../../imgfolder/me1.jpg";

export default function About() {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container ">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <p>
            I am currently pursuing Computer Science Engineering at Global
            Group of Institutions , Jabalpur. I am looking forward for an
            opportunity to work where I can learn
            new skills, expand my knowledge. I've learned,Core Java,OOPS,SDLC,
            DBMS,SQL,HTML,CSS, Javascript,Reactjs,Material UI, Tailwind CSS,Redux etc.
            My Interest are focused on
            Frontend Web Development and Software Development, I have made
            several projects using Javascript, React to improve my skills and
            experience. I am self disciplined, self motivated, hardworking and
            dedicated person. 
          </p>
          <div className="about_btn">
            <a href="mailto:kanojiapriyanshi15@gmail.com" className="btn  ">
              Lets's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
