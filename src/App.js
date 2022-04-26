import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="container">
      <CssBaseline />
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
