import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { AboutPanelContents } from "../panel/AboutPanel";
import { PricingPanelContents } from "../panel/PricingPanel";
import { ErrorPanelContents } from "../panel/ErrorPanel";

import "react-responsive-modal/styles.css";
import styles from "./modal.module.css";
import mdStyles from "../markdown.module.css";

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
 * @param {*} type "about" or "pricing"
 * @param {*} focus ID of the menu item to focus on when opened
 */
export default function Doo({ type, visible, setVisible, focus = 0 }) {
  const panelContents = SelectContent(type);
  const title = panelContents.title;
  const contents = panelContents.contents;

  // select the default content item
  const defaultContentItem = Object.keys(contents)[focus];

  const [contentItem, setContentItem] = useState(defaultContentItem);

  const {
    A_modal_root,
    A_modal_overlay,
    A_modal_container,
    A_modal,
    A_modal_close_button,
    A_modal_close_icon,

    panel_title,
    panel_menu_content_container,
    panel_menu,
    panel_item,
    panel_link,
    panel_link_selected,
    panel_content,
  } = styles;

  const { reactMarkDown } = mdStyles;

  useEffect(() => {
    setContentItem(Object.keys(contents)[focus]);
  }, [focus]);

  return (
    <>
      <Modal
        classNames={{
          root: A_modal_root,
          overlay: A_modal_overlay,
          modalContainer: A_modal_container,
          modal: A_modal,
          closeButton: A_modal_close_button,
          closeIcon: A_modal_close_icon,
        }}
        open={visible}
        onClose={() => setVisible(false)}
        center={true}
        animationDuration={700}
      >
        <div className={panel_title}>{title}</div>
        <div className={panel_menu_content_container}>
          <ul className={panel_menu}>
            {Object.keys(contents).map((menuItem, index) => (
              <li className={panel_item} key={index}>
                <div
                  className={
                    contentItem === menuItem ? panel_link_selected : panel_link
                  }
                  onClick={() => setContentItem(menuItem)}
                >
                  {menuItem}
                </div>
              </li>
            ))}
          </ul>
          <div className={panel_content}>
            <ReactMarkdown
              className={reactMarkDown}
              children={contents[contentItem]}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
