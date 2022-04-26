import React from "react";

import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      {/* <img className="background-image" src="/images/background.jpg" /> */}
      <div className="text-container">
        <h1 className="title">MASAŽAS</h1>
        <p className="title-subhead">PAS JELENĄ</p>
        <p className="about">Profesionalus masažas Kaune</p>
      </div>
    </div>
  );
}
