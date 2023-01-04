import React from "react";
import { BsImages } from "react-icons/bs";
import ONE from "../img/One.webp";
import TWO from "../img/bag.webp";
import THREE from "../img/Three.webp";
import FOUR from "../img/Four.webp";
import FIVE from "../img/Five.webp";
import SIX from "../img/Six.webp";
import SEVEN from "../img/Seven.webp";
import EIGHT from "../img/Eight.webp";
import "./gallery.css";
const Gallery = () => {
  return (
    <>
      <div className="gallery-wrapper">
        <div className="gallery-head">
          <div className="gallery-title">
            <h1>
              Gallery <BsImages />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, porro.{" "}
            </p>
          </div>
        </div>
        <div className="gallery-cards">
          <div className="first-gallery">
            <div className="gimg-box">
              <img src={ONE} alt="" className="one" />
            </div>

            <div className="gimg-box">
              <img src={TWO} alt="" className="one" />
            </div>

            <div className="gimg-box">
              <img src={THREE} alt="" className="one" />
            </div>

            <div className="gimg-box">
              <img src={FOUR} alt="" className="one" />
            </div>
          </div>

          <div className="first-gallery">
            <div className="gimg-box">
              <img src={FIVE} alt="" className="one" />
            </div>

            <div className="gimg-box">
              <img src={SIX} alt="" className="one" />
            </div>

            <div className="gimg-box">
              <img src={SEVEN} alt="" className="one" />
            </div>

            <div className="gimg-box">
              <img src={EIGHT} alt="" className="one" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
