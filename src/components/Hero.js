import React from "react";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <p className={styles.hero_title}>MASAŽAS</p>
        <p className={styles.hero_subtitle}>PAS JELENĄ</p>
        <div className={styles.hero_line}></div>
        <p className={styles.hero_about}>Profesionalus masažas Kaune</p>
      </div>
    </div>
  );
}
