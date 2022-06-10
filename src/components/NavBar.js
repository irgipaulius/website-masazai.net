import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const navItems = ["Pradžia", "Apie", "Masažai", "Kontaktai"];

  const [navBarHeight, setNavBarHeight] = useState(0);

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

  const navBarRef = useRef();

  useEffect(() => {
    function handleResize() {
      setNavBarHeight(navBarRef.current.clientHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [navBarHeight]);

  return (
    <>
      <nav className={navbar} id="navbar" ref={navBarRef}>
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
            {navItems.map((buttonText, index) => (
              <li className={nav_item} key={index}>
                <Link to={buttonText} smooth={true} offset={-navBarHeight} duration={1000}>
                  <div className={nav_links}>{buttonText}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
