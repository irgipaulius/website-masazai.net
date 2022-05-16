import React, { useState } from "react";

import "./NavBar.css";

export default function Navbar() {
  const navItems = ["Pradžia", "Apie", "Masažai", "Kontaktai"];

  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-mob-container">
          <div className="navbar-mob">+370 612 121 21</div>
        </div>
        <div className="navbar-line-container">
          <div className="navbar-line" />
        </div>
        <nav className="navbar-menu-container">
          <ul className="nav-menu">
            {navItems.map((buttonText, index) => (
              <li className="nav-item" key={index}>
                <div className="nav-links" onClick={closeMobileMenu}>
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
