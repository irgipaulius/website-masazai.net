import React, { forwardRef } from "react";

import styles from "./Hero.module.css";

const Hero = forwardRef((props, ref) => {
  const {
    hero,
    hero_container,
    hero_title,
    hero_subtitle,
    hero_about,
    hero_line,
  } = styles;

  return (
    <div className={hero} ref={ref}>
      <div className={hero_container}>
        <p className={hero_title}>MASAŽAS</p>
        <p className={hero_subtitle}>PAS JELENĄ</p>
        <div className={hero_line}></div>
        <p className={hero_about}>Profesionalus masažas Kaune</p>
      </div>
    </div>
  );
});

export default Hero;
