import "../styles/components/footer.css"
import logo from "../assets/logos/bk-logo.png"
import Modal from "./Modal"

const Footer = ({ modalState, setModalState }) => {
  const openModal = (tab) => {
    setModalState({ isOpen: true, tab })
  }

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
            <img src={logo} alt="BrandKlout Logo" style={{ height: "28px" }} />
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
                onClick={(e) => {
                  e.preventDefault()
                  openModal("terms")
                }}
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 1)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.6)"
                }}
              >
                Terms
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  openModal("privacy")
                }}
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 1)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.6)"
                }}
              >
                Privacy
              </a>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  openModal("hipaa")
                }}
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  textDecoration: "none",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 1)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "rgba(255, 255, 255, 0.6)"
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

      <Modal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, tab: "privacy" })}
        initialTab={modalState.tab}
      />
    </footer>
  )
}

export default Footer
