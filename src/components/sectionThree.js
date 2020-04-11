import React, { Component } from "react";
const approachAlgo = require("../ScreenShot1.png");
const analyzeAlgo = require("../ScreenShot2.png");
const designAlgo = require("../ScreenShot3.png");

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

        <div className="section3">
          <div className="leftSection3">
            <div className="phoneframe2">
              <img
                src={
                  this.state.screen === 1
                    ? approachAlgo
                    : this.state.screen === 2
                    ? designAlgo
                    : this.state.screen === 3
                    ? analyzeAlgo
                    : approachAlgo
                }
              />
            </div>
          </div>
          <div className="rightSection3">
          <h1 className="headline-h2-section3"> Solving a Question</h1>
            <p
              className="step-header"
              style={{ color: this.state.screen === 1 ? "#ABD1FC" : "#f5f5f5" }}
              onClick={() => this.changeScreens(1)}
            >
             Choose Your Approach
            </p>
            <p
              className="step-header"
              style={{ color: this.state.screen === 2 ? "#ABD1FC" : "#f5f5f5" }}
              onClick={() => this.changeScreens(2)}
            >
             Design Your Algorithm
            </p>
            <p
              className="step-header"
              style={{ color: this.state.screen === 3 ? "#ABD1FC" : "#f5f5f5" }}
              onClick={() => this.changeScreens(3)}
            >
             Analyze Your Algorithm
            </p>
          </div>
          <a className="fixed-btn" >Join the Beta</a>

        </div>

    );
  }
}

export default SectionThree;
