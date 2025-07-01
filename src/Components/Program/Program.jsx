import React from "react";
import "./Program.css";
import programImg1 from "../../assets/images/church.png";
import programImg2 from "../../assets/images/glasses.png";
import programImg3 from "../../assets/images/car.png";
import Line from "../Line/Line";

const Program = () => {
  return (
    <div className="program">
      <h2 className="programTitle" data-aos="fade-up">Օրվա Ծրագիր</h2>
      <div className="programItem">
        <div className="programItem_img" data-aos="fade-up">
          <img src={programImg1} alt="church" />
        </div>
        <h3 className="programItem_title" data-aos="fade-up">Պսակադրություն</h3>
        <div className="programItem_time" data-aos="fade-up">15:00</div>
        <div className="programItem_place" data-aos="fade-up">Սուրբ Գայանե եկեղեցի</div>

        <div className="place-photo church-photo" data-aos="zoom-in">
          <a
            href="https://yandex.com/maps/-/CHadjAJn"
            target="_blank"
            className="How_to_get_there"
          >
            Ինչպես հասնել
          </a>
        </div>
      </div>

      <Line />
      <div className="programItem">
        <div className="programItem_img" data-aos="fade-up">
          <img src={programImg2} alt="church" />
        </div>
        <h3 className="programItem_title" data-aos="fade-up">Հանդիսություն</h3>
        <div className="programItem_time" data-aos="fade-up">17:00</div>
        <div className="programItem_place" data-aos="fade-up">Արև հանդիսությունների սրահ</div>

        <div className="place-photo restoran-photo" data-aos="zoom-in">
          <a
            href="https://yandex.com/maps/-/CHaZ7Dl1"
            target="_blank"
            className="How_to_get_there"
          >
            Ինչպես հասնել
          </a>
        </div>
      </div>
      <Line />

      <div className="programItem">
        <div className="programItem_img" data-aos="fade-up">
          <img src={programImg3} alt="church" />
        </div>
        <h3 className="programItem_title" data-aos="fade-up">Ավարտ</h3>
        <div className="programItem_time" data-aos="fade-up">00:00</div>

     
      </div>

     
    </div>
  );
};

export default Program;
