import React from "react";
import "./Program.css";
import programImg1 from "../../assets/images/church.png";
import programImg2 from "../../assets/images/glasses.png";
import programImg3 from "../../assets/images/car.png";
import Line from "../Line/Line";

const Program = () => {
  return (
    <div className="program">
      <h2 className="programTitle">Օրվա Ծրագիր</h2>
      <div className="programItem">
        <div className="programItem_img">
          <img src={programImg1} alt="church" />
        </div>
        <h3 className="programItem_title">Պսակադրություն</h3>
        <div className="programItem_time">15:00</div>
        <div className="programItem_place">Սուրբ Գայանե եկեղեցի</div>

        <div className="place-photo church-photo">
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
        <div className="programItem_img">
          <img src={programImg2} alt="church" />
        </div>
        <h3 className="programItem_title">Հանդիսություն</h3>
        <div className="programItem_time">17:00</div>
        <div className="programItem_place">Արև հանդիսությունների սրահ</div>

        <div className="place-photo arev-photo">
          <a
            href="https://yandex.com/maps/-/CHaZ7Dl1"
            target="_blank"
            className="How_to_get_there"
          >
            Ինչպես հասնել
          </a>
        </div>
      </div>

      {/* <div className="message">
        <h2>Խնդրում ենք <br /> եկեղեցի և հանդիսությունների սրահ <br /> ներկայանալ նշված ժամից 15 րոպե շուտ։</h2>
      </div> */}
      <Line />

      <div className="programItem">
        <div className="programItem_img">
          <img src={programImg3} alt="church" />
        </div>
        <h3 className="programItem_title">Ավարտ</h3>
        <div className="programItem_time">00:00</div>

     
      </div>

     
    </div>
  );
};

export default Program;
