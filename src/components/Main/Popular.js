import React from "react";
import { scroller } from "react-scroll";

import { MainCheckmarkRI } from "../Icons";
import { PricingPanelContents } from "../panel/PricingPanel";

import styles from "../Main.module.css";

export default function Popular() {
  const contentNames = Object.keys(PricingPanelContents.contents);
  const popularContentIds = [1, 3, 5, 6, 4, 7];

  const {
    main_image_container,
    points_container,
    points_container_title_pop,
    points_text,
    points_text_list_item,
  } = styles;

  const openService = (id) => {
    const contentKey = contentNames[id];
    scroller.scrollTo("service-descriptions", {
      duration: 700,
      smooth: true,
      offset: -80,
    });
    setTimeout(() => {
      document.dispatchEvent(
        new CustomEvent("openService", { detail: { contentKey } })
      );
    }, 500);
  };

  return (
    <div className={main_image_container}>
      <div
        className={`${points_container} points_container animate__animated animate__fadeInRight`}
      >
        <p className={points_container_title_pop}>Populiariausi masažai</p>
        <ul className={points_text}>
          {popularContentIds.map((id) => (
            <li
              className={points_text_list_item}
              onClick={() => openService(id)}
              key={id}
            >
              <MainCheckmarkRI />
              <span>{contentNames[id]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
