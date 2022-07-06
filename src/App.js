import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Hero />
        <About />
        <Main />
        <Contacts />
      </BrowserRouter>
    </div>
  );
}

export default App;
