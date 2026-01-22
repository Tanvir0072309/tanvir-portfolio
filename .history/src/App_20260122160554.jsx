import { useState } from "react"

/* Header components */
import MobileHeader from "./components/Header/MobileHeader"
import MobileMenu from "./components/Header/MobileMenu"
import SideNav from "./components/Header/SideNav"

/* Sections */
import Home from "./components/sections/Home"
import Experience from "./components/sections/Experience"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Gallery from "./components/sections/Gallery"
import Achievements from "./components/sections/Achievements"
import Participation from "./components/sections/Participation"
import Contact from "./components/sections/Contact"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ===== HEADER / NAVIGATION ===== */}
      <MobileHeader onOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SideNav />

      {/* ===== PAGE SECTIONS ===== */}
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Gallery />
      <Achievements />
      <Participation />
      <Contact />

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          padding: "50px",
          background: "#000",
          color: "#fff",
          textAlign: "center",
          fontFamily: "var(--pixel-font)",
          fontSize: "0.6rem",
        }}
      >
        © 2026 TANVIR KHAN | PIXEL PERFECT ARCHITECT
      </footer>
    </>
  )
}

export default App
