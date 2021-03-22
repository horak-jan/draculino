import React from "react";
import HomeOneContactMedia from "./HomeOneContactMedia";

const HomeOneContact = () => {
  return (
    <div className="home-one-contact">
      <HomeOneContactMedia />

      <p>
        <span className="home-contact-bold">mobil:</span> +420 724 711 515
      </p>
      <p>
        <span className="home-contact-bold">e-mail:</span>
        frydekmistek@draculino.cz
      </p>
    </div>
  );
};

export default HomeOneContact;
