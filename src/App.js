import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <NavBar />
      </HashRouter>
      <Hero />
      <About />
      <Main />
      <Contacts />
    </div>
  );
}

export default App;
