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
      <svg
        role="presentation"
        class="splash-screen-poly"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#1D589A" points="0,77 0,85 100,8 100,1"></polygon>
        <polygon fill="#397AC2" points="0,84 0,100 100,100 100,7"></polygon>
      </svg>

      <div className="leftSection1">
        <div className="phone-frames">
          <Pixel3XL
            className="android-phone"
            screenshot="/screenshots/questions.png"
          />
          <IPhoneX className="iphone" screenshot="/screenshots/questions.png" />
        </div>
        <div className="stores">
          <img src="/logos/google_play.png" alt="google-play" />
          <img src="/logos/app_store.png" alt="apple-store" />
        </div>
      </div>
      <div className="rightSection1Box">
        <img
          className="logo-large"
          width={450}
          src="/logos/logo-large-blue.png"
          alt="logo-large"
        />
        <h2 className="headline-h2">Beat Technical Interviews</h2>
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
