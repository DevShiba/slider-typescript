import { useState } from "react";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
        setImageIndex((index) => {
          if (index === 0) return imageUrls.length - 1;
          return index - 1;
        });
  }

  function showNextImage() {
        setImageIndex((index) => {
          if (index === imageUrls.length - 1) return 0;
          return index + 1;
        });
  }

  return (
    <div style={{ width: "100%", height: "100", position: "relative" }}>
      <img
        src={imageUrls[imageIndex]}
        alt="images"
        className="img-slider-img"
      />
      <button
        className="img-slider-btn"
        onClick={showPrevImage}
        style={{ left: 0 }}
      >
        <RiArrowLeftFill />
      </button>
      <button
        className="img-slider-btn"
        onClick={showNextImage}
        style={{ right: 0 }}
      >
        <RiArrowRightFill />
      </button>
    </div>
  );
}
