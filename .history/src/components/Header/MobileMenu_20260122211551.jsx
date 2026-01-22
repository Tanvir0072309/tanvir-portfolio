export default function MobileMenu() {
  return (
    <div className="mobile-menu" id="mobileMenu">
      <div
        id="closeMenu"
        style={{
          position: "absolute",
          top: "30px",
          right: "30px",
          fontSize: "2.5rem",
          cursor: "pointer",
          fontFamily: "var(--pixel-font)",
        }}
      >
        &times;
      </div>f

      <a href="#home"><i className="fa-solid fa-house"></i> HOME</a>
      <a href="#experience"><i className="fa-solid fa-briefcase"></i> EXPERIENCE</a>
      <a href="#skills"><i className="fa-solid fa-bolt"></i> STATS</a>
      <a href="#projects"><i className="fa-solid fa-code"></i> PROJECTS</a>
      <a href="#gallery"><i className="fa-solid fa-image"></i> GALLERY</a>
      <a href="#achievements"><i className="fa-solid fa-trophy"></i> ACHIEVEMENTS</a>
      <a href="#certs"><i className="fa-solid fa-medal"></i> ITEMS</a>
      <a href="#contact"><i className="fa-solid fa-address-book"></i> CONTACT</a>
    </div>
  )
}
