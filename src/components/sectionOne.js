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
          <img src="/logos/google_play.png" alt="google-play" />
          <img src="/logos/app_store.png" alt="apple-store" />
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScdPx0TSDPYBsEKT2buMK0SkpjcPrze5Ms0IhTw5Yl4vTpxLg/viewform?usp=sf_link">
          <button className="primary-btn-section1">Join the Beta</button>
        </a>
        <button className="secondary-btn" onClick={() => scrollToMiddle()}>
          Learn More
        </button>
      </div>
    </div>
  );
}
