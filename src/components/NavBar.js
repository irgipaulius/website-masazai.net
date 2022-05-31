import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const navItems = ["Pradžia", "Apie", "Masažai", "Kontaktai"];

  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

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

  return (
    <>
      <nav className={navbar} id="navbar">
        <div className={navbar_mob_container}>
          {/* <div className={styles["navbar-mob"]}>+370 612 121 21</div> */}
          <a className={navbar_mob} href="tel:+370612013136">
            +370 612 121 21
          </a>
        </div>
        <div className={navbar_line_container}>
          <div className={navbar_line} />
        </div>
        <nav className={navbar_menu_container}>
          {/* <ul className={nav_menu}>
            {navItems.map((buttonText, index) => (
              <li className={nav_item} key={index}>
                <div className={nav_links} onClick={closeMobileMenu}>
                  {buttonText}
                </div>
              </li>
            ))}
          </ul> */}
          <ul className={nav_menu}>
            {navItems.map((buttonText, index) => (
              <li className={nav_item} key={index}>
                <div className={nav_links} onClick={closeMobileMenu}>
                  <Link to={buttonText} smooth={true} offset={-112} duration={1000}>
                    {buttonText}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
