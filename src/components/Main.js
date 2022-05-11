import React from "react";

import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__text__container">
          <p className="main__title">Masažo paslaugos</p>
          <p className="main__text">
            Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti išsirinkti tinkamą
            procedūrą pagal asmeninius poreikius.
          </p>
          <p className="main__text">Taip pat siūlau rekomendacijas masažo ilgalaikiams kursams. </p>
          <p className="main__text">
            Šitą tekstą reikia patvarkyti, kol kas tiesiog prirašiau laikinų sakinių. Šita pastraipa
            gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus, kurias galima
            siūlyti klientams. Šita pastraipa gali aprašyti daug įvairaus teksto apie siūlomas
            procedūras ir masažus, kurias galima siūlyti klientams. Šita pastraipa gali aprašyti
            daug įvairaus teksto apie siūlomas procedūras ir masažus, kurias galima siūlyti
            klientams.
          </p>
          <p className="main__text">Dėl kainų teiraukitės telefonu.</p>
          <button className="main__btn">Išsami informacija</button>
        </div>
        <div className="main__image__container">
          {/* <div className="image__container">
            <img className="main__image" src="/images/temp_main-image-container.jpg" alt="" />
          </div> */}
          <div className="points__container">
            <p className="points__container__title">POPULIARIAUSI</p>
            <ul className="points__text">
              <li>Klasikinis viso kūno masažas</li>
              <li>Medaus masažas</li>
              <li>Limfodrenažinis masažas</li>
              <li>Chiromasažas masažas</li>
              <li>Neurosedatyvinis-antistresinis masažas</li>
              <li>Anticeliulitinis masažas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
