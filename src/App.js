import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IPhoneX, Pixel3XL } from "react-device-frames";
const q = require("./questions.png");
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Codelet</h2>
      </header>
       <div className="phone-container">
          <div className="phone-frame">
            <Pixel3XL screenshot={q} />
          </div>
          <div className="phone-frame">
            <IPhoneX screenshot={q} />
          </div>
        </div>
    </div>
  );
}

export default App;
