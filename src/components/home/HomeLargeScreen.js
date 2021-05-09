import React from "react";
import SliderWithText from "../ui/SliderWithText";

const StyleSettings = { width: "100%", height: "50vh" };
const ImageAndText = [
  {
    texta: "BJJ",
    textb: "měj kontrolu",
    imgSrc:
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1620496440/domy/home1_kwk0hn.jpg",
  },
  {
    texta: "MMA",
    textb: "se srdcem gladiátora",
    imgSrc:
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1620496525/domy/home2_ra26tk.jpg",
  },
  {
    texta: "KONDIČNÍ BOX",
    textb: "aby jsi udržel krok, musíš udržet dech",
    imgSrc:
      "https://res.cloudinary.com/dsdaneoq8/image/upload/v1620496543/domy/home3_dc4u2j.jpg",
  },
];

const HomeLargeScreen = () => {
  return (
    <div className="home-large-screen">
      <SliderWithText
        StyleSettings={StyleSettings}
        imageAndText={ImageAndText}
      />
    </div>
  );
};

export default HomeLargeScreen;
