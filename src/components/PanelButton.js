import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

import { AboutPanelContents } from "./panel/AboutPanel";
import { PricingPanelContents } from "./panel/PricingPanel";
import { ErrorPanelContents } from "./panel/ErrorPanel";

import "react-responsive-modal/styles.css";
import styles from "./PanelButton.module.css";

/**
 * @param {*} type "about" or "pricing"
 * @returns Panel contents object.
 */
const SelectContent = (type) => {
  switch (type) {
    case "about":
      return AboutPanelContents;
    case "pricing":
      return PricingPanelContents;
    default:
      return ErrorPanelContents;
  }
};

/**
 *
 * @param {*} text Button text
 * @param {*} type "about" or "pricing"
 * @param {*} focus ID of the menu item to focus on when opened
 */
export default function PanelButton({ text, type, focus = 0 }) {
  const panelContents = SelectContent(type);
  const title = panelContents.title;
  const contents = panelContents.contents;

  // select the default content item
  const defaultContentItem = Object.keys(contents)[focus];

  const [visible, setVisible] = useState(false);
  const [contentItem, setContentItem] = useState(defaultContentItem);

  const toggleVisible = () => setVisible(!visible);

  const setHidden = () => setVisible(false);

  /*
- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

  const { panel_btn, panel_modal, panel_overlay } = styles;

  const panel_container = {
    backgroundColor: "lightgrey",
    // color: "#333",
  };
  const panel_title = {
    fontSize: "3rem",
    textAlign: "center",
    margin: "0 auto 3.2rem auto",
    padding: "0 0 2.4rem 0",
    color: "#333",
    borderBottom: "3px solid #555",
  };
  const panel_menu_container = {
    color: "red",
    border: "1px dotted blue",

    display: "flex",
    gap: "2.4rem",
  };
  const panel_menu = {
    listStyle: "none",

    width: "30%",
    color: "#555",

    border: "1px solid grey",

    display: "flex",
    flexDirection: "column",
    gap: "1.6rem",
  };
  const panel_item = {
    border: "1px solid green",
  };
  const panel_link = {
    fontSize: "2rem",
    fontWeight: "600",
    lineHeight: "1.1",
    border: "1px solid orange",
    cursor: "pointer",
    display: "inline",
    // width: "auto",
  };

  const panel_content = {
    fontSize: "2rem",
    lineHeight: "1.6",
    width: "70%",

    border: "1px solid red",
  };

  return (
    <div>
      <button className={panel_btn} onClick={toggleVisible}>
        {text}
      </button>
      <Modal
        classNames={{
          modal: panel_modal,
          overlay: panel_overlay,
        }}
        open={visible}
        onClose={setHidden}
        center={true}
        animationDuration={500}
      >
        {/* these classNames are placeholders. please fix them all. */}
        <div style={panel_container} className="panel_container">
          <div style={panel_title}>{title}</div>
          <div style={panel_menu_container}>
            <ul style={panel_menu}>
              {Object.keys(contents).map((menuItem, index) => (
                <li style={panel_item} key={index}>
                  <div
                    style={panel_link}
                    onClick={() => setContentItem(menuItem)}
                  >
                    {menuItem}
                  </div>
                </li>
              ))}
            </ul>
            <div style={panel_content}>{contents[contentItem]}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
