import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Projects() {
  return (
    <section id="projects">
      <Label text="COMPLETED_MISSIONS" />
      <SectionTitle text="FEATURED PROJECTS" />

      <div className="grid-pair">
        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            01. GYM Tools Store
          </h4>
          <p className="desc-text" style={{ color: "#bbb" }}>
            I’m excited to share the Gym E-Commerce website I built during my internship at TechnoGuide! 🚀
            This project helped me apply my Django skills in a real-world scenario and understand the complete
            workflow of developing, designing, and deploying a dynamic website.
          </p>
          <a href="https://github.com/Tanvir0072309/GYM_Shop">[VIEW GITHUB]</a><br />
          <a href="https://gym-shop-gliu.onrender.com">[VIEW LIVE]</a>
        </div>

        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            02. Weather App
          </h4>
          <p className="desc-text" style={{ color: "#bbb" }}>
            During my internship at Techno Guid, I built a fully functional Weather Application using API
            connectivity.
          </p>
          <a href="https://github.com/Tanvir0072309/Weather-app">[VIEW GITHUB]</a><br />
          <a href="https://weather-app-c80b93.netlify.app/">[VIEW LIVE]</a>
        </div>
      </div>
    </section>
  )
}
