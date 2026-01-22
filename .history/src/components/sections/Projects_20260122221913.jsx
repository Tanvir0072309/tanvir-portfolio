import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Projects() {
  return (
    <section id="projects">
      <Label text="COMPLETED_MISSIONS" />
      <SectionTitle text="FEATURED PROJECTS" />

      {/* ROW 1 */}
      <div className="grid-pair">
        {/* PROJECT 1 */}
        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            01. GYM Tools Store
          </h4>

          <p className="desc-text" style={{ color: "#bbb" }}>
            I’m excited to share the Gym E-Commerce website I built during my internship at TechnoGuide! 🚀
            <br /><br />
            This project helped me apply my Django skills in a real-world scenario and understand the complete
            workflow of developing, designing, and deploying a dynamic website.
          </p>

          <a
            href="https://github.com/Tanvir0072309/GYM_Shop"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW GITHUB]
          </a>

          <br />

          <a
            href="https://gym-shop-gliu.onrender.com"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LIVE]
          </a>
        </div>

        {/* PROJECT 2 */}
        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            02. Weather App
          </h4>

          <p className="desc-text" style={{ color: "#bbb" }}>
            During my internship at TechnoGuide, I built a fully functional Weather Application using API
            connectivity.
            <br /><br />
            This project helped me understand how real-time data is fetched, processed, and displayed
            in a clean, user-friendly interface.
          </p>

          <a
            href="https://github.com/Tanvir0072309/Weather-app"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW GITHUB]
          </a>

          <br />

          <a
            href="https://weather-app-c80b93.netlify.app/"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LIVE]
          </a>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="grid-pair" style={{ marginTop: "20px" }}>
        {/* PROJECT 3 */}
        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            03. Hotel Room Service
          </h4>

          <p className="desc-text" style={{ color: "#bbb" }}>
            Created a hotel room service web page during my internship at Jinarth Infotech.
            <br /><br />
            Designed an interactive menu and ordering interface to improve guest convenience.
            Prepared a detailed project report covering features, UI/UX design, and implementation process.
            Focused on responsive design and smooth functionality.
          </p>

          <a
            href="https://github.com/Tanvir0072309/Hotel_Service_Site"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW GITHUB]
          </a>

          

          <a
            href="https://hotel-service-site.netlify.app/"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LIVE]
          </a>
        </div>

        {/* PROJECT 4 */}
        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            04. TechWeavers – Website Selling Platform
          </h4>

          <p className="desc-text" style={{ color: "#bbb" }}>
            This platform was created to help students easily sell their websites to other people.
            <br /><br />
            The idea was to provide a simple, clean, and user-friendly interface where creators can
            showcase and sell their web projects.
          </p>

          <a
            href="https://chic-puppy-b71a4d.netlify.app/"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LIVE]
          </a>
        </div>
      </div>

      {/* ROW 3 – PORTFOLIO PROJECT */}
      <div className="grid-pair" style={{ marginTop: "20px" }}>
        <div className="card" style={{ background: "#000", color: "#fff" }}>
          <h4 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.8rem", color: "var(--primary)" }}>
            05. Personal Portfolio (React + Vite)
          </h4>

          <p className="desc-text" style={{ color: "#bbb" }}>
            This is my personal portfolio website built using React and Vite.
            <br /><br />
            It showcases my skills, projects, achievements, and participation records using a
            pixel-themed UI design. The project focuses on performance, clean component structure,
            and responsive design.
          </p>

          <a
            href="https://github.com/Tanvir0072309/tanvir-portfolio"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW GITHUB]
          </a>
          <a
            href="https://hotel-service-site.netlify.app/"
            target="_blank"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LIVE]
          </a>
        </div>
      </div>
    </section>
  )
}
