import React, { useState } from "react";

import "react-responsive-modal/styles.css";
import styles from "./modal.module.css";

import Doo from "./modal";

/**
 *
 * @param {*} text Button text
 * @param {*} type "about" or "pricing"
 * @param {*} focus ID of the menu item to focus on when opened
 */
export default function ModalButton({ text, type }) {
  const [visible, setVisible] = useState(false);

  const { panel_btn } = styles;

  const toggleVisible = () => {
    console.log(`Setting visible to ${!visible}`);
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={`${panel_btn} panel_btn animate__animated animate__fadeInLeft`}
        onClick={toggleVisible}
      >
        {text}
      </button>
      <Doo type={type} visible={visible} setVisible={setVisible} />
    </>
  );
}
