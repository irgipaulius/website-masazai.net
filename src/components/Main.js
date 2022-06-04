import React from "react";

import Services from "./Main/Services";
import Popular from "./Main/Popular";

import styles from "./Main.module.css";

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
    points_container_title,
    points_text,
    points_text_list_item,
  } = styles;

  return (
    <div className={main}>
      <div className={main_content}>
        <Services />
        <Popular />
      </div>
    </div>
  );
}

export default Main;
