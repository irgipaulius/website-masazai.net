import React, { forwardRef } from "react";

import PanelButton from "./PanelButton";

import styles from "./Main.module.css";
import { MainCheckmark } from "./MuiIcons";

const Main = forwardRef((props, ref) => {
  const {
    main,
    main_content,
    main_text_container,
    main_texts,
    main_title,
    points_container_title,
    main_text,
    main_btn,
    main_image_container,
    points_container,
    points_text,
    points_text_list_item,
  } = styles;

  return (
    <div className={main} ref={ref} id="main">
      <div className={main_content}>
        <div className={main_text_container}>
          <div className={main_texts}>
            <p className={main_title}>Masažo paslaugos</p>
            <p className={main_text}>
              Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti
              išsirinkti tinkamą procedūrą pagal asmeninius poreikius.
            </p>
            <p className={main_text}>
              Taip pat siūlau rekomendacijas masažo ilgalaikiams kursams.{" "}
            </p>
            <p className={main_text}>
              Šitą tekstą reikia patvarkyti, kol kas tiesiog prirašiau laikinų
              sakinių. Šita pastraipa gali aprašyti daug įvairaus teksto apie
              siūlomas procedūras ir masažus, kurias galima siūlyti klientams.
            </p>
            <p className={main_text}>Dėl kainų teiraukitės telefonu.</p>

            <PanelButton text="Kainininkas" type="pricing" />
          </div>
        </div>
        <div className={main_image_container}>
          <div className={points_container}>
            <p className={points_container_title}>POPULIARIAUSI</p>
            <ul className={points_text}>
              <li className={points_text_list_item}>
                <MainCheckmark />
                <span>Klasikinis viso kūno masažas</span>
              </li>
              <li className={points_text_list_item}>
                <MainCheckmark />
                <span>Medaus masažas</span>
              </li>
              <li className={points_text_list_item}>
                <MainCheckmark />
                <span>Limfodrenažinis masažas</span>
              </li>
              <li className={points_text_list_item}>
                <MainCheckmark />
                <span>Chiromasažas masažas</span>
              </li>
              <li className={points_text_list_item}>
                <MainCheckmark />
                <span>Neurosedatyvinis-antistresinis masažas</span>
              </li>
              <li className={points_text_list_item}>
                <MainCheckmark />
                <span>Anticeliulitinis masažas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Main;
