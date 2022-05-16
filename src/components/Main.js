import React from "react";

import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main_content}>
        <div className={styles.main_text_container}>
          <div className={styles.main_texts}>
            <p className={styles.main_title}>Masažo paslaugos</p>
            <p className={styles.main_text}>
              Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti išsirinkti tinkamą
              procedūrą pagal asmeninius poreikius.
            </p>
            <p className={styles.main_text}>
              Taip pat siūlau rekomendacijas masažo ilgalaikiams kursams.{" "}
            </p>
            <p className={styles.main_text}>
              Šitą tekstą reikia patvarkyti, kol kas tiesiog prirašiau laikinų sakinių. Šita
              pastraipa gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus,
              kurias galima siūlyti klientams. Šita pastraipa gali aprašyti daug įvairaus teksto
              apie siūlomas procedūras ir masažus, kurias galima siūlyti klientams. Šita pastraipa
              gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus, kurias galima
              siūlyti klientams.
            </p>
            <p className={styles.main_text}>Dėl kainų teiraukitės telefonu.</p>
            <button className={styles.main_btn}>Išsami informacija</button>
          </div>
        </div>
        <div className={styles.main_image_container}>
          <div className={styles.points_container}>
            <p className={styles.points_container_title}>POPULIARIAUSI</p>
            <ul className={styles.points_text}>
              <li className={styles.points_text_list_item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.points_text_checkmark}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Klasikinis viso kūno masažas</span>
              </li>
              <li className={styles.points_text_list_item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.points_text_checkmark}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Medaus masažas</span>
              </li>
              <li className={styles.points_text_list_item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.points_text_checkmark}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Limfodrenažinis masažas</span>
              </li>
              <li className={styles.points_text_list_item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.points_text_checkmark}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Chiromasažas masažas</span>
              </li>
              <li className={styles.points_text_list_item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.points_text_checkmark}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Neurosedatyvinis-antistresinis masažas</span>
              </li>
              <li className={styles.points_text_list_item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.points_text_checkmark}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Anticeliulitinis masažas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
