import React from "react";
import ReadySlider from "../ui/ReadySlider";
import Home1 from "../../images/home1.jpg";
import Home2 from "../../images/home2.jpg";
import Home3 from "../../images/home3.jpg";

const StyleSettings = { width: "100%", height: "50vh" };
const ImageText = {
  text1a: "BJJ",
  text1b: "měj kontrolu",
  text2a: "MMA",
  text2b: "se srdcem gladiátora",
  text3a: "KONDIČNÍ BOX",
  text3b: "aby jsi udržel krok, musíš udržet dech",
};

const HomeLargeScreen = () => {
  return (
    <div className="home-large-screen">
      <ReadySlider
        Image1={Home1}
        Image2={Home2}
        Image3={Home3}
        StyleSettings={StyleSettings}
        ImageText={ImageText}
      />
    </div>
  );
};

export default HomeLargeScreen;
