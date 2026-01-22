import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Experience() {
  return (
    <section id="experience">
      <Label text="MISSION_LOG" />
      <SectionTitle text="WORK HISTORY" />

      <div className="grid-pair">
        <div className="card">
          <h3 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.7rem", color: "#666" }}>
            2024 - PRESENT
          </h3>
          <div className="company-name">JINARTH INFOTECH</div>
          <p className="desc-text">
            I'm a web developer skilled in HTML, CSS, JavaScript, and Python. I recently developed a college
            dashboard using Django, where I handled backend logic and database management. I enjoy building
            full-featured web applications and constantly aim to improve my coding skills through real-world
            projects and continuous learning.
          </p>
          <a
            href="https://www.linkedin.com/company/jinarth-infotech/posts/?feedView=all"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LINKEDIN PROFILE]
          </a>
        </div>

        <div className="card">
          <h3 style={{ fontFamily: "var(--pixel-font)", fontSize: "0.7rem", color: "#666" }}>
            2023 - 2024
          </h3>
          <div className="company-name">TECHNOGUIDE INFOSOFT PVT. LTD.</div>
          <p className="desc-text">
            Worked as a Full-Stack Intern at Technoguide, where I developed web applications using Python with
            Django and Flask along with HTML, CSS, and JavaScript. Implemented API connectivity and integrated
            EmailJS for email-based functionalities. Gained hands-on experience with the Software Development
            Life Cycle (SDLC) and worked in an Agile development environment
          </p>
          <a
            href="https://www.linkedin.com/company/technoguideinfosoft/posts/?feedView=all"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--pixel-font)",
              fontSize: "0.5rem",
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            [VIEW LINKEDIN PROFILE]
          </a>
        </div>
      </div>
    </section>
  )
}
