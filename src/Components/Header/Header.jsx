import React from "react";
import "./Header.css";
import mainPhoto from "../../assets/images/1.JPG";

const Header = () => {
  return (
    <header>
      <div className="names">
        <h1 className="name">ԱրՄան</h1>
        <h2 className="and">և</h2>
        <h1 className="name">Մանե</h1>
      </div>
      <div className="photo">
        <img src={mainPhoto} alt="" />
      </div>
      <div className="date">
      Օգոստոս 7 <br /> 2025
      </div>
    </header>
  );
};

export default Header;
