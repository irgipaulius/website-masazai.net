import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link, scroller } from "react-scroll";

import { PhoneIconSvg } from "./MuiIcons";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const navItems = [
    { text: "Pradžia", urlPath: "/", id: "hero" },
    { text: "Apie", urlPath: "/about", id: "about" },
    { text: "Masažai", urlPath: "/main", id: "main" },
    { text: "Kontaktai", urlPath: "/contacts", id: "contacts" },
  ];

  const {
    navbar,
    navbar_mob_container,
    navbar_line_container,
    navbar_mob,
    navbar_line,
    navbar_menu_container,
    nav_menu,
    nav_item,
    nav_item_div,
    nav_link,
    active,
  } = styles;

  const location = useLocation();

  const navBarRef = useRef();

  const handleScroll = (id) => {
    scroller.scrollTo(id, {
      duration: 1000,
      smooth: true,
      offset: -navBarRef.current.clientHeight,
    });
  };

  useEffect(() => {
    const findPath = navItems.find((item) => item.urlPath === location.pathname);

    if (findPath) {
      handleScroll(findPath.id);
    } else {
      handleScroll(navItems[0].id);
    }
  }, [location]);

  return (
    <>
      <nav className={navbar} id="navbar" ref={navBarRef}>
        <div className={navbar_mob_container}>
          <a className={navbar_mob} href="tel:+37067273695">
            <PhoneIconSvg />
            +370 672 736 95
          </a>
        </div>
        <div className={navbar_line_container}>
          <div className={navbar_line} />
        </div>
        <nav className={navbar_menu_container}>
          <ul className={nav_menu}>
            {navItems.map((navItem, index) => (
              <li className={nav_item} key={index}>
                <div className={nav_item_div}>
                  <NavLink
                    to={navItem.urlPath}
                    className={(isActive) => {
                      return isActive.isActive ? `${nav_link} ${active}` : nav_link;
                    }}
                  >
                    {navItem.text}
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
