import { achievements } from "../data/portfolioData";

function Achievements() {
  return (
    <section className="section achievements-section">
      <div className="section-container">
        <div className="section-heading">
          <p>Beyond Academics</p>
          <h2>Achievements & Activities</h2>
        </div>

        <div className="achievement-list">
          {achievements.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;