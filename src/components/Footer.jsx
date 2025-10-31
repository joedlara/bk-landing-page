const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div>
          <div className="footer-logo">BrandKlout</div>
          <div style={{ marginTop: "20px" }}>
            <p
              style={{
                margin: "5px 0 0 0",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "14px",
              }}
            >
              BrandKlout, Inc.
            </p>
            <p
              style={{
                margin: "5px 0 0 0",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "14px",
              }}
            >
              555 Anton Blvd <br />
              Costa Mesa, CA 92626
            </p>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "20px", fontSize: "16px" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#"
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                Terms
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#"
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                Privacy
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#"
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                HIPAA
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025, BrandKlout Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
