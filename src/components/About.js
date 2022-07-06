import React from "react";

import PanelButton from "./PanelButton";
import { AboutCheckmark } from "./MuiIcons";

import styles from "./About.module.css";

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
    <div className={about} id="about">
      <div className={about_container}>
        <div className={about_text_container}>
          <div className={about_image_container}>
            <img className={about_image} src="/images/profile.jpeg" alt="" />
          </div>

          <p className={about_title}>Sveiki,</p>
          <p className={about_subtitle}>aš esu Jelena</p>
          <ul className={about_text}>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>Pilnai kvalifikuota ir profesionali masažuotoja</span>
            </li>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>Virš 30 metų patirtis ir 10,000 atliktų masažų</span>
            </li>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <span>Dėmesinga, energinga, draugiška, delikačiomis ir švelniomis rankomis</span>
            </li>
            <li className={about_text_list_item}>
              <AboutCheckmark />
              <blockquote>
                <i>
                  „Lytėjimas - pirmasis ir svarbiausias žmogaus pojūtis. Tinkama profesionali masažo
                  technika lytėjimu efektyviai atlieka gydomąją, apsauginę ir raminančiąją
                  funkcijas, bei garantuoja pilnatvės, laimės ir saugumo jausmą.“
                </i>
              </blockquote>
            </li>
          </ul>

          <PanelButton text="Išsami informacija" type="about" />
        </div>
      </div>
    </div>
  );
}
