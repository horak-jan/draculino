import React from "react";
import Ig from "../../styles/home-ig.png";
import Fb from "../../styles/home-fb.png";
import Yt from "../../styles/home-yt.png";

const HomeOneContactMedia = () => {
  return (
    <div className="home-one-contact-media">
      <a href="https://www.instagram.com/draculino.frydekmistek/">
        <img src={Ig} alt="media icon instagram" />
      </a>
      <a href="https://www.youtube.com/channel/UCV4DqyU9sKgL8H-TiJ3Echw">
        <img src={Yt} alt="media icon youtube" />
      </a>
      <a href="https://www.facebook.com/draculino.frydekmistek">
        <img src={Fb} alt="media icon facebook" />
      </a>
    </div>
  );
};

export default HomeOneContactMedia;
