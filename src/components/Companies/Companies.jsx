import React from "react";
import "./Companies.css";
import prologis from "../../assets/prologis.png";
import towerImage from "../../assets/tower.png";
import equinixImage from "../../assets/equinix.png";
import realityImage from "../../assets/realty.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} alt="" />
        <img src={towerImage} alt="" />
        <img src={equinixImage} alt="" />
        <img src={realityImage} alt="" />
      </div>
    </section>
  );
};

export default Companies;
