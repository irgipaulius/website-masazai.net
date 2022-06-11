import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const navItems = [
    { text: "Pradžia", path: "/", id: "hero" },
    { text: "Apie", path: "/about", id: "about" },
    { text: "Masažai", path: "/main", id: "main" },
    { text: "Kontaktai", path: "/contacts", id: "contacts" },
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
    nav_links,
  } = styles;

  const location = useLocation();

  const navBarRef = useRef();

  const [navBarHeight, setNavBarHeight] = useState(0);

  const scrollSmoothHandler = (id) => {
    console.log("scrollSmoothHandler triggered");

    scroller.scrollTo(id, {
      duration: 1000,
      smooth: true,
      offset: -navBarHeight,
    });
    console.log(`scrolling offset: ${-navBarHeight}`);
  };

  const handleResize = () => {
    setNavBarHeight(navBarRef.current.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    console.log(navBarHeight, navBarRef.current.clientHeight);

    const navLinkToIdItem = navItems.find((navItemPath) => location.pathname === navItemPath.path);
    
    if (navLinkToIdItem) {
      scrollSmoothHandler(navLinkToIdItem.id);
    } else {
      scrollSmoothHandler(navItems[0].id);
    }
  }, [location, navBarHeight]);

  return (
    <>
      <nav className={navbar} ref={navBarRef}>
        <div className={navbar_mob_container}>
          <a className={navbar_mob} href="tel:+370612013136">
            +370 612 121 21
          </a>
        </div>
        <div className={navbar_line_container}>
          <div className={navbar_line} />
        </div>
        <nav className={navbar_menu_container}>
          <ul className={nav_menu}>
            {navItems.map((navItem, index) => (
              <li className={nav_item} key={index}>
                <div className={nav_links}>
                  <NavLink to={navItem.path}>{navItem.text}</NavLink>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
