import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <section className="section certifications-section">
      <div className="section-container">
        <div className="section-heading">
          <p>Continuous Learning</p>
          <h2>Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-icon">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <h3>{certification.title}</h3>
                <p>{certification.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;