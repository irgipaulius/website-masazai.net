import React from "react";

import styles from "./About.module.css";

export default function About() {
  const {
    about,
    about_container,
    about_text_container,
    about_title,
    about_subtitle,
    about_text,
    about_text_list_item,
    about_checkmark,
    about_image_container,
    about_image,
    about_btn,
  } = styles;

  return (
    <div className={about}>
      <div className={about_container}>
        <div className={about_text_container}>
          <p className={about_title}>Sveiki,</p>
          <p className={about_subtitle}>aš esu Jelena</p>
          <ul className={about_text}>
            <li className={about_text_list_item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={about_checkmark}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Pilnai kvalifikuota masažuotoja ir profesionali kinezeterapeutė.</span>
            </li>
            <li className={about_text_list_item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={about_checkmark}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>32 metų ir 15,000 valandų patirtis.</span>
            </li>
            <li className={about_text_list_item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={about_checkmark}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Draugiška, linksma, švelniom rankom, taip toliau t.t.</span>
            </li>
            <li className={about_text_list_item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={about_checkmark}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quae dicta
                repellendus cumque sit nostrum aliquam aliquid libero eveniet?
              </span>
            </li>
          </ul>

          <button className={about_btn}>Išsami informacija</button>
        </div>
        <div className={about_image_container}>
          <img className={about_image} src="/images/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
