import React from "react";

import CheckIcon from "@material-ui/icons/Check";
import PhoneIcon from "@material-ui/icons/Phone";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";

export function AboutCheckmark() {
  const style = {
    fontSize: "3rem",
  };

  return <CheckIcon style={style} />;
}

export function MainCheckmark() {
  const style = {
    fontSize: "4.4rem",
    padding: "0.4rem",
    backgroundColor: "#ff59cd",
    color: "white",
  };

  return <CheckIcon style={style} />;
}

export function PhoneIconSvg() {
  const style = {
    fontSize: "3rem",
    marginRight: "1rem",
    verticalAlign: "middle",
  };

  return <PhoneIcon style={style} />;
}

export function EmailIconSvg() {
  const style = {
    fontSize: "2.4rem",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    verticalAlign: "middle",
  };

  // return <MailOutlineIcon style={style} />;
  return <MailIcon style={style} />;
}

export function FacebookIconSvg() {
  const style = {
    fontSize: "3rem",
    marginRight: "1rem",
    verticalAlign: "middle",
  };

  return <FacebookIcon style={style} />;
}

/*
- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/
