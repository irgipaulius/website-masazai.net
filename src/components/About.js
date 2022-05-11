import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__text__container">
          <p className="about__title">Sveiki,</p>
          <p className="about__subtitle">aš esu Jelena</p>
          <ul className="about__text">
            <li>Pilnai kvalifikuota masažuotoja ir profesionali kinezeterapeutė.</li>
            <li>32 metų ir 15,000 valandų patirtis.</li>
            <li>Draugiška, linksma, švelniom rankom, taip toliau t.t.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quae dicta
              repellendus cumque sit nostrum aliquam aliquid libero eveniet?
            </li>
          </ul>

          <button className="about__btn">Išsami informacija</button>
        </div>
        <div className="about__image__container">
          <img className="about__image" src="/images/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
