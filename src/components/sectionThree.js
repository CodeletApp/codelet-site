import React, { Component } from "react";
const screenShot1 = require("../ScreenShot1.png");
const screenShot2 = require("../ScreenShot2.png");
const screenShot3 = require("../ScreenShot3.png");
const screenShot4 = require("../ScreenShot4.png");

class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 1,
    };
  }
  changeScreens(num) {
    this.setState({ screen: num });
  }
  render() {
    return (
      <div className="section3-container">
        <h2 className="headline-h2-section3"> Solving a Question</h2>
        <div className="section3">
          <div className="leftSection3">
            <div className="phoneframe2">
              <img
                src={
                  this.state.screen === 1
                    ? screenShot1
                    : this.state.screen === 2
                    ? screenShot2
                    : this.state.screen === 3
                    ? screenShot3
                    : screenShot4
                }
              />
            </div>
          </div>
          <div className="rightSection3">
            <p
              className="step-header"
              style={{ color: this.state.screen === 1 ? "#ABD1FC" : "#f5f5f5" }}
              onClick={() => this.changeScreens(1)}
            >
              1) Choose Your Approach
            </p>
            <p
              className="step-header"
              style={{ color: this.state.screen === 2 ? "#ABD1FC" : "#f5f5f5" }}
              onClick={() => this.changeScreens(2)}
            >
              2) Design Your Algorithm
            </p>
            <p
              className="step-header"
              style={{ color: this.state.screen === 3 ? "#ABD1FC" : "#f5f5f5" }}
              onClick={() => this.changeScreens(3)}
            >
              3) Analyze Your Algorithm
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;
