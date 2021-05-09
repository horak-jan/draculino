import React from "react";

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
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1620593370/draculino/kids17_csdiqs.jpg"
          alt="kids outside"
          className="img1"
        />
      </div>
      <p>
        Nejstarší skupiny ve věku 10-12 a 13-15 let se navíc již také účastní
        jiu-jitsu kempů pro děti, které děláme na Starých Hamrech.
      </p>
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/dsdaneoq8/image/upload/v1620593307/draculino/gb-outside6_kysczb.jpg"
          alt="kids otside"
          className="img3"
        />
      </div>
    </div>
  );
};

export default HomeFour;
