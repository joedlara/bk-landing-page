import "../styles/components/header.css"

const Header = () => {
  return (
    <header id="header">
      <nav>
        <div className="logo">BrandKlout</div>
        <ul className="nav-links">
          <li>
            <div className="theme-toggle" id="themeToggle">
              <svg
                className="theme-icon moon-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <svg
                className="theme-icon sun-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </li>
          <li>
            <a
              href="https://calendly.com/mrhuynher/30min?month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Book a Demo
            </a>
          </li>
          <li>
            <a
              href="https://app.brandklout.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-glass"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
