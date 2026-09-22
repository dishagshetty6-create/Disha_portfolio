import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-small">Hello, I'm</p>

          <h1>
            Disha <span>Shetty</span>
          </h1>

          <h2>{personalInfo.role}</h2>

          <p className="hero-description">
            {personalInfo.tagline}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href={`mailto:${personalInfo.email}`}>
              Email
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame">
            <img
              src="/profile.jpg"
              alt="Disha Shetty"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;