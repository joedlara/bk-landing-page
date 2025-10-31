import "../styles/components/cta.css"

const CTA = () => {
  return (
    <section className="cta-section scroll-scale" id="cta">
      <div className="cta-box">
        <h2>
          Ready to Become #1 All-on-X
          <br /> Dentists in Your Area?
        </h2>
        <p>
          What would it mean for you to show up first on Google & AI search?
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
            className="cta-button cta-button-solid"
            style={{ fontSize: "16px", padding: "14px 32px" }}
          >
            Prequalify Your Practice
          </a>
        </div>
        <div className="cta-video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/qxXc1GruLLY?si=rSh3W-e5sy79awWj"
              title="BrandKlout Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
