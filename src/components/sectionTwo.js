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
          <li> Codelet is cross platform from the start</li>
          <li> Mobile means more practice on the go</li>
          <li>
            {" "}
            With Codelet, you can practice anywhere and reinforce your interview
            skills
          </li>
        </ul>
      </div>
      <div className="innerSectionBox">
        <p className="ul-title">Faster</p>
        <img src={bird} />
        <ul className="section2-list">
          <li> Our questions are simple & let you get straight to the core.</li>
          <li> More questions in less time means larger breadth of topics. </li>
          <li> Solve questions without the hassle of coding.</li>
        </ul>
      </div>
      <div className="innerSectionBox">
        <p className="ul-title">Analytics</p>
        <img src={analytics} />
        <ul className="section2-list">
          <li>
            Question's are scored by sections, giving you insight on what you're
            excelling at and what your not
          </li>
          <li>
            View your history and customized statistics on your Profile,
            allowing you to learn from your past
          </li>
        </ul>
      </div>
    </div>
  );
}
