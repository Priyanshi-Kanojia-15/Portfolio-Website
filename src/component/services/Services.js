import "./services.css";

export default function Services() {
  return (
    <section id="services">
      <h5> Get To Know</h5>
      <h2>My Work Experience</h2>
      <div className="container sevices_container ">
        <div className="services_content">
          <div className="container services_container ">
            <artical className="services_item">
              <h3>The Spark Foundation</h3>
              <p> Web Developer Intern 09/2022 - 10/2022 </p>
            </artical>
            <artical className="services_item">
              <h3>CODECLAUSE</h3>
              <p> Web Developer Intern 12/2022 - 01/2023 </p>
            </artical>
            <artical className="services_item">
              <h3>OASIS INFOBYTE</h3>
              <p> Web Developer Intern 01/2023 - 02/2023</p>
            </artical>
            <artical className="services_item">
              <h3>SYNC'N INTERN</h3>
              <p> Web Developer Intern 03/2023 - 04/2023 </p>
            </artical>
          </div>
        </div>
      </div>
    </section>
  );
}
