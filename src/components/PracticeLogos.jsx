import { useEffect, useRef } from "react"
import "../styles/components/practiceLogos.css"
import practice1 from "../assets/practices/ocpao.png"
import practice2 from "../assets/practices/cal_dental.png"
import practice3 from "../assets/practices/omnia.png"
import practice4 from "../assets/practices/atwood.png"
import practice5 from "../assets/practices/oceanic.png"
import practice6 from "../assets/practices/haven.png"
import practice7 from "../assets/practices/legacy.png"

const PracticeLogos = () => {
  const carouselRef = useRef(null)

  // Practice logo data - using placeholder images for now
  const practices = [
    {
      id: 1,
      name: "Practice One",
      logo: practice1,
    },
    {
      id: 2,
      name: "Practice Two",
      logo: practice2,
    },
    {
      id: 3,
      name: "Practice Three",
      logo: practice3,
    },
    {
      id: 4,
      name: "Practice Four",
      logo: practice4,
    },
    {
      id: 5,
      name: "Practice Five",
      logo: practice5,
    },
    {
      id: 6,
      name: "Practice Six",
      logo: practice6,
    },
    {
      id: 7,
      name: "Practice Seven",
      logo: practice7,
    },
  ]

  // Duplicate the logos array MULTIPLE times for truly seamless infinite scroll
  const duplicatedPractices = [
    ...practices,
    ...practices,
    ...practices,
    ...practices,
  ]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 0.3 // pixels per frame (slowed down)

    const animate = () => {
      scrollPosition += scrollSpeed

      // Calculate the width of one set of logos
      const singleSetWidth = carousel.scrollWidth / 4 // Divided by 4 because we have 4 sets

      // Reset position seamlessly when first set has scrolled
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0
      }

      carousel.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
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
