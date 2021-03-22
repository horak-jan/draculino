import React from "react";
import image1 from "../../styles/kids17.jpg";
import image3 from "../../styles/gb-outside6.jpg";

const HomeFour = () => {
  return (
    <div className="home-four">
      <h2>BRAZILSKÉ JIU-JITSU PRO NEJMENŠÍ</h2>
      <p>
        Nejmladší kategorie je od 4-6 let, byť je zde je kladen největší důraz
        na obecný pohybový rozvoj dítěte, už i zde objevují kouzlo sportovního
        jiu-jitsu a sebeobrany. Druhá skupina v rozmezí 7-9 let se již účastní i
        soutěží.
      </p>

      <div className="img-container">
        <img src={image1} alt="kids1" className="img1" />
      </div>
      <p>
        Nejstarší skupiny ve věku 10-12 a 13-15 let se navíc již také účastní
        jiu-jitsu kempů pro děti, které děláme na Starých Hamrech.
      </p>
      <div className="img-container">
        <img src={image3} alt="kids3" className="img3" />
      </div>
    </div>
  );
};

export default HomeFour;
