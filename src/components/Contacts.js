import React from "react";

import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_container}>
        <p className={styles.contacts_title}>KONTAKTAI</p>
        <p className={styles.contacts_subtitle}>
          Prieš atvykstant privaloma užseregistruoti telefonu:
        </p>
        <div className={styles.contacts_mob_email}>
          <p className={styles.mob}>+370 612 312 32</p>
          <p className={styles.email}>
            arba el. paštu:{" "}
            <a href="mailto:jelena.jacinkeviciene@gmail.com">jelena.jacinkeviciene@gmail.com</a>
          </p>
        </div>
        <p className={styles.contacts_facebook}>
          <a href="https://www.facebook.com/Masazuotoja">https://www.facebook.com/Masazuotoja</a>
        </p>
      </div>
    </div>
  );
}
