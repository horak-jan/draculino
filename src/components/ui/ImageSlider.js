import React from "react";
import Slider from "infinite-react-carousel";

const ImageSlider = (props) => {
  let { slides } = props;

  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <img key={slide} src={slide} alt="" />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
