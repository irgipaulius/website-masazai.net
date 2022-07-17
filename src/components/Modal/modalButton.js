import React, { useState } from "react";

import "react-responsive-modal/styles.css";
import styles from "./modal.module.css";

import ModalHandler from "./modalHandler";

/**
 *
 * @param {*} text Button text
 * @param {*} type "about" or "pricing"
 * @param {*} focus ID of the menu item to focus on when opened
 */
export default function ModalButton({ text, type }) {
  const [visible, setVisible] = useState(false);

  const { modal_btn } = styles;

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={`${modal_btn} modal_btn animate__animated animate__fadeInLeft`}
        onClick={toggleVisible}
      >
        {text}
      </button>

      <ModalHandler type={type} visible={visible} setVisible={setVisible} />
    </>
  );
}
