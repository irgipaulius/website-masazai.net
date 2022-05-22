import React, { useState } from "react";
import Rodal from "rodal";

import { AboutPanelContents } from "./panel/AboutPanel";
import { PricingPanelContents } from "./panel/PricingPanel";
import { ErrorPanelContents } from "./panel/ErrorPanel";

import "rodal/lib/rodal.css";

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

  return (
    <div>
      <button onClick={toggleVisible}>{text}</button>
      <Rodal
        visible={visible}
        onClose={setHidden}
        closeOnEsc={true}
        animation="slideDown"
        duration={1000}
      >
        {/* these classNames are placeholders. please fix them all. */}
        <div className="panel_container">
          <div className="panel_title">{title}</div>
          <div className="panel_menu_container">
            <ul className="panel_menu">
              {Object.keys(contents).map((menuItem, index) => (
                <li className="panel_item" key={index}>
                  <div
                    className="panel_link"
                    onClick={() => setContentItem(menuItem)}
                  >
                    {menuItem}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel_content">{contents[contentItem]}</div>
        </div>
      </Rodal>
    </div>
  );
}
