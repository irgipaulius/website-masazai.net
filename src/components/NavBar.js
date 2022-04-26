import React, { useState } from "react";

import "./NavBar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-menu">
            {["Pradzia", "Apie", "Masazai", "Kontaktai"].map((buttonText) => (
              <li className="nav-item">
                <div className="nav-links" onClick={closeMobileMenu}>
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
