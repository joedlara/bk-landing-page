import { useEffect } from 'react';
import { whyChooseData } from '../data/whyChooseData';

const WhyChoose = () => {
  useEffect(() => {
    const carousel = document.querySelector(".why-choose-carousel");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    const dotsContainer = document.querySelector(".carousel-dots");
    const cards = document.querySelectorAll(".why-choose-card");

    let currentIndex = 0;
    const cardWidth = cards[0]?.offsetWidth + 30 || 410;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".carousel-dot");

    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      carousel.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      updateDots();
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        goToSlide(currentIndex + 1);
      }
    });

    carousel.addEventListener("scroll", () => {
      const scrollPosition = carousel.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (
        newIndex !== currentIndex &&
        newIndex >= 0 &&
        newIndex < cards.length
      ) {
        currentIndex = newIndex;
        updateDots();
      }
    });

    return () => {
      // Cleanup
      dots.forEach((dot) => dot.remove());
    };
  }, []);

  return (
    <section className="why-choose-section" id="why-choose">
      <h2 className="section-title">Your Complete AI-First Practice Solution</h2>
      <p className="section-subtitle">
        From AI search dominance to 5-star reputation building—everything your
        practice needs to thrive in the AI era.
      </p>

      <div className="why-choose-carousel-container">
        <button className="carousel-btn carousel-prev" aria-label="Previous">
          ‹
        </button>
        <div className="why-choose-carousel">
          {whyChooseData.map((card) => (
            <div key={card.id} className="why-choose-card">
              <h3>{card.title}</h3>
              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a href={card.cta.link} className="card-cta">
                {card.cta.text}
              </a>
            </div>
          ))}
        </div>
        <button className="carousel-btn carousel-next" aria-label="Next">
          ›
        </button>
      </div>

      <div className="carousel-dots"></div>
    </section>
  );
};

export default WhyChoose;
