import "../styles/components/hero.css"
import BackgroundGradient from "./BackgroundGradient"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <BackgroundGradient />
      <div className="hero-badge glass">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span style={{ marginLeft: "8px" }}>
          AI-Powered Growth for All-on-X Dentists
        </span>
      </div>

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
