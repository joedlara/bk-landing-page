import { featuresData } from "../data/featuresData"
import "../styles/components/features.css"

const Features = () => {
  const iconMap = {
    "map-pin": (
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
        <circle cx="12" cy="10" r="3"></circle>
      </path>
    ),
    "trending-up": (
      <>
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </>
    ),
    layers: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </>
    ),
  }

  return (
    <section className="features-section scroll-fade-in" id="services">
      <div className="features-grid">
        {/* Featured Card - Wider and stands out */}
        <div className="featured-card glass scroll-scale">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "20px", color: "#667eea" }}
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <h2 className="featured-heading">How We Position You for Success</h2>
        </div>

        {featuresData.map((feature, index) => {
          const animationClass =
            index === 0
              ? "scroll-slide-left"
              : index === 1
              ? "scroll-fade-in"
              : index === 2
              ? "scroll-slide-right"
              : "scroll-slide-left"

          return (
            <div
              key={feature.id}
              className={`feature-card glass ${animationClass}`}
            >
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {iconMap[feature.icon]}
                </svg>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
