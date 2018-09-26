import React from "react";
import Slider from "react-slick";
import slide_four from "../../resources/images/slide_four.jpg";
import slide_five from "../../resources/images/slide_five.jpg";
import slide_six from "../../resources/images/slide_six.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_six})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  );
};


export default Carrousel;
