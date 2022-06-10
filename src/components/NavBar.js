import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link, scroller } from "react-scroll";

import styles from "./NavBar.module.css";

// const replaceSpecialCharacters = (string) => {
//   return string.replace("ž", "z");
// };

export default function Navbar({ refs }) {
  // const navItems = ["Pradžia", "Apie", "Masažai", "Kontaktai"];
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
    console.log("Triggered.");
    // ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

    scroller.scrollTo(id, {
      duration: 1000,
      smooth: true,
      offset: -navBarHeight,
      // containerId: "ContainerElementID",
    });
  };

  useEffect(() => {
    function handleResize() {
      setNavBarHeight(navBarRef.current.clientHeight);
      // console.log(
      //   "resized to: ",
      //   window.innerWidth,
      //   "x",
      //   window.innerHeight,
      //   navBarRef.current.clientHeight
      // );
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    console.log("location", location.pathname);
    switch (location.pathname) {
      case navItems[1].path:
        scrollSmoothHandler(navItems[1].id);
        break;
      // case replaceSpecialCharacters(navItems[2].path):
      case navItems[2].path:
        scrollSmoothHandler(navItems[2].id);
        break;
      case navItems[3].path:
        scrollSmoothHandler(navItems[3].id);
        break;
      default:
        scrollSmoothHandler(navItems[0].id);
        break;
    }
  }, [location]);

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
