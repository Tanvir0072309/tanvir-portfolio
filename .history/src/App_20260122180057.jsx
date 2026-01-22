import { useState } from "react";

import SideNav from "./components/Header/SideNav";
import MobileHeader from "./components/Header/MobileHeader";
import MobileMenu from "./components/Header/MobileMenu";

// sections abhi baad me add honge
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MobileHeader onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <SideNav />

      {/* Sections yahan baad me aayenge */}
    </>
  );
}
