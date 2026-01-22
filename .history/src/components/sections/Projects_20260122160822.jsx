import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"
import Card from "../common/Card"

export default function Projects() {
  return (
    <section id="projects">
      <Label text="COMPLETED_MISSIONS" />
      <SectionTitle text="FEATURED PROJECTS" />

      <div className="grid-pair">
        <Card className="dark">
          <h4>GYM Tools Store</h4>
          <p className="desc-text">Django E-Commerce Website</p>
        </Card>

        <Card className="dark">
          <h4>Weather App</h4>
          <p className="desc-text">API based weather app</p>
        </Card>
      </div>
    </section>
  )
}
