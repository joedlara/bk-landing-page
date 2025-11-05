import "../styles/components/finalCta.css"

// Import AI logos
import googleLogo from "../assets/logos/google.png"
import yelpLogo from "../assets/logos/yelp.png"
import chatgptLogo from "../assets/logos/chatgpt.png"
import geminiLogo from "../assets/logos/gemini.png"
import grokLogo from "../assets/logos/grok.png"

const FinalCta = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-content">
        {/* AI Logos Row */}
        <div className="final-cta-logos">
          <img src={googleLogo} alt="Google" className="final-cta-logo" />
          <img src={yelpLogo} alt="Yelp" className="final-cta-logo" />
          <img src={chatgptLogo} alt="ChatGPT" className="final-cta-logo" />
          <img src={geminiLogo} alt="Gemini" className="final-cta-logo" />
          <img src={grokLogo} alt="Grok" className="final-cta-logo" />
        </div>

        <h2 className="final-cta-title">
          The Best <span className="final-cta-highlight">All-on-X </span>
          Dentist Deserve the Top Spots
        </h2>
        <p className="final-cta-subtitle">
          BrandKlout puts you where you belong at the top of{" "}
          <span className="final-cta-highlight">Google & AI search</span>
        </p>
        <a
          href="https://calendly.com/mrhuynher/30min?month=2025-10"
          target="_blank"
          rel="noopener noreferrer"
          className="final-cta-button"
        >
          Book a Demo
        </a>
      </div>
    </section>
  )
}

export default FinalCta
