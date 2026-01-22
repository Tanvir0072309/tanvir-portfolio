import "./App.css"

// HEADER
import SideNav from "./components/Header/SideNav"
import MobileHeader from "./components/Header/MobileHeader"
import MobileMenu from "./components/Header/MobileMenu"

// SECTIONS
import Home from "./components/sections/Home"
import Experience from "./components/sections/Experience"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Gallery from "./components/sections/Gallery"
import Achievements from "./components/sections/Achievements"
import Participation from "./components/sections/Participation"
import Contact from "./components/sections/Contact"
import Footer from "./components/common/Footer"


export default function App() {
  return (
    <>
      {/* HEADER */}
      <MobileHeader />
      <MobileMenu />
      <SideNav />

      {/* SECTIONS */}
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Gallery />
      <Achievements />
      <Participation />
      <Contact />
    </>
  )
}
