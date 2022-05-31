import React from "react";

import PanelButton from "./PanelButton";

import styles from "./About.module.css";
import { AboutCheckmark } from "./MuiIcons";

export default function About() {
  const {
    about,
    about_container,
    about_text_container,
    about_title,
    about_subtitle,
    about_text,
    about_text_list_item,
    about_image_container,
    about_image,
  } = styles;

  return (
    <div className={about} id="Apie">
      <div className={about_container}>
        <div className={about_text_container}>
          <p className={about_title}>Sveiki,</p>
          <p className={about_subtitle}>aš esu Jelena</p>
          <ul className={about_text}>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>Pilnai kvalifikuota masažuotoja ir profesionali kinezeterapeutė.</span>
            </li>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>32 metų ir 15,000 valandų patirtis.</span>
            </li>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>Draugiška, linksma, švelniom rankom, taip toliau t.t.</span>
            </li>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quae dicta
                repellendus cumque sit nostrum aliquam aliquid libero eveniet?
              </span>
            </li>
          </ul>

          <PanelButton text="Išsami informacija" type="about" />
        </div>
        <div className={about_image_container}>
          <img className={about_image} src="/images/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
