import Label from "../common/Label";
import SectionTitle from "../common/SectionTitle";

// images import
import img1 from "/img_gallary/19808d6c-b188-4a8e-a525-f5759e01ada9.jpg";
import img2 from "../../assets/img_gallary/27e5776c-8980-4274-baa1-24c90621cb98.jpg";
import img3 from "../../assets/img_gallary/98f7a83a-1332-462e-830c-110c1a7f02f2.jpg";
import img4 from "../../assets/img_gallary/a9e4e5d8-d77e-46c2-988b-632e780a1ebd.jpg";
import img5 from "../../assets/img_gallary/b173ab72-4986-45d2-b5c3-85d71409d67d.jpg";

export default function Gallery() {
  const galleryImages = [
    { img: img1, title: "MY WORKSTATION SETUP" },
    { img: img2, title: "CONFERENCE EVENT 2024" },
    { img: img3, title: "LATE NIGHT CODING" },
    { img: img4, title: "MY DESK SPACE" },
    { img: img5, title: "EVENT MOMENT" },
  ];

  return (
    <section id="gallery">
      <Label text="MEDIA_VAULT" />
      <SectionTitle text="MY GALLERY" />

      <div className="gallery-container">
        {galleryImages.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={item.img}
              alt={item.title}
              className="gallery-img"
              style={{
                border: "5px solid red",   // 🔥 test border
                minHeight: "200px"
              }}
            />
            <div className="gallery-text">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
