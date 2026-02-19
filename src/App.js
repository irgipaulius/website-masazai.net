import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Pricing from "./components/Pricing";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <Hero />
      <About />
      <Main />
      <Pricing />
      <Contacts />
    </div>
  );
}

export default App;
