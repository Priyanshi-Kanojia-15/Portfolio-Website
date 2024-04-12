import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
export default function Experience() {
  return (
    <section id="skills">
      <h5> Get to Know</h5>
      <h2> My Skills</h2>

      <div className="container experience-container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> TAILWIND CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> REDUX</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Core Subject</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> Core Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> DSA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> OOPS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> SDLC</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> DBMS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> CN</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icon" />
              <div>
                <h4> OS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
          {/* <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p> */}
        </div>
      </div>
    </section>
  );
}
