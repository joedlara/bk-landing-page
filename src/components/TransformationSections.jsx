import { useState, useRef, useEffect } from "react"
import "../styles/components/transformationSection.css"

// Import videos directly
import video1 from "../assets/circle_diagram.mp4"
import video2 from "../assets/AI_search_city.mp4"
import video3 from "../assets/AI_search_bar.mp4"
import video4 from "../assets/AI_search_map.mp4"

const TransformationSection = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [videoStates, setVideoStates] = useState([false, false, false, false])
  const [hasPlayedInitial, setHasPlayedInitial] = useState(false)
  const videoRefs = useRef([])
  const sectionRef = useRef(null)

  const cards = [
    {
      id: 0,
      number: "01",
      title: "Future-Proof Marketing",
      subtitle: "Dominate AI search engines in your area",
      strategies: [
        {
          name: "Local SEO Optimization",
          description: "Improve your visibility across search engines",
        },
        {
          name: "AI Marketing",
          description: "Get noticed by more patients online",
        },
        {
          name: "Performance Tracking",
          description: "Understand what's working and where to improve",
        },
      ],
      videoSrc: video1,
    },
    {
      id: 1,
      number: "02",
      title: "Unmatched Authority",
      subtitle: "Build credibility as the #1 choice for implant procedures",
      strategies: [
        {
          name: "Google Reviews",
          description: "Strengthen credibility with verified patient feedback",
        },
        {
          name: "Doctor Branding",
          description: "Build recognition as a trusted implant expert",
        },
        {
          name: "Before & After Gallery",
          description: "Turn patient results into proof of excellence",
        },
      ],
      videoSrc: video2,
    },
    {
      id: 2,
      number: "03",
      title: "Organic Lead Flow",
      subtitle: "Steady stream without relying on PPC",
      strategies: [
        {
          name: "Local SEO Mastery",
          description: "Boost visibility in your area",
        },
        {
          name: "Content Marketing",
          description: "Build trust with valuable insights",
        },
        {
          name: "Conversion Optimization",
          description: "Turn visitors into appointments",
        },
      ],
      videoSrc: video3,
    },
    {
      id: 3,
      number: "04",
      title: "Thriving Practice",
      subtitle: "Higher profitability, happier patients, motivated team",
      strategies: [
        {
          name: "Higher Profitability",
          description: "Streamline operations and increase case acceptance",
        },
        {
          name: "Patient Satisfaction",
          description: "Deliver care that builds lasting loyalty",
        },
        {
          name: "Team Motivation",
          description: "Create a culture of growth and excellence",
        },
      ],
      videoSrc: video4,
    },
  ]

  const handleCardClick = (index) => {
    // Don't allow closing the currently active card
    if (activeCard === index) {
      return
    }

    setActiveCard(index)

    // Play video when card is opened
    if (videoRefs.current[index]) {
      videoRefs.current[index].currentTime = 0
      videoRefs.current[index].play()

      // Update video state to playing
      const newVideoStates = [...videoStates]
      newVideoStates[index] = false
      setVideoStates(newVideoStates)
    }
  }

  const handleVideoEnd = (index) => {
    const newVideoStates = [...videoStates]
    newVideoStates[index] = true
    setVideoStates(newVideoStates)
  }

  const handleReplay = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].currentTime = 0
      videoRefs.current[index].play()
      const newVideoStates = [...videoStates]
      newVideoStates[index] = false
      setVideoStates(newVideoStates)
    }
  }

  // Auto-play first video when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedInitial) {
            // Play the first video when section comes into view
            if (videoRefs.current[0]) {
              videoRefs.current[0].currentTime = 0
              videoRefs.current[0].play()
              setHasPlayedInitial(true)
            }
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasPlayedInitial])

  useEffect(() => {
    // Pause all videos except the active one
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeCard) {
        video.pause()
      }
    })
  }, [activeCard])

  return (
    <section
      ref={sectionRef}
      className="transformation-accordion-section"
      id="transformation"
    >
      <div className="transformation-intro">
        <h2 className="section-title">Your Future Practice</h2>
        <p className="section-subtitle">
          Empower your dental team with modern tools and smart automation that
          attract more patients, simplify workflows, and elevate every aspect of
          your practice.
        </p>
      </div>

      <div className="transformation-accordion-container">
        <div className="video-display">
          <div className="video-wrapper">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`video-container ${
                  activeCard === index ? "active" : ""
                }`}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={card.videoSrc}
                  muted
                  playsInline
                  className="transformation-video"
                  onEnded={() => handleVideoEnd(index)}
                />
                {videoStates[index] && activeCard === index && (
                  <button
                    className="replay-button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleReplay(index)
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12C4 7.58172 7.58172 4 12 4C14.5264 4 16.7792 5.17108 18.2454 7M20 12C20 16.4183 16.4183 20 12 20C9.47362 20 7.22075 18.8289 5.75458 17M18 3V7H14M6 21V17H10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    REPLAY
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="accordion-cards">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`accordion-card ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="accordion-card-header">
                <div className="accordion-card-header-content">
                  <span className="card-number">{card.number}</span>
                  <h3 className="accordion-card-title">{card.title}</h3>
                </div>
                <div className="accordion-toggle">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`toggle-icon ${
                      activeCard === index ? "rotated" : ""
                    }`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`accordion-card-content ${
                  activeCard === index ? "expanded" : ""
                }`}
              >
                <p className="accordion-card-subtitle">{card.subtitle}</p>
                <div className="key-strategies">
                  <h4 className="strategies-heading">KEY STRATEGIES</h4>
                  <div className="strategies-list">
                    {card.strategies.map((strategy, idx) => (
                      <div key={idx} className="strategy-item">
                        <span
                          style={{
                            background:
                              "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                          className="strategy-name"
                        >
                          {strategy.name}
                        </span>
                        <span className="strategy-description">
                          {strategy.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TransformationSection
