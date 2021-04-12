import React from "react";

import { useStateValue } from "../State";
import All from "../components/kurzy/KurzyDetails.json";
import ReadySlider from "../components/ui/ReadySlider";
const SportDetails = () => {
  const [{ selectedSport }, dispatch] = useStateValue("");
  //filter picked sport
  const sportToDisplay = All.filter((el) => el.name === selectedSport);
  const {
    name,
    firstP,
    secondP,
    header,
    singleImage,
    multipleImages,
    cities,
  } = sportToDisplay[0];
  console.log(multipleImages.one);
  //images for carousel
  const images = {
    Image1: multipleImages[0],
    Image2: multipleImages[1],
    Image3: multipleImages[2],
  };
  //style setting for carousel
  const StyleSettings = { width: "100%", height: "50vh" };

  return (
    <div className="sport-details">
      <ReadySlider StyleSettings={StyleSettings} images={images} />
      <ul>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
      <h2>{name}</h2>
      <div className="ps">
        <p>{firstP}</p>
        <h3>{header}</h3>
        <img src={singleImage} className="singleImg" alt={name} />
        <p>{secondP}</p>
      </div>
    </div>
  );
};

export default SportDetails;
