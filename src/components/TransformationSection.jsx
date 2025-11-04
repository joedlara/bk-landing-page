import { useState, useRef, useEffect } from "react"
import "../styles/components/transformationSection.css"

// Import videos directly
import video1 from "../assets/circle_diagram.mp4"
import video2 from "../assets/AI_search_city.mp4"
import video3 from "../assets/AI_search_bar.mp4"
import video4 from "../assets/AI_search_map.mp4"

const TransformationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [videoStates, setVideoStates] = useState([false, false, false, false])
  const sectionRef = useRef(null)
  const videoRefs = useRef([])
  const cardRefs = useRef([])

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

  // Handle scroll to determine active card using intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when card is in the middle 20% of viewport
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target)
          if (index !== -1 && index !== activeIndex) {
            setActiveIndex(index)

            // Play video when card becomes active with mobile-friendly handling
            if (videoRefs.current[index]) {
              const video = videoRefs.current[index]
              video.currentTime = 0

              // Use promise-based play with error handling for mobile
              const playPromise = video.play()

              if (playPromise !== undefined) {
                playPromise.catch((error) => {
                  // Auto-play was prevented (common on mobile)
                  console.log("Video autoplay prevented:", error)
                  // Optionally, you could show a play button here
                })
              }

              // Reset video state
              setVideoStates((prev) => {
                const newStates = [...prev]
                newStates[index] = false
                return newStates
              })
            }
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [activeIndex]) // Removed videoStates dependency to prevent observer recreation

  // Initial play for first video when component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (videoRefs.current[0] && activeIndex === 0) {
        const video = videoRefs.current[0]
        video.currentTime = 0
        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Initial video autoplay prevented:", error)
          })
        }
      }
    }, 300)

    return () => clearTimeout(timer)
  }, []) // Only run once on mount

  // Pause non-active videos
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeIndex) {
        video.pause()
      }
    })
  }, [activeIndex])

  const handleVideoEnd = (index) => {
    setVideoStates((prev) => {
      const newStates = [...prev]
      newStates[index] = true
      return newStates
    })
  }

  const handleReplay = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index]
      video.currentTime = 0
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Replay prevented:", error)
        })
      }

      setVideoStates((prev) => {
        const newStates = [...prev]
        newStates[index] = false
        return newStates
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="transformation-scroll-section"
      id="transformation"
    >
      <div className="transformation-scroll-header">
        <h2 className="scroll-section-title">
          How BrandKlout Positions
          <br /> You for <span className="gradient-text">Success</span>
        </h2>
      </div>

      <div className="transformation-scroll-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`transformation-card ${
              index <= activeIndex ? "active" : ""
            } ${index < activeIndex ? "passed" : ""}`}
            style={{
              zIndex: cards.length - index,
            }}
          >
            <div className="card-content-wrapper">
              <div className="card-text-content">
                <span className="card-number">{card.number}</span>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>

                <div className="card-strategies">
                  <h4 className="strategies-title">Key Strategies</h4>
                  <ul className="strategies-list">
                    {card.strategies.map((strategy, idx) => (
                      <li key={idx} className="strategy-item">
                        <span className="strategy-name">{strategy.name}</span>
                        <span className="strategy-desc">
                          {strategy.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-video-wrapper">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={card.videoSrc}
                  muted
                  playsInline
                  preload="auto"
                  className="card-video"
                  onEnded={() => handleVideoEnd(index)}
                  webkit-playsinline="true"
                />
                {videoStates[index] && activeIndex === index && (
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
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to allow proper scrolling */}
      <div className="scroll-spacer" />
    </section>
  )
}

export default TransformationSection
