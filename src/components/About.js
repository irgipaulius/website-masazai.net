import React, { useRef } from "react";

import PanelButton from "./PanelButton";

import styles from "./About.module.css";
import { AboutCheckmark } from "./MuiIcons";

// export const AboutRefContext = React.createContext();

export default function About() {
  const {
    about,
    about_container,
    about_text_container,
    about_title,
    about_subtitle,
    about_text,
    about_text_list_item,
    about_image_container,
    about_image,
  } = styles;

  // const AboutRef = useRef();
  // console.log(AboutRef);

  return (
    <>
      {/* <AboutRefContext.Provider value={AboutRef}> */}
      <div className={about}>
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
      {/* </AboutRefContext.Provider> */}
    </>
  );
}

// useContext
// 1. Create a context - export const UserContext = React.createContext()
// 2. Provide a contex value - <UserContext.Provider value={ context value }>
// 3. Consume the contex value - in Component <UserContext.Consumer>{ hold of the value passed by the context (value in Provider) }</UserContext.Consumer>

// using useContext Hook
// 1. import useContext from React
// 2. import necessary context
// 3. call useContext() function passing in the context as it's arguments
