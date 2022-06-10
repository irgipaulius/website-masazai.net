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
    email_link,
    contacts_facebook,
  } = styles;

  return (
    <div className={contacts} id="Kontaktai">
      <div className={contacts_container}>
        <p className={contacts_title}>KONTAKTAI</p>
        <p className={contacts_subtitle}>Prieš atvykstant privaloma užseregistruoti telefonu:</p>
        <div className={contacts_mob_email}>
          <a className={mob} href="tel:+370612013136">
            +370 612 121 21
          </a>
          <p className={email}>
            arba el. paštu:{" "}
            <a className={email_link} href="mailto:jelena.jacinkeviciene@gmail.com">
              jelena.jacinkeviciene@gmail.com
            </a>
          </p>
        </div>
        <a className={contacts_facebook} href="https://www.facebook.com/Masazuotoja">
          https://www.facebook.com/Masazuotoja
        </a>
      </div>
    </div>
  );
}
