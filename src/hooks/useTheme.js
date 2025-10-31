import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const currentTheme = localStorage.getItem("theme") || "dark";
    if (currentTheme === "light") {
      body.classList.add("light-mode");
    }

    const handleThemeToggle = () => {
      body.classList.toggle("light-mode");

      // Save preference
      if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    };

    if (themeToggle) {
      themeToggle.addEventListener("click", handleThemeToggle);
    }

    return () => {
      if (themeToggle) {
        themeToggle.removeEventListener("click", handleThemeToggle);
      }
    };
  }, []);
};
