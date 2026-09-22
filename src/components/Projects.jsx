import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <p>What I Have Built</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">
                0{index + 1}
              </div>

              <p className="project-date">{project.date}</p>

              <h3>{project.title}</h3>

              <p className="project-category">
                {project.category}
              </p>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-features">
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <p className="project-tech">
                {project.technologies}
              </p>

              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;