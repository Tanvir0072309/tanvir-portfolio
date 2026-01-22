import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"
import Card from "../common/Card"

export default function Experience() {
  return (
    <section id="experience">
      <Label text="MISSION_LOG" />
      <SectionTitle text="WORK HISTORY" />

      <div className="grid-pair">
        <Card>
          <h3>2024 – PRESENT</h3>
          <div className="company-name">JINARTH INFOTECH</div>
          <p className="desc-text">
            Django backend, dashboards, databases.
          </p>
        </Card>

        <Card>
          <h3>2023 – 2024</h3>
          <div className="company-name">TECHNOGUIDE INFOSOFT</div>
          <p className="desc-text">
            Full-Stack Intern – Django, Flask, EmailJS.
          </p>
        </Card>
      </div>
    </section>
  )
}
