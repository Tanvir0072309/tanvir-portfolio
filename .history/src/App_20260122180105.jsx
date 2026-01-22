import { useState } from "react";

import SideNav from "./components/Header/SideNav";
import MobileHeader from "./components/Header/MobileHeader";
import MobileMenu from "./components/Header/MobileMenu";

import Home from "./components/sections/Home";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileHeader onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <SideNav />

      <Home />
    </>
  );
}
