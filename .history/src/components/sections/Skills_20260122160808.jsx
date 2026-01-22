import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Skills() {
  const skills = [
    ["PYTHON", "85%"],
    ["DJANGO / FLASK", "80%"],
    ["HTML", "92%"],
    ["CSS", "90%"],
    ["JAVASCRIPT", "65%"],
    ["BOOTSTRAP", "96%"],
    ["SQL", "70%"],
    ["REACT", "30%"],
  ]

  return (
    <section id="skills">
      <Label text="POWER_LEVEL" />
      <SectionTitle text="TECHNICAL STATS" />

      <div className="grid-pair">
        {skills.map(([name, val]) => (
          <div key={name} className="skill-item">
            <div className="skill-info">
              <span>{name}</span>
              <span>{val}</span>
            </div>
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: val }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
