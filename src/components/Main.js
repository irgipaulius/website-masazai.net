import React from "react";

import styles from "./Main.module.css";
import Services from "./Main/Services";
import Popular from "./Main/Popular";

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

  const visibility = null;

  return (
    <div className={main}>
      <div className={main_content}>
        <Services visibility={visibility} />
        <Popular visibility={visibility} />
      </div>
    </div>
  );
}

export default Main;
