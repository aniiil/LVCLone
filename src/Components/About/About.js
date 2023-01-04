import React from 'react';
import "./about.css";
import AB from "../img/C11.jpg"
import { BsPersonFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="about-wrapper">
      <div className="about-head">
            <div className="about-title">
              <h1>  About Us <BsPersonFill/> </h1>
                <p>Louis, Georges and Gaston-Louis Vuitton  pose with factory workers in front of a horse-drawn delivery van. Asnières, 1888. </p>
            </div>
        </div>
        <div className="about-data">
            <div className="about-img">
                <img className='ab-image' src={AB} alt="" />
            </div>
            <div className="about-text">
                <h3 className="ab-title">Our Story</h3>
                <div className="story">
Created by Georges Louis Vuitton in 1896 as a tribute to his father, the Monogram canvas, a highly coveted material that quickly became a sign of distinction and rarity. Today, the Monogram motif provides endless inspiration for contemporary re-interpretations by Louis Vuitton’s own Artistic Directors as well as artistic visionaries. Today, Louis Vuitton’s legacy is expressed through its rigorous spirit of innovation, the boldness of its creations and an uncompromising demand for excellence.

            </div>
            </div>
           
        </div>
      </div>
    </>
  )
}

export default About;
