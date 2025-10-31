const Hero = () => {
  return (
    <section className="hero" id="home">
      <p
        className="hero-badge glass"
        style={{ fontSize: "18px", color: "inherit" }}
      >
        ⚡︎ AI-Powered Growth for All-on-X Dentists
      </p>

      <h1>
        <span
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #667eea 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Rank Top 3
        </span>
        <br />
        on AI Search
      </h1>

      <p>
        Build a genuine 5-star reputation that attracts serious patients who
        value your expertise and become your biggest advocates.
      </p>
      <div className="hero-cta">
        <a
          href="https://bk21question.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-button-solid"
          style={{ fontSize: "16px", padding: "14px 32px" }}
        >
          Prequalify Your Practice
        </a>
        <a
          href="https://calendly.com/mrhuynher/30min?month=2025-10"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-button-glass"
        >
          Book a Demo
        </a>
      </div>
    </section>
  )
}

export default Hero
