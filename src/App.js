import React, { useRef } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import { HashRouter } from "react-router-dom";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const mainRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div className="container">
      {/* <CssBaseline /> */}
      <HashRouter>
        <NavBar refs={{ aboutRef, heroRef, mainRef, contactsRef }} />
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Main ref={mainRef} />
        <Contacts ref={contactsRef} />
      </HashRouter>
    </div>
  );
}

export default App;
