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
    console.log(`scrolling offset: ${-navBarHeight}`);
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
    console.log(navBarHeight, navBarRef.current.clientHeight);

    const matchedItem = navItems.find(
      (navItem) => navItem.path === location.pathname
    );
    if (matchedItem) {
      scrollSmoothHandler(matchedItem.id);
    } else {
      scrollSmoothHandler(navItems[0].id);
    }
  }, [location, navBarHeight]);

  // useEffect(() => {
  //   // :3000/#/labas
  //   console.log("location", location.pathname);
  //   // switch (location.pathname) {
  //   //   case navItems[1].path:
  //   //     scrollSmoothHandler(navItems[1].id);
  //   //     break;
  //   //   case navItems[2].path:
  //   //     scrollSmoothHandler(navItems[2].id);
  //   //     break;
  //   //   case navItems[3].path:
  //   //     scrollSmoothHandler(navItems[3].id);
  //   //     break;
  //   //   default:
  //   //     scrollSmoothHandler(navItems[0].id);
  //   //     break;
  //   // }

  //   /** sitas spendimas veiktu, bet ugly */
  //   // const manoFunkcija = () => {
  //   //   for (const navItem in navItems) {
  //   //     if (navItem.path === location.pathname) {
  //   //       scrollSmoothHandler(navItem.id);
  //   //       return true;
  //   //     }
  //   //   }
  //   // };

  //   /** sitas dar baisiau....  */
  //   // const results = navItems.map((navItem) => {
  //   //   if (navItem.path === location.pathname) {
  //   //     scrollSmoothHandler(navItem.id);
  //   //     return true;
  //   //   }
  //   //   return false;
  //   // });
  //   // const isDefault = results.some((result) => !result);

  //   /** sitas optimizuotas. */
  //   // const matchedItem = navItems.find(
  //   //   ({ path }) => path === location.pathname
  //   // );

  //   // scrollSmoothHandler(matchedItem?.id || navItems[0].id);

  //   /** sitas graziausias ir aiskiausias */
  //   const matchedItem = navItems.find(
  //     (navItem) => navItem.path === location.pathname
  //   );
  //   if (matchedItem) {
  //     scrollSmoothHandler(matchedItem.id);
  //   } else {
  //     scrollSmoothHandler(navItems[0].id);
  //   }

  //   /** cia net neskaityk sito */
  //   // else if (index === navItems.length - 1) {
  //   //   // paskutinis itemas, bet jis irgi neatitiko pathname.
  //   //   scrollSmoothHandler(navItems.length - 1);
  //   // }

  //   // const navItems = [
  //   //   { text: "Pradžia", path: "/", id: "hero" },  //false
  //   //   { text: "Apie", path: "/about", id: "about" }, //true
  //   //   { text: "Masažai", path: "/main", id: "main" },  //false
  //   //   { text: "Kontaktai", path: "/contacts", id: "contacts" },  //false
  //   // ];             // [false, false, false, false]
  // }, [location]);

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
