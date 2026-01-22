function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu ${open ? "active" : ""}`}>
      <div
        style={{ position: "absolute", top: 30, right: 30, fontSize: "2.5rem" }}
        onClick={onClose}
      >
        &times;
      </div>

      <a href="#home" onClick={onClose}>HOME</a>
      <a href="#experience" onClick={onClose}>EXPERIENCE</a>
      <a href="#skills" onClick={onClose}>STATS</a>
      <a href="#projects" onClick={onClose}>PROJECTS</a>
      <a href="#gallery" onClick={onClose}>GALLERY</a>
      <a href="#contact" onClick={onClose}>CONTACT</a>
    </div>
  )
}

export default MobileMenu
