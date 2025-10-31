import "../styles/components/transformationSection.css"

const TransformationSection = () => {
  return (
    <section className="transformation-scroll-section" id="transformation">
      <div className="transformation-intro">
        <h2 className="section-title">Your Practice Transformation</h2>
        <p className="section-subtitle">
          Empower your dental team with modern tools and smart automation that
          attract more patients, simplify workflows, and elevate every aspect of
          your practice.
        </p>
      </div>

      <div className="transformation-scroll-wrapper">
        {/* Step 1 - Future-Proof Marketing */}
        <div className="transformation-scroll-item" data-step="1">
          <div className="transformation-scroll-content">
            <div className="step-text">
              <span className="step-number-badge">01</span>
              <h3 className="step-title" style={{ color: "inherit" }}>
                Future-Proof Marketing
              </h3>
              <p className="step-subtitle">
                Dominate AI search engines in your area
              </p>

              <div style={{ marginTop: "30px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Key strategies
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Local SEO Optimization
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Improve your visibility across search engine
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>AI Marketing</strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Get noticed by more patients online
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Performance Tracking
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Understand what's working and where to improve
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="transformation-scroll-visual">
            <div className="visual-card content-card">
              <div style={{ textAlign: "center" }}>
                <h4
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  AI Search
                </h4>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginBottom: "10px",
                  }}
                >
                  Future-proof marketing - Dominate AI search engines in your
                  area
                </p>
                <p style={{ fontSize: "16px" }}>
                  → Be found on ChatGPT, Claude, Gemini & more
                </p>
              </div>
              <svg
                width="320"
                height="280"
                viewBox="0 0 320 280"
                className="ai-map-visual"
                style={{ marginTop: "30px" }}
              >
                <defs>
                  <pattern
                    id="mapPattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      width="40"
                      height="40"
                      fill="rgba(255, 255, 255, 0.2)"
                    />
                    <path
                      d="M0 20 H40 M20 0 V40"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                  </pattern>
                  <filter
                    id="mapShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="3"
                      floodOpacity="0.3"
                    />
                  </filter>
                </defs>

                <rect
                  width="320"
                  height="280"
                  rx="20"
                  fill="url(#mapPattern)"
                />

                <path
                  d="M0 140 H320"
                  stroke="#FFB366"
                  strokeWidth="3"
                  opacity="0.5"
                />
                <path
                  d="M160 0 V280"
                  stroke="#FFB366"
                  strokeWidth="3"
                  opacity="0.5"
                />
                <path
                  d="M80 70 L240 210"
                  stroke="#FFB366"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <path
                  d="M240 70 L80 210"
                  stroke="#FFB366"
                  strokeWidth="2"
                  opacity="0.4"
                />

                <g className="location-pin" filter="url(#mapShadow)">
                  <ellipse
                    cx="160"
                    cy="155"
                    rx="12"
                    ry="4"
                    fill="rgba(0,0,0,0.2)"
                  />
                  <path
                    d="M160 95 C145 95 133 107 133 122 C133 135 160 150 160 150 C160 150 187 135 187 122 C187 107 175 95 160 95 Z"
                    fill="#FF6B35"
                    stroke="#D94A1F"
                    strokeWidth="2"
                  />
                  <circle cx="160" cy="120" r="10" fill="white" />
                  <circle cx="160" cy="120" r="6" fill="#FF6B35" />
                </g>

                <g className="ai-bubble bubble-gpt" filter="url(#mapShadow)">
                  <circle cx="160" cy="50" r="24" fill="#10A37F" />
                  <text
                    x="160"
                    y="56"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                  >
                    GPT
                  </text>
                </g>
                <g className="ai-bubble bubble-claude" filter="url(#mapShadow)">
                  <circle cx="250" cy="80" r="24" fill="#D97757" />
                  <text
                    x="250"
                    y="86"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="600"
                  >
                    Claude
                  </text>
                </g>
                <g className="ai-bubble bubble-grok" filter="url(#mapShadow)">
                  <circle cx="70" cy="170" r="24" fill="#000000" />
                  <text
                    x="70"
                    y="176"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    fontWeight="600"
                  >
                    Grok
                  </text>
                </g>
                <g className="ai-bubble bubble-gemini" filter="url(#mapShadow)">
                  <circle cx="250" cy="230" r="24" fill="#4285F4" />
                  <text
                    x="250"
                    y="236"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="600"
                  >
                    Gemini
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Step 2 - Unmatched Authority */}
        <div className="transformation-scroll-item" data-step="2">
          <div className="transformation-scroll-content">
            <div className="step-text">
              <span className="step-number-badge">02</span>
              <h3 className="step-title" style={{ color: "inherit" }}>
                Unmatched Authority
              </h3>
              <p className="step-subtitle">
                Build credibility as the #1 choice for implant procedures
              </p>

              <div style={{ marginTop: "30px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Key strategies
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>Google Reviews</strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Strengthen credibility with verified patient feedback
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>Doctor Branding</strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Build recognition as a trusted implant expert
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Before & After Gallery
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Turn patient results into proof of excellence
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="transformation-scroll-visual">
            <div className="visual-card content-card">
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "56px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  61%
                </h4>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  of consumers check <strong>2-3 review sites</strong> before
                  choosing a provider
                </p>
                <p style={{ fontSize: "16px" }}>
                  → Multi-platform presence is critical
                </p>
              </div>
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                className="donut-chart"
              >
                <rect
                  width="320"
                  height="320"
                  rx="20"
                  fill="rgba(255, 255, 255, 0.2)"
                />
                <g transform="translate(160, 160)">
                  <circle
                    cx="0"
                    cy="0"
                    r="80"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.3)"
                    strokeWidth="40"
                  />
                  <circle
                    className="donut-progress"
                    cx="0"
                    cy="0"
                    r="80"
                    fill="none"
                    stroke="white"
                    strokeWidth="40"
                    strokeDasharray="502.4 502.4"
                    strokeDashoffset="502.4"
                    transform="rotate(-90)"
                    strokeLinecap="round"
                  />
                  <text
                    x="0"
                    y="15"
                    textAnchor="middle"
                    fill="white"
                    fontSize="56"
                    fontWeight="700"
                  >
                    61%
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Step 3  */}
        <div className="transformation-scroll-item" data-step="3">
          <div className="transformation-scroll-content">
            <div className="step-text">
              <span className="step-number-badge">03</span>
              <h3 className="step-title" style={{ color: "inherit" }}>
                Organic Lead Flow
              </h3>
              <p className="step-subtitle">Steady stream without relying on PPC</p>

              <div style={{ marginTop: "30px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Key strategies
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Local SEO Mastery
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Boost visibility in your area
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Content Marketing
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Build trust with valuable insights
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Conversion Optimization
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Turn visitors into appointments
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="transformation-scroll-visual">
            <div className="visual-card content-card">
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "56px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  5x
                </h4>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  more appointment requests with just
                  <strong>7-12 reviews</strong> vs. none
                </p>
                <p style={{ fontSize: "16px" }}>
                  → Reviews directly drive bookings
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="360"
                  height="280"
                  viewBox="0 0 360 280"
                  className="bar-chart"
                >
                  <rect
                    width="360"
                    height="280"
                    rx="20"
                    fill="rgba(255, 255, 255, 0.2)"
                  />
                  {/* Increase in Reviews label floating above the chart  */}
                  <text
                    x="180"
                    y="40"
                    textAnchor="middle"
                    fill="white"
                    fontSize="22"
                    fontWeight="700"
                  >
                    Increase in Reviews
                  </text>
                  {/* Bar chart centered  */}
                  <g transform="translate(65, 230)">
                    <rect
                      className="bar bar-1"
                      x="15"
                      y="0"
                      width="40"
                      height="0"
                      fill="rgba(255, 255, 255, 0.5)"
                      rx="4"
                    />
                    <rect
                      className="bar bar-2"
                      x="70"
                      y="0"
                      width="40"
                      height="0"
                      fill="rgba(255, 255, 255, 0.6)"
                      rx="4"
                    />
                    <rect
                      className="bar bar-3"
                      x="125"
                      y="0"
                      width="40"
                      height="0"
                      fill="rgba(255, 255, 255, 0.7)"
                      rx="4"
                    />
                    <rect
                      className="bar bar-4"
                      x="180"
                      y="0"
                      width="40"
                      height="0"
                      fill="rgba(255, 255, 255, 0.85)"
                      rx="4"
                    />
                    <rect
                      className="bar bar-5"
                      x="235"
                      y="0"
                      width="40"
                      height="0"
                      fill="white"
                      rx="4"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4  */}
        <div className="transformation-scroll-item" data-step="4">
          <div className="transformation-scroll-content">
            <div className="step-text">
              <span className="step-number-badge">04</span>
              <h3 className="step-title" style={{ color: "inherit" }}>
                Thriving Practice
              </h3>
              <p className="step-subtitle">
                Higher profitability, happier patients, motivated team
              </p>

              <div style={{ marginTop: "30px" }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Key outcomes
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Higher Profitability
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Streamline operations and increase case acceptance
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>
                    Patient Satisfaction
                  </strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Deliver care that builds lasting loyalty
                  </span>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#667eea" }}>Team Motivation</strong>
                  <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    Create a culture of growth and excellence
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="transformation-scroll-visual">
            <div className="visual-card content-card">
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h4
                  style={{
                    fontSize: "56px",
                    fontWeight: "700",
                    marginBottom: "15px",
                  }}
                >
                  5-9%
                </h4>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  revenue boost from a <strong>one-star increase</strong> in
                  ratings
                </p>
                <p style={{ fontSize: "16px" }}>
                  → Better ratings = higher revenue
                </p>
              </div>
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                className="line-chart"
              >
                <rect
                  width="320"
                  height="320"
                  rx="20"
                  fill="rgba(255, 255, 255, 0.2)"
                />
                <line
                  x1="70"
                  y1="260"
                  x2="280"
                  y2="260"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                />
                <line
                  x1="70"
                  y1="70"
                  x2="70"
                  y2="260"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                />
                <text x="45" y="80" fill="white" fontSize="11">
                  High
                </text>
                <text x="45" y="165" fill="white" fontSize="11">
                  Med
                </text>
                <text x="45" y="260" fill="white" fontSize="11">
                  Low
                </text>
                <text x="100" y="280" fill="white" fontSize="11">
                  1★
                </text>
                <text x="150" y="280" fill="white" fontSize="11">
                  2★
                </text>
                <text x="200" y="280" fill="white" fontSize="11">
                  3★
                </text>
                <text x="250" y="280" fill="white" fontSize="11">
                  4★
                </text>
                <path
                  className="line-path"
                  d="M 100,240 L 150,200 L 200,140 L 250,90"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="300"
                  strokeDashoffset="300"
                  strokeLinecap="round"
                />
                <circle
                  className="line-point point-1"
                  cx="100"
                  cy="240"
                  r="6"
                  fill="white"
                  opacity="0"
                />
                <circle
                  className="line-point point-2"
                  cx="150"
                  cy="200"
                  r="6"
                  fill="white"
                  opacity="0"
                />
                <circle
                  className="line-point point-3"
                  cx="200"
                  cy="140"
                  r="6"
                  fill="white"
                  opacity="0"
                />
                <circle
                  className="line-point point-4"
                  cx="250"
                  cy="90"
                  r="6"
                  fill="white"
                  opacity="0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransformationSection
