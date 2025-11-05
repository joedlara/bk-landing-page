import "../styles/components/whyBrandklout.css"

const WhyBrandKlout = () => {
  const brandKloutFeatures = [
    "Transparent reporting you can trust",
    "Grow sales without more ad spends",
    "Personalize SEO and Al-Recommendation strategies ",
    "24/7 access to your campaign performance",
    "Exclusive territory protection for your area",
    "60-day money-back guarantee",
    "Flexible month-to-month. No Contract",
  ]

  const othersFeatures = [
    "No insight into where leads come from",
    "Depend on ads with short-term gains",
    "Generic, copy-paste marketing plans",
    "Slow updates and poor communication",
    "Compete with nearby clients",
    "No refund or satisfaction guarantee",
    "Locked into contracts with no flexibility",
  ]

  return (
    <section
      className="why-brandklout-section scroll-fade-in"
      id="why-brandklout"
    >
      <div className="why-brandklout-container">
        <div className="why-brandklout-header">
          <h2 className="section-title">
            What Makes Us{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Different?
            </span>
          </h2>

          <p className="section-subtitle">
            We focus on transparency, patient growth, and long-term success you
            can measure.
          </p>
        </div>

        <div className="comparison-grid">
          {/* BrandKlout Side */}
          <div>
            {/* Header OUTSIDE the card */}
            <div className="column-header">
              <h3>BrandKlout</h3>
              <div className="decorative-line"></div>
            </div>

            {/* Card */}
            <div className="comparison-column brandklout-column">
              <div className="features-section">
                <h4 className="features-title">FEATURES INCLUDED :</h4>
                <ul className="features-list">
                  {brandKloutFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="check-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#10B981"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d="M8 12L11 15L16 9"
                            stroke="#10B981"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* VS Badge */}
          <div className="vs-badge">
            <span>VS</span>
          </div>

          {/* Others Side */}
          <div>
            {/* Header OUTSIDE the card */}
            <div className="column-header">
              <h3>Others</h3>
            </div>

            {/* Card */}
            <div className="comparison-column others-column">
              <div className="features-section">
                <h4 className="features-title">FEATURES NOT INCLUDED :</h4>
                <ul className="features-list">
                  {othersFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="cross-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#EF4444"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d="M15 9L9 15M9 9L15 15"
                            stroke="#EF4444"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="guarantee-section">
          <div className="guarantee-content">
            <div className="guarantee-text">
              <p>
                <span className="guarantee-highlight">
                  No Lock-In Contract.
                </span>
                <br />
                <span className="guarantee-highlight">
                  60-Days Money Back Guarantee.
                </span>
                <br />
                <span className="guarantee-highlight">No Questions Asked.</span>
              </p>
            </div>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="guarantee-cta"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBrandKlout
