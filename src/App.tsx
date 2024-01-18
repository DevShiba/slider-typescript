import React from "react";
import { ImageSlider } from "./ImageSlider";
import car1 from "./imgs/car1.jpg";
import car2 from "./imgs/car2.jpg";
import car3 from "./imgs/car3.jpg";

const images = [car1, car2, car3];

const App = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        
       aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={images} />;
    </div>
  );
};

export default App;
