import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import "fontsource-roboto";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Main from "./components/Main";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="container">
      {/* <CssBaseline /> */}
      <NavBar />
      <Hero />
      <About />
      <Main />
      <Contacts />
    </div>
  );
}

export default App;
