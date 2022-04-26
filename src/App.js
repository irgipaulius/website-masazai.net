import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <CssBaseline />
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
