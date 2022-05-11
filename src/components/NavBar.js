import React, { useState } from "react";

import "./NavBar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__mob">+370 612 121 21</div>
        <div className="navbar__line"/>
        <div className="navbar__container">
          <ul className="nav__menu">
            {["Pradžia", "Apie", "Masažai", "Kontaktai"].map((buttonText) => (
              <li className="nav_item">
                <div className="nav_links" onClick={closeMobileMenu}>
                  {buttonText}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
