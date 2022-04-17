import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "fontsource-roboto";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <div
        style={{
          display: "flex",
          height: "10vh",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <h1> Svetainė kuriama, </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <h1> atsiprašome už nepatogumus. </h1>
      </div>
      <div
        style={{
          display: "flex",
          height: "10vh",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <h2> Susisiekite su masažuotoja: </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <h2>Jelena Jacinkevičienė</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <PhoneIcon fontSize="large" color="primary" />
        <h1> +37067273695 </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <EmailIcon fontSize="large" color="primary" />
        <h1> jelena@masazai.net</h1>
      </div>
    </div>
  );
}

export default App;
