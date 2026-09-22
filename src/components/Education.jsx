import { education } from "../data/portfolioData";

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <p>My Academic Journey</p>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <div className="timeline-item" key={item.degree}>
              <div className="timeline-dot"></div>

              <div className="education-card">
                <span className="education-period">
                  {item.period}
                </span>

                <h3>{item.degree}</h3>

                <p>{item.institution}</p>

                <strong>{item.result}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;