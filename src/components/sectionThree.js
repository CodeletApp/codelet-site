import React, { useState } from "react";

export function SectionThree() {
  const [screen, setScreen] = useState(1);

  const changeScreens = (num) => {
    setScreen(num);
  };

  const getScreenData = () => {
    switch (screen) {
      case 1:
        return {
          uri: "/screenshots/step1.png",
          description: 'Codelet: Approach Selection'
        };
      case 2:
        return {
          uri: "/screenshots/step2.png",
          description: 'Codelet: Algorithm Selection'
        };
      case 3:
        return {
          uri: "/screenshots/step3.png",
          description: 'Codelet: Algorithm Time and Space Complexity Selection'
        };
      case 4:
        return {
          uri: "/screenshots/results.png",
          description: 'Codelet: Results Screen'
        };
      case 5:
        return  {
          uri: "/screenshots/profile.png",
          description: 'Codelet: Profile Screen'
        };
      default:
        return { uri: "#", description: 'No selection' };
    }
  };
  const { uri, description } = getScreenData();

  return (
    <div className="section3">
      <div className="leftSection3">
        <div className="phoneframe2">
          <img src={uri} alt={description} />
        </div>
      </div>
      <div className="rightSection3">
        <h1 className="headline-h2-section3"> Solving a Question</h1>
        <p
          className={`step-header ${
            screen === 1 ? "color-active" : "color-light"
          }`}
          onClick={() => changeScreens(1)}
        >
          Choose Your Approach
        </p>
        <p
          className={`step-header ${
            screen === 2 ? "color-active" : "color-light"
          }`}
          onClick={() => changeScreens(2)}
        >
          Design Your Algorithm
        </p>
        <p
          className={`step-header ${
            screen === 3 ? "color-active" : "color-light"
          }`}
          onClick={() => changeScreens(3)}
        >
          Analyze Your Algorithm
        </p>
        <p
          className={`step-header ${
            screen === 4 ? "color-active" : "color-light"
          }`}
          onClick={() => changeScreens(4)}
        >
          Check Your Results
        </p>
        <p
          className={`step-header ${
            screen === 5 ? "color-active" : "color-light"
          }`}
          onClick={() => changeScreens(5)}
        >
          View Your Progress
        </p>
      </div>
    </div>
  );
}

export default SectionThree;
