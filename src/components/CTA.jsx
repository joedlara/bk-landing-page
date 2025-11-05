import "../styles/components/cta.css"

const CTA = () => {
  return (
    <section className="cta-section scroll-scale" id="cta">
      <div className="cta-box">
        <h2 className="section-title">
          Ready to Become the {""}
          <span
            style={{
              background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            #1 All-on-X
          </span>
          <br /> Dentists in Your Area?
        </h2>
        <p className="section-subtitle">
          What would it mean for you to show up first on{" "}
          <span className="final-cta-highlight">Google & AI search</span>?
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://bk21question.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Prequalify Your Practice
          </a>
        </div>

        {/* Video Card with CTA-specific class names */}
        <div className="cta-video-container">
          <div className="cta-video-card">
            <div className="cta-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/qxXc1GruLLY?si=rSh3W-e5sy79awWj"
                title="BrandKlout Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="cta-video-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
