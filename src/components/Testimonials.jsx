import { testimonialsData } from "../data/testimonialsData"
import "../styles/components/testimonials.css"

// Import platform logos
import yelpLogo from "../assets/logos/yelp.png"
import googleLogo from "../assets/logos/google.png"
import nextdLogo from "../assets/logos/nextd.png"
import hgLogo from "../assets/logos/hg.png"
import chatgptLogo from "../assets/logos/chatgpt.png"
import geminiLogo from "../assets/logos/gemini.png"
import grokLogo from "../assets/logos/grok.png"

const Testimonials = () => {
  const platformLogos = {
    yelp: yelpLogo,
    google: googleLogo,
    nextd: nextdLogo,
    hg: hgLogo,
    chatgpt: chatgptLogo,
    gemini: geminiLogo,
    grok: grokLogo,
  }
  return (
    <section className="testimonials-section scroll-fade-in" id="testimonials">
      <h2 className="section-title">
        Real Clients,
        <span
          style={{
            background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {" "}
          Real Results
        </span>{" "}
      </h2>
      <p className="section-subtitle">
        Success stories from practices that transformed their patient
        acquisition strategy.
      </p>

      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card glass scroll-scale"
          >
            <div className="testimonials-video-container">
              <iframe
                width="100%"
                height="350"
                src={testimonial.videoUrl}
                title={`${testimonial.name} Testimonial`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="testimonials-content-wrapper">
              <div
                className="testimonial-author"
                style={{ marginBottom: "15px" }}
              >
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.practice}</p>
                </div>
              </div>
              <div className="testimonial-metrics">
                {/* Reviews Metric */}
                <div className="metric-item">
                  <div className="metric-header">
                    <span
                      className="metric-number"
                      style={{
                        background:
                          "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {testimonial.metrics.reviews.count}
                    </span>
                    <div className="metric-logos">
                      {testimonial.metrics.reviews.platforms.map((platform) => (
                        <img
                          key={platform}
                          src={platformLogos[platform]}
                          alt={platform}
                          className="platform-logo"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="metric-description">
                    Received{" "}
                    <strong>{testimonial.metrics.reviews.description}</strong>{" "}
                    {testimonial.metrics.reviews.detail}
                  </p>
                </div>

                {/* Rating Metric */}
                <div className="metric-item">
                  <div className="metric-header">
                    <span
                      className="metric-number"
                      style={{
                        background:
                          "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {testimonial.metrics.rating.current}
                    </span>
                    <div className="metric-stars">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="metric-description">
                    {testimonial.metrics.rating.description}{" "}
                    {testimonial.metrics.rating.detail}
                  </p>
                </div>

                {/* AI Recommendation Metric */}
                <div className="metric-item">
                  <div className="metric-header">
                    <div className="metric-ai-logos">
                      {testimonial.metrics.aiRecommendation.platforms.map(
                        (platform) => (
                          <img
                            key={platform}
                            src={platformLogos[platform]}
                            alt={platform}
                            className="platform-logo-large"
                          />
                        )
                      )}
                    </div>
                    <span className="metric-ai-badge">
                      Recommended
                      <br />
                      <span className="metric-ai-badge-sub">
                        by ChatGPT & Google Gemini
                      </span>
                    </span>
                  </div>
                  <p className="metric-description">
                    {testimonial.metrics.aiRecommendation.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
