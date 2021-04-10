import React from "react";
import { IPhoneX, Pixel3XL } from "react-device-frames";

export function SectionOne() {
  function scrollToMiddle() {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.querySelector(".section2").offsetTop,
    });
  }

  return (
    <div className="section1">
      <div className="leftSection1">
        <div className="phone-frames">
          <Pixel3XL
            className="android-phone"
            screenshot="/screenshots/questionsPixel3XL.png"
          />
          <IPhoneX
            className="iphone"
            screenshot="/screenshots/questionsIPhoneX.png"
          />
        </div>
        <div className="stores">
          <a href="https://play.google.com/store/apps/details?id=com.codeletapp">
            <img src="/logos/google_play.png" alt="Codelet Play Store Link" />
          </a>
          <a href="https://testflight.apple.com/join/GwdqhBe8">
            <img src="/logos/app_store.png" alt="Codelet App Store Link" />
          </a>
        </div>
        <h6 className="headline-p headline-h">
          <strong>Open beta now available!</strong>
        </h6>
      </div>
      <div className="rightSection1Box">
        <img
          className="logo-large"
          src="/logos/logo-large-blue.png"
          alt="Large Codelet Logo"
        />
        <br />
        <h6 className="headline-p">
          Codelet is a mobile app that quickly prepares software developers for technical interviews.
        </h6>

        <button className="secondary-btn" onClick={() => scrollToMiddle()}>
          Learn More
        </button>
      </div>
    </div>
  );
}
