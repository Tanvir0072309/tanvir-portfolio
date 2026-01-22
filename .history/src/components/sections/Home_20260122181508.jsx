import Label from "../common/Label"
import mydp from "../../assets/MyDp.jpeg"

export default function Home() {
  return (
    <section id="home">
      <Label text="BCA STUDENT" />

      <div className="hero-flex">
        <div className="hero-text">
          <h1 style={{ fontSize: "4.5rem", color: "var(--primary)", lineHeight: "1.1" }}>
            I'M <br /> TANVIR KHAN
          </h1>

          <h2 style={{ fontFamily: "var(--retro-font)", fontSize: "2.8rem", marginTop: "15px" }}>
            FULL-STACK PYTHON DEVELOPER
          </h2>

          <p className="desc-text" style={{ maxWidth: "700px", fontSize: "1.2rem" }}>
            I’m a code-hungry developer focused on turning complex logic into clean,
            scalable server-side reality. While I love exploring the full stack,
            my heart beats for <b>Python & Django</b>.
          </p>

          <a
            href="mailto:mrtanvir0072@gmail.com?subject=Contact%20from%20Portfolio"
            className="btn-main"
          >
            CONTACT ME <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>

        <div className="image-pixel-border">
          <img src={mydp} alt="Tanvir Khan" />
        </div>
      </div>
    </section>
  )
}
