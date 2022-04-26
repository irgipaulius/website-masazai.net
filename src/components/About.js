import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text__container">
          <p className="about__title">Sveiki</p>
          <p className="about__subtitle">as esu Jelena</p>
          <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quae dicta repellendus cumque sit nostrum aliquam aliquid libero eveniet?</p>
        </div>
        <div className="about__image__container">
          <img className="about__image" src="/images/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
