import React, { useState } from "react";

export function SectionThree() {
  const [screen, setScreen] = useState(1);

  const changeScreens = (num) => {
    setScreen(num);
  };

  const getScreenURL = () => {
    switch (screen) {
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
  };

  return (
    <div className="section3">
      <div className="phoneframe2">
        <div>
          <img
            src={getScreenURL()}
            alt="algo-screens"
            style={{ maxHeight: "500px" }}
          />
        </div>
      </div>
      <div className="rightSection3">
        <h1 className="headline-h2-section3"> Solving a Question</h1>
        <p
          className={`step-header ${
            screen === 1 ? "color-secondary" : "color-light"
          }`}
          onClick={() => changeScreens(1)}
        >
          Choose Your Approach
        </p>
        <p
          className={`step-header ${
            screen === 2 ? "color-secondary" : "color-light"
          }`}
          onClick={() => changeScreens(2)}
        >
          Design Your Algorithm
        </p>
        <p
          className={`step-header ${
            screen === 3 ? "color-secondary" : "color-light"
          }`}
          onClick={() => changeScreens(3)}
        >
          Analyze Your Algorithm
        </p>
        <p
          className={`step-header ${
            screen === 4 ? "color-secondary" : "color-light"
          }`}
          onClick={() => changeScreens(4)}
        >
          Check Your Results
        </p>
      </div>
    </div>
  );
}

export default SectionThree;
