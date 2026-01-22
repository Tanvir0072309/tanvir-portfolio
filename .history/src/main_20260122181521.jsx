import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// 🔥 MOBILE MENU JS
setTimeout(() => {
  const menu = document.getElementById("mobileMenu")
  const openBtn = document.getElementById("openMenu")
  const closeBtn = document.getElementById("closeMenu")

  if (openBtn && closeBtn) {
    openBtn.onclick = () => menu.classList.add("active")
    closeBtn.onclick = () => menu.classList.remove("active")
  }
}, 500)
