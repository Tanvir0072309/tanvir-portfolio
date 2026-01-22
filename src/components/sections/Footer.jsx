export default function Footer() {
  return (
    <footer
      style={{
        padding: "50px 20px",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        fontFamily: "var(--pixel-font)",
        fontSize: "0.6rem",
        borderTop: "5px solid #000",
        boxShadow: "0 -6px 0 var(--primary)",
      }}
    >
      <div style={{ marginBottom: "15px" }}>
        © 2026 <span style={{ color: "var(--primary)" }}>TANVIR KHAN</span>
      </div>

      <div style={{ marginBottom: "15px" }}>
        FULL-STACK PYTHON DEVELOPER
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href="https://github.com/Tanvir0072309"
          target="_blank"
          style={{ color: "#fff", fontSize: "1.2rem" }}
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/tanvir-pathan-3b1b12337"
          target="_blank"
          style={{ color: "#fff", fontSize: "1.2rem" }}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.instagram.com/_mr_tanvir_0072"
          target="_blank"
          style={{ color: "#fff", fontSize: "1.2rem" }}
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  )
}
