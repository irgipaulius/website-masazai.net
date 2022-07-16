import React, { useState } from "react";

import { MainCheckmark } from "../MuiIcons";

import styles from "../Main.module.css";
import Doo from "../Modal/modal";
import { PricingPanelContents } from "../panel/PricingPanel";

export default function Popular() {
  const [focus, setFocus] = useState(0);

  const [visible, setVisible] = useState(false);

  const contentNames = Object.keys(PricingPanelContents.contents);
  const popularContentIds = [1, 3, 5, 6, 4, 7];

  const {
    main_image_container,
    points_container,
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
            {popularContentIds.map((id) => (
              <li
                className={points_text_list_item}
                onClick={() => {
                  setFocus(id);
                  setVisible(true);
                }}
              >
                <MainCheckmark />
                <span>{contentNames[id]}</span>
              </li>
            ))}

            {/* <li
              className={points_text_list_item}
              onClick={() => {
                setFocus(1);
                setVisible(true);
              }}
            >
              <MainCheckmark />
              <span>Klasikinis kūno masažas</span>
            </li>
            <li
              className={points_text_list_item}
              onClick={() => {
                setFocus(2);
                setVisible(true);
              }}
            >
              <MainCheckmark />
              <span>Klasikinis-segmentinis masažas</span>
            </li>
            <li
              className={points_text_list_item}
              onClick={() => {
                setFocus(3);
                setVisible(true);
              }}
            >
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
            </li> */}
          </ul>
        </div>
      </div>

      <Doo
        type={"pricing"}
        visible={visible}
        setVisible={setVisible}
        focus={focus}
      />
    </>
  );
}
