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
            <img src="/logos/google_play.png" alt="google-play" />
          </a>
          <a href="https://testflight.apple.com/join/GwdqhBe8">
            <img src="/logos/app_store.png" alt="apple-store" />
          </a>
        </div>
      </div>
      <div className="rightSection1Box">
        <img
          className="logo-large"
          src="/logos/logo-large-blue.png"
          alt="logo-large"
        />
        <br />
        <p className="headline-p">
          An interactive mobile platform designed to quickly prepare software
          engineers for technical interviews on the go.
        </p>
        <p className="headline-p">
          <strong>Limited capacity open beta now available!</strong>
        </p>

        <button className="secondary-btn" onClick={() => scrollToMiddle()}>
          Learn More
        </button>
      </div>
    </div>
  );
}
