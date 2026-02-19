import React from "react";

// React Icons: https://react-icons.github.io/react-icons/
// md - Material Design icons
import { MdCheck, MdPhone, MdMail, MdMenuBook } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export function MainCheckmarkRI() {
  const style = {
    fontSize: "5.6rem",
    padding: "0.8rem",
    backgroundColor: "rgba(255, 122, 215, 0.85)",
    color: "white",
    borderRadius: "4px",
    // "&:hover": { color: "red" },
  };
  return <MdCheck style={style} />;
}

export function AboutCheckmark() {
  const style = {
    fontSize: "3rem",
  };
  return <MdCheck style={style} />;
}

export function MainCheckmark() {
  const style = {
    fontSize: "5.6rem",
    padding: "0.8rem",
    backgroundColor: "rgba(255, 122, 215, 0.85)",
    color: "white",
    borderRadius: "4px",
  };
  return <MdCheck style={style} />;
}

export function PhoneIconSvg() {
  const style = {
    fontSize: "3rem",
    marginRight: "1rem",
    verticalAlign: "middle",
  };
  return <MdPhone style={style} />;
}

export function EmailIconSvg() {
  const style = {
    fontSize: "2.4rem",
    marginLeft: "0.8rem",
    marginRight: "0.8rem",
    verticalAlign: "middle",
  };
  return <MdMail style={style} />;
}

export function FacebookIconSvg() {
  const style = {
    fontSize: "3rem",
    marginRight: "1rem",
    verticalAlign: "middle",
  };
  return <FaFacebook style={style} />;
}

export function BlogIconSvg() {
  const style = {
    fontSize: "3rem",
    marginRight: "1rem",
    verticalAlign: "middle",
  };
  return <MdMenuBook style={style} />;
}
