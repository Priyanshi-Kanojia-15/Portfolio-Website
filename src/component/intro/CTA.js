import "./intro.css";
import resume from "..//../imgfolder/resume.docx";
export default function CTA() {
  return (
    <div className="cta">
      {/* <a href={resume} download className="btn">
        DOWNLOAD
      </a> */}
      <a href="#contact" className="btn ">
        Lets's Talk
      </a>
    </div>
  );
}
