import React from "react";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-text-container">
          <div className="main-texts">
            <p className="main-title">Masažo paslaugos</p>
            <p className="main-text">
              Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti išsirinkti tinkamą
              procedūrą pagal asmeninius poreikius.
            </p>
            <p className="main-text">
              Taip pat siūlau rekomendacijas masažo ilgalaikiams kursams.{" "}
            </p>
            <p className="main-text">
              Šitą tekstą reikia patvarkyti, kol kas tiesiog prirašiau laikinų sakinių. Šita
              pastraipa gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus,
              kurias galima siūlyti klientams. Šita pastraipa gali aprašyti daug įvairaus teksto
              apie siūlomas procedūras ir masažus, kurias galima siūlyti klientams. Šita pastraipa
              gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus, kurias galima
              siūlyti klientams.
            </p>
            <p className="main-text">Dėl kainų teiraukitės telefonu.</p>
            <button className="main-btn">Išsami informacija</button>
          </div>
        </div>
        <div className="main-image-container">
          <div className="points-container">
            <p className="points-container-title">POPULIARIAUSI</p>
            <ul className="points-text">
              <li className="points-text-list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 points-text-checkmark"
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
              <li className="points-text-list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 points-text-checkmark"
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
              <li className="points-text-list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 points-text-checkmark"
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
              <li className="points-text-list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 points-text-checkmark"
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
              <li className="points-text-list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 points-text-checkmark"
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
              <li className="points-text-list-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 points-text-checkmark"
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
