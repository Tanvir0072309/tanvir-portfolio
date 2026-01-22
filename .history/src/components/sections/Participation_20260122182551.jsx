import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

import p1 from "../../assets/img_participation/340bda4c-dbf5-46c0-9598-1f45d563c711.jpg"
import p2 from "../../assets/img_participation/5d9974d9-a8b2-411b-8087-454c5b392f10.jpg"
import p3 from "../../assets/img_participation/704cdfd6-f7c0-4bc0-b0cd-090a86093e66.jpg"
import p4 from "../../assets/img_participation/a02fe446-1a1c-4d35-9cd6-fc92f9ea19c8.jpg"
import p5 from "../../assets/img_participation/af95a62a-332f-490c-b41c-2f06aaa6022f.jpg"
import p6 from "../../assets/img_participation/b9f24287-7cc8-462c-a483-ccd8a7c47565.jpg"
import p7 from "../../assets/img_participation/ca34abaf-2288-4467-aaba-c4fa77b2f191.jpg"
import p8 from "../../assets/img_participation/f4927076-9303-4612-a118-b8dc92af1e5e.jpg"

export default function Participation() {
  return (
    <section id="certs">
      <Label text="CERTIFICATES" />
      <SectionTitle text="PARTICIPATS" />

      <div className="slider-box">
        <Slide img={p1} text="1. AEKYAM 2.O PARTICIPATION ( 1 )" className="next" />
        <Slide img={p2} text="2. TECH DYNESTY BEAUTY WITH BRAIN PARTICIPATION" className="prev" />
        <Slide img={p3} text="3. DANCE COMPITETION 2024 PARTICIPATION" className="prev" />
        <Slide img={p4} text="4. AEKYAM 2.O WEB DESIGN PARTICIPATION" className="prev" />
        <Slide img={p5} text="5. AEKYAM 2.O PARTICIPATION ( 2 )" className="prev" />
        <Slide img={p6} text="6. TECH DYNESTY ANDHADHUN PARTICIPATION" className="prev" />
        <Slide img={p7} text="7. ENIGMA 2K24 PARTICIPATION" className="prev" />
        <Slide img={p8} text="TEACHER'S DAY PARTICIPATION" className="prev" />
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="btn-main">PREV</button>
        <button className="btn-main" style={{ marginLeft: "15px" }}>
          NEXT
        </button>
      </div>
    </section>
  )
}

function Slide({ img, text, className }) {
  return (
    <div className={`slide ${className}`} style={{ padding: 0, overflow: "hidden", background: "#000" }}>
      <img src={img} alt={text} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          color: "#fff",
          width: "100%",
          padding: "5px",
          fontFamily: "var(--pixel-font)",
          fontSize: "0.5rem",
          textAlign: "center",
        }}
      >
        {text}
      </div>
    </div>
  )
}
