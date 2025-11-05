import { useEffect, useRef } from "react"
import "../styles/components/googleReviews.css"

const GoogleReviews = () => {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    // Load the Go High Level script only once
    if (!scriptLoaded.current) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src =
        "https://reputationhub.site/reputation/assets/review-widget.js"
      script.async = true
      document.body.appendChild(script)
      scriptLoaded.current = true

      // Cleanup function
      return () => {
        if (script.parentNode) {
          document.body.removeChild(script)
        }
      }
    }
  }, [])

  return (
    <section className="google-reviews-section scroll-fade-in" id="reviews">
      <div className="google-reviews-header">
        <h2 className="section-title">
          Trusted by Leading{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dental Practices
          </span>
        </h2>
        <p className="section-subtitle">
          Don't just take our word for it - see what our clients say
        </p>
      </div>

      {/* Go High Level Reviews Widget */}
      <div className="ghl-reviews-container">
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/J2pdMW2VA2Qk45HhIjHG?widgetId=690a3dfbcf2958bcfa3ae5d6"
          frameBorder="0"
          scrolling="no"
          title="Google Reviews"
          style={{ minWidth: "100%", width: "100%", border: "none" }}
        />
      </div>
    </section>
  )
}

export default GoogleReviews
