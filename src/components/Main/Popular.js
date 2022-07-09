import React from "react";

import { MainCheckmark } from "../MuiIcons";

import styles from "../Main.module.css";

export default function Popular() {
  const {
    main_image_container,
    points_container,
    points_container_title,
    points_container_title_pop,
    points_text,
    points_text_list_item,
  } = styles;

  return (
    <>
      <div className={main_image_container}>
        <div
          className={`${points_container} points_container animate__animated animate__fadeInRight`}
        >
          <p className={points_container_title_pop}>Populiariausi masažai</p>
          <ul className={points_text}>
            <li className={points_text_list_item}>
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
    </>
  );
}
