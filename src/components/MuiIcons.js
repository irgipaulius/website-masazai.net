import React from "react";

import CheckIcon from "@material-ui/icons/Check";
import PhoneIcon from "@material-ui/icons/Phone";

import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import MenuBookIcon from "@material-ui/icons/MenuBook";

export function AboutCheckmark() {
  const style = {
    fontSize: "3rem",
  };

  return <CheckIcon style={style} />;
}

export function MainCheckmark() {
  const style = {
    fontSize: "5.6rem",
    padding: "0.8rem",
    backgroundColor: "var(--primary)",
    color: "white",
    borderRadius: "4px",
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

export function BlogIconSvg() {
  const style = {
    fontSize: "3rem",
    marginRight: "1rem",
    verticalAlign: "middle",
  };

  return <MenuBookIcon style={style} />;
}
