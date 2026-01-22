import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Skills() {
  return (
    <section id="skills">
      <Label text="POWER_LEVEL" />
      <SectionTitle text="TECHNICAL STATS" />

      <div className="grid-pair">
        <div className="skill-group">
          {[
            ["PYTHON ", "85%"],
            ["DJANGO / FLASK", "80%"],
            ["HTNL / HTML 5", "92%"],
            ["CSS / CSS 3", "90%"],
          ].map(([name, value]) => (
            <div className="skill-item" key={name}>
              <div className="skill-info">
                <span>{name}</span>
                <span>{value}</span>
              </div>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: value }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skill-group">
          {[
            ["JAVASCRIPT", "65%"],
            ["BOOTSTRAP ( FRAMEWORK )", "96%"],
            ["SQL", "70%"],
            ["REACT / JS", "30%"],
          ].map(([name, value]) => (
            <div className="skill-item" key={name}>
              <div className="skill-info">
                <span>{name}</span>
                <span>{value}</span>
              </div>
              <div className="bar-bg">
                <div className="bar-fill" style={{ width: value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
