import React from "react";

import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <p className="contacts-title">KONTAKTAI</p>
        <p className="contacts-subtitle">Prieš atvykstant privaloma užseregistruoti telefonu:</p>
        <div className="contacts-mob-email">
          <p className="mob">+370 612 312 32</p>
          <p className="email">
            arba el. paštu:{" "}
            <a href="mailto:jelena.jacinkeviciene@gmail.com">jelena.jacinkeviciene@gmail.com</a>
          </p>
        </div>
        <p className="contacts-facebook">
          <a href="https://www.facebook.com/Masazuotoja">https://www.facebook.com/Masazuotoja</a>
        </p>
      </div>
    </div>
  );
}
