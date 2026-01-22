import Label from "../common/Label"
import SectionTitle from "../common/SectionTitle"

import img1 from "../../assets/img_achivments/a8e2b494-47db-45a4-b730-228009d3d9d5.jpg"
import img2 from "../../assets/img_achivments/cf2930dc-f977-4511-aa6e-53b78419ea96.jpg"
import img3 from "../../assets/img_achivments/42d428fa-f68e-406c-b554-0672da9d1682.jpg"
import img4 from "../../assets/img_achivments/01ce6713-7cd5-4f43-94df-29b44f8c8951.jpg"
import img5 from "../../assets/img_achivments/2e66198c-74d7-4413-a558-849835ff3f46.jpg"
import img6 from "../../assets/img_achivments/36f0fdba-f23c-43e5-b121-a5d1c8edb557.jpg"
import img7 from "../../assets/img_achivments/c1f77eee-b668-49d1-aec8-18db12970003.jpg"
import img8 from "../../assets/img_achivments/97d72533-937a-4004-b3d5-fb4257ab70fe.jpg"
import img9 from "../../assets/img_achivments/fb672b79-e6c7-4531-84eb-4ef733356a71.jpg"

export default function Achievements() {
  return (
    <section id="achievements">
      <Label text="ACHIEVEMENTS" />
      <SectionTitle text="CERTIFICATE" />

      <div className="gallery-container" style={{ marginTop: "20px" }}>
        <GalleryItem img={img1} text="PYTHON CERTIFICATE" />
        <GalleryItem img={img2} text="JAVASCRIPT CERTIFICATE" />
        <GalleryItem img={img3} text="RESERCH PAPER CERTIFICAT" />
      </div>

      <div className="gallery-container" style={{ marginTop: "20px" }}>
        <GalleryItem img={img4} text="ENIGMA 2K24 1ST RANK CERTIFICAT" />
        <GalleryItem img={img5} text="AEKYAM 2.O WEB DESIGN 2ND RANK CERTIFICAT" />
        <GalleryItem img={img6} text="GOOD BUY 2K23 COMPITETION 3RD RENK" />
      </div>

      <div className="gallery-container" style={{ marginTop: "20px" }}>
        <GalleryItem img={img7} text="BEST LIBRARY USER 2024 CERTIFICAT" />
        <GalleryItem img={img8} text="BEST LIBRARY USER 2025 CERTIFICAT" />
        <GalleryItem img={img9} text="DIGITAL LITRACY BY AMUL COMPANY" />
      </div>
    </section>
  )
}

function GalleryItem({ img, text }) {
  return (
    <div className="gallery-item">
      <img src={img} alt={text} className="gallery-img" />
      <div className="gallery-text">{text}</div>
    </div>
  )
}
