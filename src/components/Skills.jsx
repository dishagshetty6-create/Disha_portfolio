import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-container">
        <div className="section-heading">
          <p>What I Work With</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3>{category}</h3>

              <div className="skill-list">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;