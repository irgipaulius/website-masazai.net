import React, { useState } from "react";

import ModalHandler from "./modalHandler";

import "react-responsive-modal/styles.css";
import styles from "./modal.module.css";

/**
 *
 * @param {*} text Button text
 * @param {*} type "about" or "pricing"
 * @param {*} focus ID of the menu item to focus on when opened
 */
export default function ModalButton({ text, type }) {
  const [visible, setVisible] = useState(false);

  // focus in an index of content items
  const [focus, setFocus] = useState(0);

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

      <ModalHandler
        type={type}
        visible={visible}
        setVisible={setVisible}
        focus={focus}
        setFocus={setFocus}
      />
    </>
  );
}
