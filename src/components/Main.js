import React from "react";

import Services from "./Main/Services";
import Popular from "./Main/Popular";

import styles from "./Main.module.css";

function Main() {
  const { main, main_content } = styles;

  return (
    <div className={main} id="main">
      <div className={main_content}>
        <Services />
        <Popular />
      </div>
    </div>
  );
}

export default Main;
