export default function MobileHeader({ onMenuOpen }) {
  return (
    <header className="mobile-header">
      <div style={{ fontFamily: "var(--pixel-font)", fontSize: "0.7rem" }}>
        TANVIR.EXE
      </div>

      <div className="menu-btn" onClick={onMenuOpen}>
        MENU <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}
