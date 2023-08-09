import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div>
        <img
            src={process.env.PUBLIC_URL + "images/" + "3.jpg"}
            alt=""
            width="100%"
            height="100%"
            loading="lazy" 
          />
      </div>
      
      <div>
      <img
            src={process.env.PUBLIC_URL + "images/" + "4.jpg"}
            alt=""
            width="100%"
            height="100%"
            loading="lazy" 
          />
      </div>

      <div>
      <img
            src={process.env.PUBLIC_URL + "images/" + "a.jpg"}
            alt=""
            width="100%"
            height="100%"
            loading="lazy" 
          />
      </div>

    </Slider>
  );
}