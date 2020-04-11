import React from "react";
const mobile = require("../mobile.png");
const bird = require("../bird.png");
const analytics = require("../analytics.png");
export function SectionTwo() {
  return (
    <div className="section2">
      <div className="innerSectionBox">
        <p className="ul-title">Mobile</p>
        <img src={mobile} />
        <ul className="section2-list">
          <li> On the go tagline</li>
          <li> On the go tagline</li>
          <li> On the go tagline</li>
        </ul>
      </div>
      <div className="innerSectionBox">
        <p className="ul-title">Speed and Breadth</p>
        <img src={bird} />
        <ul className="section2-list">
          <li> On the go tagline</li>
          <li> On the go tagline</li>
          <li> On the go tagline</li>
        </ul>{" "}
      </div>
      <div className="innerSectionBox">
        <p className="ul-title">Analytics</p>
        <img src={analytics} />
        <ul className="section2-list">
          <li> On the go tagline</li>
          <li> On the go tagline</li>
          <li> On the go tagline</li>
        </ul>
      </div>
    </div>
  );
}
