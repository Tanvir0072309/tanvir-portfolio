import Label from "../common/Label";
import SectionTitle from "../common/SectionTitle";

const images = [
  "/img_gallary/19808d6c-b188-4a8e-a525-f5759e01ada9.jpg",
  "/img_gallary/27e5776c-8980-4274-baa1-24c90621cb98.jpg",
  "/img_gallary/98f7a83a-1332-462e-830c-110c1a7f02f2.jpg",
  "/img_gallary/a9e4e5d8-d77e-46c2-988b-632e780a1ebd.jpg",
  "/img_gallary/b173ab72-4986-45d2-b5c3-85d71409d67d.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery">
      <Label text="MEDIA_VAULT" />
      <SectionTitle text="MY GALLERY" />

      <div className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt="Gallery" className="gallery-img" />
            <div className="gallery-text">MY WORK</div>
          </div>
        ))}
      </div>
    </section>
  );
}
