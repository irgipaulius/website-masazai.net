import React from "react";

import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <p className="contact__title">KONTAKTAI</p>
      <p className="contact__subtitle">Prieš atvykstant privaloma užseregistruoti telefonu:</p>
      <div className="contact__mob__email">
        <p className="mob">+370 612 312 32</p>
        <p className="email">
          arba el. paštu:{" "}
          <a href="mailto:jelena.jacinkeviciene@gmail.com">jelena.jacinkeviciene@gmail.com</a>
        </p>
      </div>
      <p className="contact__facebook">
        <a href="https://www.facebook.com/Masazuotoja">https://www.facebook.com/Masazuotoja</a>
      </p>
    </div>
  );
}
