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
  const [showPlayButton, setShowPlayButton] = useState([true, true, true, true])
  const [isLoading, setIsLoading] = useState([false, false, false, false])
  const [isPlaying, setIsPlaying] = useState([false, false, false, false])
  const sectionRef = useRef(null)
  const videoRefs = useRef([])
  const cardRefs = useRef([])
  const playCheckIntervals = useRef([])

  const cards = [
    {
      id: 0,
      number: "01",
      title: "Future-Proof Marketing",
      subtitle: "Dominate AI search engines in your area",
      videoSrc: video1,
    },
    {
      id: 1,
      number: "02",
      title: "Rank Top 3 on Google & Al Search",
      subtitle:
        "Feature on Google's Al overview. Show up first on Al search (ChatGPT, Gemini, Siri, etc)",
      videoSrc: video2,
    },
    {
      id: 2,
      number: "03",
      title: "Organic Lead Flow",
      subtitle:
        "Deliver organic leads that grow over time without relying on expensive ad spend or pay-per-click strategy.",

      videoSrc: video3,
    },
    {
      id: 3,
      number: "04",
      title: "First Mover Advantage",
      subtitle:
        "Future-proof your practice and dominate Al search engines in your area.",

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

            // Try to auto-play, but show play button if it fails
            if (videoRefs.current[index]) {
              const video = videoRefs.current[index]
              video.currentTime = 0

              // Clear any existing interval
              if (playCheckIntervals.current[index]) {
                clearInterval(playCheckIntervals.current[index])
                playCheckIntervals.current[index] = null
              }

              const playPromise = video.play()

              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    // Auto-play succeeded, hide play button
                    setShowPlayButton((prev) => {
                      const newStates = [...prev]
                      newStates[index] = false
                      return newStates
                    })
                    setIsPlaying((prev) => {
                      const newStates = [...prev]
                      newStates[index] = true
                      return newStates
                    })
                    // Start checking if video progresses
                    startPlayCheck(index)
                  })
                  .catch((error) => {
                    // Auto-play prevented, show play button
                    console.log("Video autoplay prevented:", error)
                    setShowPlayButton((prev) => {
                      const newStates = [...prev]
                      newStates[index] = true
                      return newStates
                    })
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
  }, [activeIndex])

  // Initial play for first video when component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (videoRefs.current[0] && activeIndex === 0) {
        const video = videoRefs.current[0]
        video.currentTime = 0
        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Auto-play succeeded, hide play button
              setShowPlayButton((prev) => {
                const newStates = [...prev]
                newStates[0] = false
                return newStates
              })
              setIsPlaying((prev) => {
                const newStates = [...prev]
                newStates[0] = true
                return newStates
              })
              // Start checking if video progresses
              startPlayCheck(0)
            })
            .catch((error) => {
              console.log("Initial video autoplay prevented:", error)
              // Show play button on first video
              setShowPlayButton((prev) => {
                const newStates = [...prev]
                newStates[0] = true
                return newStates
              })
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
    setIsPlaying((prev) => {
      const newStates = [...prev]
      newStates[index] = false
      return newStates
    })
    setIsLoading((prev) => {
      const newStates = [...prev]
      newStates[index] = false
      return newStates
    })
    // Clear interval when video ends
    if (playCheckIntervals.current[index]) {
      clearInterval(playCheckIntervals.current[index])
      playCheckIntervals.current[index] = null
    }
  }

  const handleVideoWaiting = (index) => {
    setIsLoading((prev) => {
      const newStates = [...prev]
      newStates[index] = true
      return newStates
    })
  }

  const handleVideoPlaying = (index) => {
    setIsLoading((prev) => {
      const newStates = [...prev]
      newStates[index] = false
      return newStates
    })
    setIsPlaying((prev) => {
      const newStates = [...prev]
      newStates[index] = true
      return newStates
    })
  }

  const handleVideoPause = (index) => {
    setIsPlaying((prev) => {
      const newStates = [...prev]
      newStates[index] = false
      return newStates
    })
  }

  const startPlayCheck = (index) => {
    // Clear any existing interval
    if (playCheckIntervals.current[index]) {
      clearInterval(playCheckIntervals.current[index])
    }

    // Check if video is actually progressing
    let lastTime = 0
    let stuckCount = 0

    playCheckIntervals.current[index] = setInterval(() => {
      const video = videoRefs.current[index]
      if (!video) return

      const currentTime = video.currentTime

      // If time hasn't changed and video isn't ended
      if (currentTime === lastTime && !video.ended && !video.paused) {
        stuckCount++

        // If stuck for 2 seconds (4 checks at 500ms intervals), show play button
        if (stuckCount >= 4) {
          setShowPlayButton((prev) => {
            const newStates = [...prev]
            newStates[index] = true
            return newStates
          })
          setIsLoading((prev) => {
            const newStates = [...prev]
            newStates[index] = false
            return newStates
          })
        }
      } else {
        stuckCount = 0
        lastTime = currentTime
      }
    }, 500)
  }

  const handleReplay = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index]
      video.currentTime = 0

      // Clear any existing interval
      if (playCheckIntervals.current[index]) {
        clearInterval(playCheckIntervals.current[index])
        playCheckIntervals.current[index] = null
      }

      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoStates((prev) => {
              const newStates = [...prev]
              newStates[index] = false
              return newStates
            })
            setIsPlaying((prev) => {
              const newStates = [...prev]
              newStates[index] = true
              return newStates
            })
            // Start checking if video progresses
            startPlayCheck(index)
          })
          .catch((error) => {
            console.log("Replay prevented:", error)
          })
      }
    }
  }

  const handlePlayClick = (index) => {
    if (videoRefs.current[index]) {
      const video = videoRefs.current[index]
      video.currentTime = 0

      // Clear any existing interval
      if (playCheckIntervals.current[index]) {
        clearInterval(playCheckIntervals.current[index])
        playCheckIntervals.current[index] = null
      }

      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Hide play button once playing
            setShowPlayButton((prev) => {
              const newStates = [...prev]
              newStates[index] = false
              return newStates
            })
            setIsPlaying((prev) => {
              const newStates = [...prev]
              newStates[index] = true
              return newStates
            })
            // Start checking if video progresses
            startPlayCheck(index)
          })
          .catch((error) => {
            console.log("Manual play prevented:", error)
          })
      }
    }
  }

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      playCheckIntervals.current.forEach((interval) => {
        if (interval) clearInterval(interval)
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="transformation-scroll-section"
      id="transformation"
    >
      <div className="transformation-scroll-header">
        <h2 className="scroll-section-title">
          How BrandKlout Positions You for{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Success
          </span>
        </h2>
        <p className="section-subtitle">
          Turning your All-on-X expertise into the #1 choice for full-arch
          patients in your city.
        </p>
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
                  onWaiting={() => handleVideoWaiting(index)}
                  onPlaying={() => handleVideoPlaying(index)}
                  onPause={() => handleVideoPause(index)}
                  webkit-playsinline="true"
                />
                {isLoading[index] && activeIndex === index && (
                  <div className="video-loading">
                    <div className="loading-spinner"></div>
                  </div>
                )}
                {showPlayButton[index] &&
                  activeIndex === index &&
                  !isLoading[index] && (
                    <button
                      className="play-button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayClick(index)
                      }}
                      aria-label="Play video"
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="rgba(255, 255, 255, 0.9)"
                        />
                        <path
                          d="M10 8L16 12L10 16V8Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
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
