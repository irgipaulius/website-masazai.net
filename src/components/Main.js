import React, { useState } from "react";

// import Services from "./Main/Services";
// import Popular from "./Main/Popular";
import { MainCheckmark } from "./MuiIcons";

import styles from "./Main.module.css";
import PanelButton from "./PanelButton";

function Main() {
  const {
    main,
    main_content,

    main_text_container,
    main_texts,
    main_title,
    main_text,

    main_image_container,
    points_container,
    points_container_title_pop,
    points_container_title,
    points_text,
    points_text_list_item,
  } = styles;

  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div className={main} id="main">
      <div className={main_content}>
        {/* <Services />
        <Popular /> */}
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

          <PanelButton text="Kainininkas" type="pricing" open={isVisible} />
        </div>
      </div>


      <div className={main_image_container}>
        <div className={points_container}>
          <p className={points_container_title_pop}>Populiariausi masažai</p>
          <ul className={points_text}>
            <li className={points_text_list_item} onClick={() => { 
              setIsVisible(false)
              setIsVisible(true)
              console.log('nu paspaudei, ir ka?')
            }}>
              <MainCheckmark />
              <span>Klasikinis kūno masažas</span>
            </li>
            <li className={points_text_list_item}>
              <MainCheckmark />
              <span>Klasikinis-segmentinis masažas</span>
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
}

export default Main;
