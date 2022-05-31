import React, { useState, useContext } from "react";

import styles from "./NavBar.module.css";
import { AboutRefContext } from "./About";

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

  // const RefToAbout = useContext(AboutRefContext);

  // const AboutRef = useRef(RefToAbout);

  return (
    <>
      <nav className={navbar}>
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
          <ul className={nav_menu}>
            {navItems.map((buttonText, index) => (
              <li className={nav_item} key={index}>
                <div className={nav_links} onClick={closeMobileMenu}>
                  {buttonText}
                </div>
              </li>
            ))}
            {/* <button
              onClick={() =>
                AboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Test
            </button> */}
          </ul>
        </nav>
      </nav>
    </>
  );
}
