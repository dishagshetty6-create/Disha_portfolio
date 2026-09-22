import { about, personalInfo } from "../data/portfolioData";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-container">
        <div className="section-heading">
          <p>Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{about.description}</p>
            <p>{about.additional}</p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <span>CGPA</span>
              <strong>{personalInfo.cgpa}</strong>
            </div>

            <div className="info-card">
              <span>Graduation</span>
              <strong>{personalInfo.graduation}</strong>
            </div>

            <div className="info-card">
              <span>Location</span>
              <strong>Mangalore</strong>
            </div>

            <div className="info-card">
              <span>Focus</span>
              <strong>Software & AI</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;