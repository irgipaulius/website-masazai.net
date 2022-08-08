import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import { PhoneIconSvg } from "./Icons";

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
    nav_link,
    active,
  } = styles;

  const location = useLocation();

  const navBarRef = useRef();

  /** @returns id of the component to scroll to. */
  const getScrollItemId = () => {
    const findPath = navItems.find((item) => item.urlPath === location.pathname);

    // scroll to found navItem OR the first one.
    return findPath?.id || navItems[0].id;
  };

  useEffect(() => {
    scroller.scrollTo(getScrollItemId(), {
      duration: 1000,
      smooth: true,
      offset: -navBarRef.current.clientHeight,
    });
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
                <NavLink
                  to={navItem.urlPath}
                  className={({ isActive }) => nav_link + (isActive ? ` ${active}` : "")}
                >
                  {navItem.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
