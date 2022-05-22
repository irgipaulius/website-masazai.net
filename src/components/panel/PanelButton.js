import { useState } from "react";
import Rodal from "rodal";

import AboutPanel from "./AboutPanel";
import PricingPanel from "./PricingPanel";
import ErrorPanel from "./ErrorPanel";

import "rodal/lib/rodal.css";

/**
 *
 * @param {*} text Button text
 * @param {*} type "about" or "pricing"
 * @param {*} focus ID of the menu item to focus on when opened
 */
export default function PanelButton(text, type, focus = 0) {
  const { visible, setVisible } = useState(false);

  const toggleVisible = () => setVisible(!visible);

  const setHidden = () => setVisible(false);

  function selectPanel() {
    switch (type) {
      case "about":
        return <AboutPanel focus={focus} />;
      case "pricing":
        return <PricingPanel focus={focus} />;
      default:
        return <ErrorPanel />;
    }
  }

  return (
    <div>
      <button onClick={toggleVisible}>{text}</button>
      <Rodal
        visible={visible}
        onClose={setHidden}
        closeOnEsc="true"
        animation="slideDown"
      >
        {selectPanel()}
      </Rodal>
    </div>
  );
}
