import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Scroll Animations Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Animate stat numbers when they become visible
          if (entry.target.classList.contains("stats-section")) {
            animateStats();
          }
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale"
    );
    animatedElements.forEach((el) => observer.observe(el));

    // Animate Stats Counter
    let statsAnimated = false;
    function animateStats() {
      if (statsAnimated) return;
      statsAnimated = true;

      const statNumbers = document.querySelectorAll(".stat-number");

      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target"));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            stat.textContent = Math.floor(current) + "%";
            requestAnimationFrame(updateCounter);
          } else {
            stat.textContent = target + "%";
          }
        };

        updateCounter();
      });
    }

    // Transformation Scroll Animation
    const scrollItems = document.querySelectorAll(
      ".transformation-scroll-item"
    );

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = entry.target.getAttribute("data-step");
            entry.target.classList.add("active");
            triggerStepAnimation(step);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    scrollItems.forEach((item) => itemObserver.observe(item));

    // Trigger animations for each step
    function triggerStepAnimation(step) {
      const item = document.querySelector(
        `.transformation-scroll-item[data-step="${step}"]`
      );
      if (!item) return;

      // Reset animations in this step
      const donut = item.querySelector(".donut-progress");
      const bars = item.querySelectorAll(".bar");
      const linePath = item.querySelector(".line-path");
      const linePoints = item.querySelectorAll(".line-point");

      if (donut) {
        donut.classList.remove("active");
        setTimeout(() => donut.classList.add("active"), 100);
      }

      if (bars.length > 0) {
        bars.forEach((bar) => bar.classList.remove("active"));
        setTimeout(() => {
          bars.forEach((bar) => bar.classList.add("active"));
        }, 100);
      }

      if (linePath) {
        linePath.classList.remove("active");
        linePoints.forEach((point) => point.classList.remove("active"));
        setTimeout(() => {
          linePath.classList.add("active");
          linePoints.forEach((point) => point.classList.add("active"));
        }, 100);
      }
    }

    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      scrollItems.forEach((item) => itemObserver.unobserve(item));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
