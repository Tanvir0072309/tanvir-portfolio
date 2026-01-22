import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Contact() {
  return (
    <section id="contact">
      <Label text="COMM_LINK" />
      <SectionTitle text="CONNECT WITH ME" />

      <div className="grid-triple">
        <a className="card c-card linkedin">LINKEDIN</a>
        <a className="card c-card instagram">INSTAGRAM</a>
        <a className="card c-card github">GITHUB</a>
      </div>
    </section>
  )
}
