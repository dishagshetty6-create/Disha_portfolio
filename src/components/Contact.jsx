import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-container">
        <div className="contact-content">
          <div className="section-heading">
            <p>Let's Connect</p>
            <h2>Contact Me</h2>
          </div>

          <p className="contact-description">
            I'm open to software development, web development,
            AI/ML and internship opportunities.
          </p>

          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`}>
              <span>Email</span>
              {personalInfo.email}
            </a>

            <a href={`tel:${personalInfo.phone}`}>
              <span>Phone</span>
              {personalInfo.phone}
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              View Profile
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;