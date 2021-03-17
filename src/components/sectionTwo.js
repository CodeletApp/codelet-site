import React from "react";

export function SectionTwo() {
  return (
    <div className="section2">
      <div className="innerSectionBox">
        <img src="/icons/bird.png" alt="learn-anywhere-icon" />
        <p className="ul-title">Learn Anywhere</p>

        <ul className="section2-list">
          <li> Practice coding questions anywhere and anytime</li>
        </ul>
      </div>
      <div className="innerSectionBox">
        <img src="/icons/mobile.png" alt="master-the-process-icon" />
        <p className="ul-title">Master The Process</p>
        <ul className="section2-list">
          <li>
            Become an expert at identifying and analyzing core patterns and
            approaches
          </li>
        </ul>
      </div>
      <div className="innerSectionBox">
        <img src="/icons/analytics.png" alt="view-your-progress-icon" />
        <p className="ul-title">View Your Progress</p>
        <ul className="section2-list">
          <li>View how well you’re doing and where you can improve</li>
        </ul>
      </div>
    </div>
  );
}
