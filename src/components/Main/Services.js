import React from "react";

import PanelButton from "../PanelButton";

import styles from "../Main.module.css";

export default function Services() {
  const { main_text_container, main_texts, main_title, main_text } = styles;

  return (
    <>
      <div className={main_text_container}>
        <div className={main_texts}>
          <p className={main_title}>Masažo paslaugos</p>
          <p className={main_text}>
            Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti išsirinkti tinkamą
            procedūrą pagal asmeninius poreikius.
          </p>
          <p className={main_text}>Taip pat siūlau rekomendacijas masažo ilgalaikiams kursams. </p>
          <p className={main_text}>
            Šitą tekstą reikia patvarkyti, kol kas tiesiog prirašiau laikinų sakinių. Šita pastraipa
            gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus, kurias galima
            siūlyti klientams.
          </p>
          <p className={main_text}>Dėl kainų teiraukitės telefonu.</p>

          <PanelButton text="Kainininkas" type="pricing" />
        </div>
      </div>
    </>
  );
}
