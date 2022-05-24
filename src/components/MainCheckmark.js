import React from "react";

import CheckIcon from "@material-ui/icons/Check";

export default function MainCheckmark() {
  const style = {
    fontSize: "4.4rem",
    padding: "0.4rem",
    backgroundColor: "#ff59cd",
    color: "white",
  };

  return <CheckIcon style={style} />;
}
