import React from "react";
import Slider from "infinite-react-carousel";

const ReadySlider = (props) => {
  let { Image1, Image2, Image3, StyleSettings, ImageText } = props;

  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
  };

  const DivStyle = {
    position: "relative",
    top: "-30vh",
    fontSize: "2.7rem",
    left: "5vw",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "monospace",
    zIndex: "10 !important",
  };

  const PStyle = { fontSize: "1.2rem", textTransform: "lowercase" };

  return (
    <div className="ready-slider">
      <Slider {...settings}>
        <div className="ready-slider-slide-one">
          <img src={Image1} style={StyleSettings} />
          {ImageText && (
            <div style={DivStyle}>
              <h2>{ImageText.text1a}</h2>
              <p style={PStyle}>{ImageText.text1b}</p>
            </div>
          )}
        </div>
        <div className="ready-slider-slide-two">
          <img src={Image2} style={StyleSettings} />
          {ImageText && (
            <div style={DivStyle}>
              <h2>{ImageText.text2a}</h2>
              <p style={PStyle}>{ImageText.text2b}</p>
            </div>
          )}
        </div>
        <div className="ready-slider-slide-three">
          <img src={Image3} style={StyleSettings} />
          {ImageText && (
            <div style={DivStyle}>
              <h2>{ImageText.text3a}</h2>
              <p style={PStyle}>{ImageText.text3b}</p>
            </div>
          )}
        </div>
      </Slider>
    </div>
  );
};

export default ReadySlider;
