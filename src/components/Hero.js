import React from "react";

import styles from "./Hero.module.css";

export default function Hero() {
  const { hero, hero_container, hero_title, hero_subtitle, hero_about, hero_line } = styles;

  return (
    <div className={hero}>
      <div className={hero_container}>
        <p className={hero_title}>MASAŽAS</p>
        <p className={hero_subtitle}>PAS JELENĄ</p>
        <div className={hero_line}></div>
        <p className={hero_about}>Profesionalus masažas Kaune</p>
      </div>
    </div>
  );
}
