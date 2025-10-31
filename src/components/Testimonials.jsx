import { testimonialsData } from "../data/testimonialsData"
import "../styles/components/testimonials.css"

const Testimonials = () => {
  return (
    <section className="testimonials-section scroll-fade-in" id="testimonials">
      <h2 className="section-title">Real Clients, Real Results</h2>
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
            <div className="video-placeholder">
              <iframe
                width="100%"
                height="100%"
                src={testimonial.videoUrl}
                title={`${testimonial.name} Testimonial`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className="testimonial-author"
              style={{ marginBottom: "15px" }}
            >
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.practice}</p>
              </div>
              <div className="testimonial-rating">
                <span style={{ color: "#667eea", fontSize: "18px" }}>★</span>
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: "600",
                    marginLeft: "5px",
                  }}
                >
                  {testimonial.rating}/5
                </span>
              </div>
            </div>
            <p className="testimonial-text">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
