import React from "react";

import { PhoneIconSvg, EmailIconSvg, FacebookIconSvg, BlogIconSvg } from "./Icons";

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
    contacts_facebook_blog,
    contacts_facebook,
  } = styles;

  return (
    <div className={contacts} id="contacts">
      <div className={contacts_container}>
        <p className={contacts_title}>KONTAKTAI</p>
        <div className={contacts_mob_email}>
          <p className={contacts_subtitle}>Prieš atvykstant privaloma užseregistruoti telefonu:</p>
          <a className={mob} href="tel:+37067273695">
            <PhoneIconSvg />
            +370 672 736 95
          </a>
          <div className={email}>
            arba el. paštu:
            <a className={email_link} href="mailto:jacinkevicienejelena@gmail.com">
              <EmailIconSvg />
              jacinkevicienejelena@gmail.com
            </a>
          </div>
        </div>
        <div className={contacts_facebook_blog}>
          <a className={contacts_facebook} href="https://www.facebook.com/Masazuotoja">
            <FacebookIconSvg />
            https://www.facebook.com/Masazuotoja
          </a>
          <br />
          <a className={contacts_facebook} href="https://euromasazas.blogspot.com/">
            <BlogIconSvg />
            Asmeninis BLOG'as
          </a>
        </div>
      </div>
    </div>
  );
}
