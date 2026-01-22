import Label from "../common/Label";
import mydp from "../../assets/MyDp.jpeg";

export default function Home() {
    return (
        <section id="home">
            <Label text="BCA STUDENT" />

            <div className="hero-flex">
                <div className="hero-text">
                    <h1 style={{ fontSize: "4.5rem", color: "var(--primary)" }}>
                        I'M <br /> TANVIR KHAN
                    </h1>

                    <h2 style={{ fontFamily: "var(--retro-font)", fontSize: "2.8rem" }}>
                        FULL-STACK PYTHON DEVELOPER
                    </h2>

                    <p className="desc-text">
                        I’m a code-hungry developer focused on Python & Django.
                    </p>

                    <a href="mailto:mrtanvir0072@gmail.com" className="btn-main">
                        CONTACT ME <i className="fa-solid fa-paper-plane"></i>
                    </a>
                </div>

                <div className="image-pixel-border">
                   <img
  src={mydp}
  alt="Tanvir"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  }}
/>
                </div>
            </div>
        </section>
    );
}
