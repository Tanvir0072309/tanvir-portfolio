import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <Label text="COMM_LINK" />
      <SectionTitle text="CONNECT WITH ME" />

      <div className="grid-triple">
        <a
          href="https://in.linkedin.com/in/tanvir-pathan-3b1b12337"
          target="_blank"
          className="card c-card linkedin"
          style={{ textAlign: "center" }}
        >
          <i className="fa-brands fa-linkedin" style={{ fontSize: "3rem" }}></i>
          <h4 style={{ marginTop: "15px", fontFamily: "var(--pixel-font)", fontSize: "0.6rem" }}>
            LINKEDIN
          </h4>
        </a>

        <a
          href="https://www.instagram.com/_mr_tanvir_0072"
          target="_blank"
          className="card c-card instagram"
          style={{ textAlign: "center" }}
        >
          <i className="fa-brands fa-instagram" style={{ fontSize: "3rem" }}></i>
          <h4 style={{ marginTop: "15px", fontFamily: "var(--pixel-font)", fontSize: "0.6rem" }}>
            INSTAGRAM
          </h4>
        </a>

        <a
          href="https://github.com/Tanvir0072309"
          target="_blank"
          className="card c-card github"
          style={{ textAlign: "center" }}
        >
          <i className="fa-brands fa-github" style={{ fontSize: "3rem" }}></i>
          <h4 style={{ marginTop: "15px", fontFamily: "var(--pixel-font)", fontSize: "0.6rem" }}>
            GITHUB
          </h4>
        </a>
      </div>
    </section>
  )
}
