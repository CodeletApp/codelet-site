import React, { useState } from "react";


export function SectionThree() {
  const [screen, setScreen] = useState(1);

  const changeScreens = (num) => {
    setScreen(num);
  }

  const getScreenUrl = () => {
    switch(screen) {
      case 1:
        return "/screenshots/step1.png";
      case 2:
        return "/screenshots/step2.png";
      case 3:
        return "/screenshots/step3.png";
      case 4:
        return "/screenshots/results.png";
      default:
        return "#";
    }
  }

  return (
    <div className="section3">
      <div className="leftSection3">
        <div className="phoneframe2">
          <img
            src={getScreenUrl()}
            alt="algo-screens"
          />
        </div>
      </div>
      <div className="rightSection3">
        <h1 className="headline-h2-section3"> Solving a Question</h1>
        <p
          className="step-header"
          style={{ color: screen === 1 ? "#ABD1FC" : "#f5f5f5" }}
          onClick={() => changeScreens(1)}
        >
          Choose Your Approach
        </p>
        <p
          className="step-header"
          style={{ color: screen === 2 ? "#ABD1FC" : "#f5f5f5" }}
          onClick={() => changeScreens(2)}
        >
          Design Your Algorithm
        </p>
        <p
          className="step-header"
          style={{ color: screen === 3 ? "#ABD1FC" : "#f5f5f5" }}
          onClick={() => changeScreens(3)}
        >
          Analyze Your Algorithm
        </p>
        <p
          className="step-header"
          style={{ color: screen === 4 ? "#ABD1FC" : "#f5f5f5" }}
          onClick={() => changeScreens(4)}
        >
          Check Your Results
        </p>
      </div>
      <a
        className="fixed-btn"
        href="https://docs.google.com/forms/d/e/1FAIpQLScdPx0TSDPYBsEKT2buMK0SkpjcPrze5Ms0IhTw5Yl4vTpxLg/viewform?usp=sf_link"
      >
        Join Beta
      </a>
    </div>
  );
}

export default SectionThree;
