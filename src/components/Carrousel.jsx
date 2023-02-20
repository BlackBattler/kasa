import "../styles/carrousel.scss";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import { useState } from "react";

// Image slider
export default function Carrousel({ imageSlider }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const background = {
    backgroundImage: `url(${imageSlider[sliderIndex]})`,
  };

  // If last picture go back to first one
  const nextSlide = () => {
    setSliderIndex(sliderIndex + 1);
    if (sliderIndex === imageSlider.length - 1) {
      setSliderIndex(0);
    }
  };

  // If first picture go to the last one
  const prevSlide = () => {
    setSliderIndex(sliderIndex - 1);
    if (sliderIndex === 0) {
      setSliderIndex(imageSlider.length - 1);
    }
  };

  return (
    <div className="carrousel" style={background}>
      {imageSlider.length > 1 && (
        // If more than 1 picture show arrows functionality
        <>
          <img
            className="carrousel_arrow carrousel_arrow_left"
            src={arrowLeft}
            alt="left arrow"
            onClick={prevSlide}
          />
          <img
            className="carrousel_arrow carrousel_arrow_right"
            src={arrowRight}
            alt="right arrow"
            onClick={nextSlide}
          />
          <p className="carrousel_counter">
            {sliderIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </div>
  );
}
