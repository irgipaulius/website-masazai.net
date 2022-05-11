import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <CssBaseline />
      <NavBar />
      <Hero />
      <About />
      <Main />
      <Contact />
    </div>
  );
}

export default App;
