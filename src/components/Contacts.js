import React from "react";

import styles from "./Contacts.module.css";

export default function Contacts() {
  const {
    contacts,
    contacts_container,
    contacts_title,
    contacts_subtitle,
    contacts_mob_email,
    mob,
    email,
    contacts_facebook,
  } = styles;

  return (
    <div className={contacts}>
      <div className={contacts_container}>
        <p className={contacts_title}>KONTAKTAI</p>
        <p className={contacts_subtitle}>Prieš atvykstant privaloma užseregistruoti telefonu:</p>
        <div className={contacts_mob_email}>
          <p className={mob}>+370 612 312 32</p>
          <p className={email}>
            arba el. paštu:{" "}
            <a href="mailto:jelena.jacinkeviciene@gmail.com">jelena.jacinkeviciene@gmail.com</a>
          </p>
        </div>
        <p className={contacts_facebook}>
          <a href="https://www.facebook.com/Masazuotoja">https://www.facebook.com/Masazuotoja</a>
        </p>
      </div>
    </div>
  );
}
