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

  const {
    panel_overlay,
    panel_modal,
    panel_close_button,
    panel_close_icon,
    panel_btn,
    panel_container,
    panel_title,
    panel_menu_content_container,
    panel_menu,
    panel_item,
    panel_link,
    panel_content,
  } = styles;

  return (
    <>
      <button className={panel_btn} onClick={toggleVisible}>
        {text}
      </button>
      <Modal
        classNames={{
          overlay: panel_overlay,
          modal: panel_modal,
          closeButton: panel_close_button,
          closeIcon: panel_close_icon,
        }}
        open={visible}
        onClose={setHidden}
        center={true}
        animationDuration={500}
      >
        {/* these classNames are placeholders. please fix them all. */}
        <div className={panel_container}>
          <div className={panel_title}>{title}</div>
          <div className={panel_menu_content_container}>
            <ul className={panel_menu}>
              {Object.keys(contents).map((menuItem, index) => (
                <li className={panel_item} key={index}>
                  <div className={panel_link} onClick={() => setContentItem(menuItem)}>
                    {menuItem}
                  </div>
                </li>
              ))}
            </ul>
            <div className={panel_content}>{contents[contentItem]}</div>
          </div>
        </div>
      </Modal>
    </>
  );
}
