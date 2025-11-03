import { useEffect, useRef, useState } from "react"
import { googleReviewsData } from "../data/googleReviewsData"
import "../styles/components/googleReviews.css"

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  // Calculate average rating
  const averageRating = (
    googleReviewsData.reduce((sum, review) => sum + review.rating, 0) /
    googleReviewsData.length
  ).toFixed(1)

  const totalReviews = googleReviewsData.length

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    const maxIndex = Math.ceil(googleReviewsData.length / 3) - 1
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handlePrev = () => {
    const maxIndex = Math.ceil(googleReviewsData.length / 3) - 1
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Calculate transform based on current index
  const transformValue = `translateX(-${currentIndex * 100}%)`

  // Generate dots for pagination
  const totalSlides = Math.ceil(googleReviewsData.length / 3)

  // Render stars
  const renderStars = (rating) => {
    return (
      <div className="review-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="google-reviews-section scroll-fade-in" id="reviews">
      <div className="google-reviews-header">
        <h2 className="section-title">Trusted by Leading Dental Practices</h2>
        <p className="section-subtitle">
          Don't just take our word for it - see what our clients say
        </p>
      </div>

      {/* Reviews Carousel */}
      <div className="google-reviews-carousel-container">
        <button
          className="carousel-btn carousel-prev"
          onClick={handlePrev}
          aria-label="Previous reviews"
        >
          ‹
        </button>

        <div className="google-reviews-carousel" ref={carouselRef}>
          <div className="reviews-track" style={{ transform: transformValue }}>
            {googleReviewsData.map((review) => (
              <div key={review.id} className="google-review-card glass">
                {/* Card Header - UPDATED STRUCTURE */}
                <div className="review-card-header">
                  <div className="review-header-top">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">{review.avatar}</div>
                      <div className="reviewer-details">
                        <h4 className="reviewer-name">{review.name}</h4>
                        <div className="review-meta">
                          <span className="review-date">{review.date}</span>
                          {review.verified && (
                            <span className="verified-badge">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                              </svg>
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Stars moved below reviewer info */}
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="review-text">{review.review}</p>

                {/* Google Badge */}
                <div className="google-badge">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FBBC04"
                    />
                  </svg>
                  <span>Posted on Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn carousel-next"
          onClick={handleNext}
          aria-label="Next reviews"
        >
          ›
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="carousel-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default GoogleReviews
