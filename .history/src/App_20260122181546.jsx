import SideNav from "./components/Header/SideNav"
import MobileHeader from "./components/Header/MobileHeader"
import MobileMenu from "./components/Header/MobileMenu"

import Home from "./components/sections/Home"
import Experience from "./components/sections/Experience"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Gallery from "./components/sections/Gallery"
import Achievements from "./components/sections/Achievements"
import Certificates from "./components/sections/Certificates"
import Contact from "./components/sections/Contact"

export default function App() {
  return (
    <>
      <MobileHeader />
      <MobileMenu />
      <SideNav />

      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Gallery />
      <Achievements />
      <Certificates />
      <Contact />
    </>
  )
}
