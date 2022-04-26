import React from "react";

import styles from "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text__container">
          <p className="about__title">Sveiki</p>
          <p className="about__subtitle">as esu Jelena</p>
          <p className="about__text">dlajkshdkjahskjdhakjshdkj</p>
        </div>
        <div className="about__image__container">
          <img className="about__image" src="/images/profile.jpeg" />
        </div>
      </div>
    </div>
  );
}
