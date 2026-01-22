import { useState } from "react"
import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

export default function Participation() {
  const [idx, setIdx] = useState(0)

  return (
    <section id="certs">
      <Label text="CERTIFICATES" />
      <SectionTitle text="PARTICIPATION" />

      <div className="slider-box">
        <div className="slide active">SLIDE {idx + 1}</div>
      </div>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <button onClick={() => setIdx(idx - 1)}>PREV</button>
        <button onClick={() => setIdx(idx + 1)}>NEXT</button>
      </div>
    </section>
  )
}
