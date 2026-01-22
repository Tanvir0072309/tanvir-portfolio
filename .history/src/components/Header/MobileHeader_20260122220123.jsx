export default function MobileHeader() {
  return (
    <header className="mobile-header">
      <div style={{ fontFamily: "var(--pixel-font)", fontSize: "0.7rem" }}>
        TANVIR PORTFOLOI
      </div>
      <div className="menu-btn" id="openMenu">
        MENU <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  )
}
