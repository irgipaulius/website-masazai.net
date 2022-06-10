import React from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Hero />
      <About />
      <Main />
      <Contacts />
    </div>
  );
}

export default App;
