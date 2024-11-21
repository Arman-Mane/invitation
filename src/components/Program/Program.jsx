import React from "react";
import churchImg from "../../assets/icons/church-1.png"
import glasses from "../../assets/icons/glasses.png";
import car from "../../assets/icons/car.png";
import "./program.scss"

const Program = ({program}) => {

  const {
    church,
    hall
  } = program

  return (
    <div className="program">
      <h1 className="scrollAnim">Օրվա ծրագիր</h1>
      <div className="item anim">
        <div className="clock"> {church?.time} </div>
        <div className="item-img">
          <img src={churchImg} alt="" />
        </div>

        <div className="clock">
          <span>{church?.title}</span>
          <span className="where">
           {church?.place} <br /> {church?.address}{" "}
          </span>
          <a
            href="https://yandex.ru/maps/-/CDS5BCKr"
            target="_blank"
            className="how-to-find"
          >
            Ինչպես հասնել
          </a>
        </div>
      </div>
      <div className="item anim">
        <div className="clock"> {hall?.time} </div>

        <div className="item-img">
          <img src={glasses} alt="" />
        </div>

        <div className="clock">
          <span>{hall?.title}</span>
          <span className="where">
            {hall?.place} <br /> {hall?.address}

          </span>
          <a
            href="https://yandex.ru/maps/-/CDS5BI-k"
            target="_blank"
            className="how-to-find"
          >
            Ինչպես հասնել
          </a>
        </div>
      </div>
      <div className="item anim">
        <div className="clock"> 00:00 </div>
        <div className="item-img">
          <img src={car} alt="" />
        </div>

        <div className="clock">
          <span>Ավարտ</span>
        </div>
      </div>
    </div>
  );
};

export default Program;
