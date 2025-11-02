import { useEffect, useRef } from "react"
import "../styles/components/practiceLogos.css"

const PracticeLogos = () => {
  const carouselRef = useRef(null)

  // Practice logo data - using placeholder images for now
  const practices = [
    { id: 1, name: "Practice One", logo: "https://via.placeholder.com/180x80/667eea/ffffff?text=Practice+1" },
    { id: 2, name: "Practice Two", logo: "https://via.placeholder.com/180x80/764ba2/ffffff?text=Practice+2" },
    { id: 3, name: "Practice Three", logo: "https://via.placeholder.com/180x80/667eea/ffffff?text=Practice+3" },
    { id: 4, name: "Practice Four", logo: "https://via.placeholder.com/180x80/764ba2/ffffff?text=Practice+4" },
    { id: 5, name: "Practice Five", logo: "https://via.placeholder.com/180x80/667eea/ffffff?text=Practice+5" },
    { id: 6, name: "Practice Six", logo: "https://via.placeholder.com/180x80/764ba2/ffffff?text=Practice+6" },
    { id: 7, name: "Practice Seven", logo: "https://via.placeholder.com/180x80/667eea/ffffff?text=Practice+7" },
    { id: 8, name: "Practice Eight", logo: "https://via.placeholder.com/180x80/764ba2/ffffff?text=Practice+8" },
    { id: 9, name: "Practice Nine", logo: "https://via.placeholder.com/180x80/667eea/ffffff?text=Practice+9" },
    { id: 10, name: "Practice Ten", logo: "https://via.placeholder.com/180x80/764ba2/ffffff?text=Practice+10" },
  ]

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedPractices = [...practices, ...practices]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when first set of logos has completely scrolled
      if (scrollPosition >= carousel.scrollWidth / 2) {
        scrollPosition = 0
      }

      carousel.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    carousel.addEventListener("mouseenter", handleMouseEnter)
    carousel.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      carousel.removeEventListener("mouseenter", handleMouseEnter)
      carousel.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="practice-logos-section">
      <div className="practice-logos-container">
        <div className="practice-logos-carousel" ref={carouselRef}>
          {duplicatedPractices.map((practice, index) => (
            <div key={`${practice.id}-${index}`} className="practice-logo-item">
              <img
                src={practice.logo}
                alt={practice.name}
                className="practice-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PracticeLogos
