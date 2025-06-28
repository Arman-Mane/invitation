import React from "react";
import "./PhotoComp.css"
import image1 from "../../assets/images/2.JPG";
import image2 from "../../assets/images/3.JPG";
import image3 from "../../assets/images/4.JPG";
const PhotosComp = () => {
  return (
    <div className="photosComp">
      <div className="photo photo1" data-aos="fade-up"
     >
        <img src={image1} alt="" />
      </div>
      <div className="photo photo2" data-aos="fade-up"
     >
        <img src={image2} alt="" />
      </div>
      <div className="photo photo3" data-aos="fade-up"
     >
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default PhotosComp;
