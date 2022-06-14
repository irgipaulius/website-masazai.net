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
            Masažo paslaugos teikiamos profilaktiniais, išvaizdos koregavimo, kosmetiniais,
            celiulito gydymo, skausmų mažinimo ir antistresiniais tikslais.
          </p>
          <p className={main_text}>
            Masažo metu naudojami įvairūs efektyvūs šiuolaikinio masažo
            prietaisai, skirti tiksliau dozuoti procedūros
            intensyvumą kliento patogumui.
          </p>
          <p className={main_text}>
            Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti
            išsirinkti tinkamą procedūrą pagal asmeninius poreikius.
          </p>
          <p className={main_text}>
            Taip pat teikiu rekomendacijas masažo ilgalaikiams kursams.
          </p>
          <p className={main_text}>
            Dėl platesnės informacijos kreipkitės telefonu.
          </p>

          <PanelButton text="Kainininkas" type="pricing" />
        </div>
      </div>
    </>
  );
}
