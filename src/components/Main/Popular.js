import React, { useState } from "react";

// import { MainCheckmark } from "../Icons";
import { MainCheckmarkRI } from "../Icons";

import ModalHandler from "../Modal/modalHandler";
import { PricingPanelContents } from "../panel/PricingPanel";

import styles from "../Main.module.css";

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
                key={id}
              >
                {/* <MainCheckmark /> */}
                <MainCheckmarkRI />
                <span>{contentNames[id]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ModalHandler
        type="pricing"
        visible={visible}
        setVisible={setVisible}
        focus={focus}
        setFocus={setFocus}
      />
    </>
  );
}
