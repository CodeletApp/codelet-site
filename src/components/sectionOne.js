import React from "react";

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
          <img
            src="/screenshots/QuestionListGooglePixel6.png"
            className="android-phone phone"
            alt="android question list"
          ></img>
          <img
            src="/screenshots/iPhoneQuestionList.png"
            className="phone iphone"
            alt="ios question list"
          ></img>
        </div>
        <div className="stores">
          <a href="https://play.google.com/store/apps/details?id=com.codeletapp">
            <img src="/logos/google_play.png" alt="Codelet Play Store Link" />
          </a>
          <a href="https://apps.apple.com/us/app/codelet/id1517315454">
            <img src="/logos/app_store.png" alt="Codelet App Store Link" />
          </a>
        </div>
      </div>
      <div className="rightSection1Box">
        <img
          className="logo-large"
          src="/logos/logo-large-blue.png"
          alt="Large Codelet Logo"
        />
        <br />
        <h6 className="headline-p">
          Codelet is a mobile app that quickly prepares software developers for
          technical interviews.
        </h6>

        <button className="secondary-btn" onClick={() => scrollToMiddle()}>
          Learn More
        </button>
      </div>
    </div>
  );
}
