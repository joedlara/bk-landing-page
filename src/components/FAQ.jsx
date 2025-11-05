import { useState } from "react"
import { faqData } from "../data/faqData"
import "../styles/components/faq.css"

const FAQ = () => {
  const [activeId, setActiveId] = useState(null)

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <section className="faq-section scroll-fade-in" id="faq">
      <h2 className="section-title">
        Frequently Asked{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Question's
        </span>
      </h2>
      <p className="section-subtitle">
        Full Arch Dentists Ask Before Partnering With Us
      </p>

      <div className="faq-container">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item glass ${activeId === faq.id ? "active" : ""}`}
            onClick={() => handleClick(faq.id)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
