import React from "react";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.codeletapp";
export const APP_STORE_URL = "https://apps.apple.com/us/app/codelet/id1517315454";

// Official badges from Apple and Google, used unmodified per their guidelines.
// The Google Play PNG includes its own clear space, which is offset in CSS so
// both badges render at the same visible height.
export function StoreBadges() {
  return (
    <div className="stores">
      <a
        className="stores__badge stores__badge--apple"
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/app-store-badge.svg"
          alt="Download Codelet on the App Store"
        />
      </a>
      <a
        className="stores__badge stores__badge--google"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/logos/google-play-badge.png"
          alt="Get Codelet on Google Play"
        />
      </a>
    </div>
  );
}
