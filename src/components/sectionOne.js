import React from "react";
import { Link } from "react-router-dom";
import { StoreBadges } from "./StoreBadges";
import { DeviceFrame } from "./DeviceFrame";

export function SectionOne() {
  return (
    <section className="hero" id="download">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">Beat technical interviews</h1>
          <p className="hero__lead">
            Codelet is a mobile app that quickly prepares software developers
            for technical interviews.
          </p>
          <StoreBadges />
          <Link
            className="hero__more"
            to={{ pathname: "/", hash: "#features" }}
          >
            Learn more ↓
          </Link>
        </div>
        <div className="hero__phones">
          <DeviceFrame
            device="android"
            src="/screenshots/android-question-list.jpg"
            className="hero__phone hero__phone--android"
            alt="Codelet question list on Android"
          />
          <DeviceFrame
            device="iphone"
            src="/screenshots/ios-question-list.png"
            className="hero__phone hero__phone--ios"
            alt="Codelet question list on iPhone"
          />
        </div>
      </div>
    </section>
  );
}
