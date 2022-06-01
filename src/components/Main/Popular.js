import React from "react";

import { MainCheckmark } from "../MuiIcons";
import styles from "../Main.module.css";

export default function Popular() {
  const {
    main_image_container,
    points_container,
    points_container_title,
    points_text,
    points_text_list_item,
  } = styles;

  return (
    <>
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
    </>
  );
}
