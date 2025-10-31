import "../styles/components/footer.css"

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
          flexWrap: "wrap",
          gap: "60px",
          marginBottom: "60px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "30px",
            }}
          >
            <div className="logo" style={{ fontSize: "24px" }}>
              BrandKlout
            </div>
          </div>
          <div style={{ color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.8" }}>
            <p style={{ margin: "0", fontWeight: "600" }}>BrandKlout, Inc.</p>
            <p style={{ margin: "5px 0 0 0" }}>555 Anton Blvd</p>
            <p style={{ margin: "5px 0 0 0" }}>Costa Mesa, CA 92626</p>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "20px", fontSize: "16px" }}>Company</h4>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
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
