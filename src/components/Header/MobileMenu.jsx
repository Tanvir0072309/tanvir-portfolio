export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "30px",
          fontSize: "2.5rem",
          cursor: "pointer",
          fontFamily: "var(--pixel-font)",
        }}
        onClick={onClose}
      >
        &times;
      </div>

      <a href="#home" onClick={onClose}><i className="fa-solid fa-house"></i> HOME</a>
      <a href="#experience" onClick={onClose}><i className="fa-solid fa-briefcase"></i> EXPERIENCE</a>
      <a href="#skills" onClick={onClose}><i className="fa-solid fa-bolt"></i> STATS</a>
      <a href="#projects" onClick={onClose}><i className="fa-solid fa-code"></i> PROJECTS</a>
      <a href="#gallery" onClick={onClose}><i className="fa-solid fa-image"></i> GALLERY</a>
      <a href="#achievements" onClick={onClose}><i className="fa-solid fa-code"></i> ACHIEVEMENTS</a>
      <a href="#certs" onClick={onClose}><i className="fa-solid fa-medal"></i> ITEMS</a>
      <a href="#contact" onClick={onClose}><i className="fa-solid fa-address-book"></i> CONTACT</a>

    </div>
  );
}
