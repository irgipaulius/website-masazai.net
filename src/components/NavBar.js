import React, { useState } from "react";

import styles from "./NavBar.module.css";

export default function Navbar() {
  const navItems = ["Pradžia", "Apie", "Masažai", "Kontaktai"];

  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_mob_container}>
          {/* <div className={styles["navbar-mob"]}>+370 612 121 21</div> */}
          <div className={styles.navbar_mob}>+370 612 121 21</div>
        </div>
        <div className={styles.navbar_line_container}>
          <div className={styles.navbar_line} />
        </div>
        <nav className={styles.navbar_menu_container}>
          <ul className={styles.nav_menu}>
            {navItems.map((buttonText, index) => (
              <li className={styles.nav_item} key={index}>
                <div className={styles.nav_links} onClick={closeMobileMenu}>
                  {buttonText}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
