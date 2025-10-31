import { statsData } from "../data/statsData"
import "../styles/components/stats.css"

const Stats = () => {
  return (
    <section className="stats-section scroll-fade-in" id="stats">
      <div className="stats-container glass">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-number" data-target={stat.value}>
              0%
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
