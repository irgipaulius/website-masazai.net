import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import styles from "./NavBar.module.css";

// const replaceSpecialCharacters = (string) => {
//   return string.replace("ž", "z");
// };

export default function Navbar({ refs }) {
  // const navItems = ["Pradžia", "Apie", "Masažai", "Kontaktai"];
  const navItems = [
    { text: "Pradžia", id: "/" },
    { text: "Apie", id: "/about" },
    { text: "Masažai", id: "/main" },
    { text: "Kontaktai", id: "/contacts" },
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

  const scrollSmoothHandler = (ref) => {
    console.log("Triggered.");
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case navItems[1].id:
        scrollSmoothHandler(refs.aboutRef);
        break;
      // case replaceSpecialCharacters(navItems[2].id):
      case navItems[2].id:
        scrollSmoothHandler(refs.mainRef);
        break;
      case navItems[3].id:
        scrollSmoothHandler(refs.contactsRef);
        break;
      default:
        scrollSmoothHandler(refs.heroRef);
        break;
    }
  }, [location, refs]);

  // useEffect(() => {
  //   console.log("location", location.pathname);
  //   switch (location.pathname) {
  //     case `/${navItems[1]}`:
  //       scrollSmoothHandler(refs.aboutRef);
  //       break;
  //     case `/${replaceSpecialCharacters(navItems[2])}`:
  //       scrollSmoothHandler(refs.mainRef);
  //       break;
  //     case `/${navItems[3]}`:
  //       scrollSmoothHandler(refs.contactsRef);
  //       break;
  //     default:
  //       scrollSmoothHandler(refs.heroRef);
  //       break;
  //   }
  // }, [location, refs]);

  return (
    <>
      <nav className={navbar}>
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
                  <NavLink to={navItem.id}>{navItem.text}</NavLink>
                  {/* <NavLink to={`/${replaceSpecialCharacters(buttonText)}`}>{buttonText}</NavLink> */}
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

            {/* <li className={nav_item}>
              <NavLink to="/hero">Hero</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink to="/main">Main</NavLink>
            </li>
            <li className={nav_item}>
              <NavLink to="/contacts">Contacts</NavLink>
            </li> */}
          </ul>
        </nav>
      </nav>
    </>
  );
}
