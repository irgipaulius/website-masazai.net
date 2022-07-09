import React from "react";

import styles from "./Hero.module.css";

export default function Hero() {
  const { hero, hero_container, hero_title, hero_subtitle, hero_about, hero_line } = styles;

  return (
    <div className={hero} id="hero">
      <div className={hero_container}>
        <p className={`${hero_title} hero_title animate__animated animate__fadeInDown`}>MASAŽAS</p>
        <p className={`${hero_subtitle} hero_subtitle animate__animated animate__fadeInDown`}>
          PAS JELENĄ
        </p>
        <div className={`${hero_line} hero_line animate__animated animate__fadeIn`}></div>
        <p className={`${hero_about} hero_about animate__animated animate__fadeInDown`}>
          Profesionalus masažas Kaune
        </p>
      </div>
    </div>
  );
}
