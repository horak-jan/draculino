import React from "react";
import Slider from "infinite-react-carousel";

const SliderWithText = (props) => {
  let { StyleSettings, imageAndText } = props;

  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
  };

  return (
    <div className="slider-with-text">
      <Slider {...settings}>
        {imageAndText.map((slide) => (
          <div className="single-slide" key={slide.imgSrc}>
            <img src={slide.imgSrc} style={StyleSettings} alt="" />

            <div className="single-slide-content">
              <h2>{slide.texta}</h2>
              <p>{slide.textb}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderWithText;
