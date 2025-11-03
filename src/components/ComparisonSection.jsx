import "../styles/components/comparisonSection.css"
import automate from "../assets/automate.jpg"
import manage from "../assets/manage.png"

const FeatureSections = () => {
  return (
    <>
      {/* Section 1 - Manage Your Online Listings (Image Left, Text Right) */}
      <section className="feature-section">
        <div className="feature-container">
          <div className="feature-image-wrapper">
            <img
              src={manage}
              alt="Manage your online listings"
              className="feature-image"
            />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">
              Manage Your Online Listings with Ease
            </h2>
            <p className="feature-description">
              Ensure your dental practice is accurately listed across all
              platforms with <span className="highlight">BrandKlout</span>'s
              online business listing management feature. Take control of your
              online presence and make it easy for potential patients to find
              you.
            </p>
            <div className="feature-stats">
              <div className="stat-row">
                <span className="stats">5X</span>
                <span className="stat-text">Your online visibility</span>
              </div>
              <div className="stat-row">
                <span className="stats">3X</span>
                <span className="stat-text">Boost online engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Automate Your Reviews (Text Left, Image Right) */}
      <section className="feature-section reverse">
        <div className="feature-container">
          <div className="feature-content">
            <h2 className="feature-title">
              Automate Your Reviews, Boost Your Ratings, and Enhance Your SEO
              Traffic
            </h2>
            <p className="feature-description">
              Automating customer reviews is essential for building a strong
              online reputation. With our platform, you can easily gather
              feedback, improve ratings, and attract more visitors to your site.
            </p>
            <div className="feature-stats">
              <div className="stat-row">
                <span className="stats">400%</span>
                <span className="stat-text">More reviews from patients</span>
              </div>
              <div className="stat-row">
                <span className="stats">250%</span>
                <span className="stat-text">Increase in organic traffic</span>
              </div>
            </div>
          </div>
          <div className="feature-image-wrapper">
            <img
              src={automate}
              alt="Automate your reviews"
              className="feature-image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSections
