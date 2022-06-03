import React, { useRef } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts";

// import styles from "./components/NavBar.module.css";
// import styles from "./Hero.module.css";

import PanelButton from "./components/PanelButton";

import { AboutCheckmark, MainCheckmark } from "./components/MuiIcons";
import styles from "./components/temp.module.css";

function App() {
  const {
    navbar,
    navbar_mob_container,
    navbar_line_container,
    navbar_mob,
    navbar_line,
    navbar_menu_container,
    nav_menu,
    nav_item,
    nav_links,

    hero,
    hero_container,
    hero_title,
    hero_subtitle,
    hero_about,
    hero_line,

    about,
    about_container,
    about_text_container,
    about_title,
    about_subtitle,
    about_text,
    about_text_list_item,
    about_image_container,
    about_image,

    main,
    main_content,
    main_text_container,
    main_texts,
    main_title,
    points_container_title,
    main_text,
    main_btn,
    main_image_container,
    points_container,
    points_text,
    points_text_list_item,

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

  const AboutRef = useRef();
  const HeroRef = useRef();
  const MainRef = useRef();
  const ContactsRef = useRef();

  return (
    <div className="container">
      {/* <CssBaseline /> */}

      {/* <NavBar /> */}
      <nav className={navbar}>
        <div className={navbar_mob_container}>
          {/* <div className={styles["navbar-mob"]}>+370 612 121 21</div> */}
          <a className={navbar_mob} href="tel:+370612013136">
            +370 612 121 21
          </a>
        </div>
        <div className={navbar_line_container}>
          <div className={navbar_line} />
        </div>
        <div className={navbar_menu_container}>
          <ul className={nav_menu}>
            <li className={nav_item}>
              <div
                className={nav_links}
                onClick={() =>
                  HeroRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                Pradžia
              </div>
            </li>
            <li className={nav_item}>
              <div
                className={nav_links}
                onClick={() =>
                  AboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                Apie
              </div>
            </li>
            <li className={nav_item}>
              <div
                className={nav_links}
                onClick={() =>
                  MainRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                Masažai
              </div>
            </li>
            <li className={nav_item}>
              <div
                className={nav_links}
                onClick={() =>
                  ContactsRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                }
              >
                Kontaktai
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Hero /> */}
      <div className={hero} ref={HeroRef}>
        <div className={hero_container}>
          <p className={hero_title}>MASAŽAS</p>
          <p className={hero_subtitle}>PAS JELENĄ</p>
          <div className={hero_line}></div>
          <p className={hero_about}>Profesionalus masažas Kaune</p>
        </div>
      </div>

      {/* <About /> */}
      <div className={about} ref={AboutRef}>
        <div className={about_container}>
          <div className={about_text_container}>
            <p className={about_title}>Sveiki,</p>
            <p className={about_subtitle}>aš esu Jelena</p>
            <ul className={about_text}>
              <li className={about_text_list_item}>
                <AboutCheckmark />
                <span>Pilnai kvalifikuota masažuotoja ir profesionali kinezeterapeutė.</span>
              </li>
              <li className={about_text_list_item}>
                <AboutCheckmark />
                <span>32 metų ir 15,000 valandų patirtis.</span>
              </li>
              <li className={about_text_list_item}>
                <AboutCheckmark />
                <span>Draugiška, linksma, švelniom rankom, taip toliau t.t.</span>
              </li>
              <li className={about_text_list_item}>
                <AboutCheckmark />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quae dicta
                  repellendus cumque sit nostrum aliquam aliquid libero eveniet?
                </span>
              </li>
            </ul>

            <PanelButton text="Išsami informacija" type="about" />

            {/* <button onClick={() => console.log(`Test button click`)}>Test</button> */}
            {/* <button
              onClick={() =>
                AboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              Test
            </button> */}
          </div>
          <div className={about_image_container}>
            <img className={about_image} src="/images/profile.jpeg" alt="" />
          </div>
        </div>
      </div>

      {/* <Main /> */}
      <div className={main} ref={MainRef}>
        <div className={main_content}>
          <div className={main_text_container}>
            <div className={main_texts}>
              <p className={main_title}>Masažo paslaugos</p>
              <p className={main_text}>
                Siūlau pasirinkimą iš įvairių masažo technikų, bei galiu padėti išsirinkti tinkamą
                procedūrą pagal asmeninius poreikius.
              </p>
              <p className={main_text}>
                Taip pat siūlau rekomendacijas masažo ilgalaikiams kursams.{" "}
              </p>
              <p className={main_text}>
                Šitą tekstą reikia patvarkyti, kol kas tiesiog prirašiau laikinų sakinių. Šita
                pastraipa gali aprašyti daug įvairaus teksto apie siūlomas procedūras ir masažus,
                kurias galima siūlyti klientams.
              </p>
              <p className={main_text}>Dėl kainų teiraukitės telefonu.</p>

              <PanelButton text="Kainininkas" type="pricing" />
            </div>
          </div>
          <div className={main_image_container}>
            <div className={points_container}>
              <p className={points_container_title}>POPULIARIAUSI</p>
              <ul className={points_text}>
                <li className={points_text_list_item}>
                  <MainCheckmark />
                  <span>Klasikinis viso kūno masažas</span>
                </li>
                <li className={points_text_list_item}>
                  <MainCheckmark />
                  <span>Medaus masažas</span>
                </li>
                <li className={points_text_list_item}>
                  <MainCheckmark />
                  <span>Limfodrenažinis masažas</span>
                </li>
                <li className={points_text_list_item}>
                  <MainCheckmark />
                  <span>Chiromasažas masažas</span>
                </li>
                <li className={points_text_list_item}>
                  <MainCheckmark />
                  <span>Neurosedatyvinis-antistresinis masažas</span>
                </li>
                <li className={points_text_list_item}>
                  <MainCheckmark />
                  <span>Anticeliulitinis masažas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <Contacts /> */}
      <div className={contacts} ref={ContactsRef}>
        <div className={contacts_container}>
          <p className={contacts_title}>KONTAKTAI</p>
          <p className={contacts_subtitle}>Prieš atvykstant privaloma užseregistruoti telefonu:</p>
          <div className={contacts_mob_email}>
            {/* <p className={mob}>+370 612 312 32</p> */}
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
    </div>
  );
}

export default App;
