import React from "react";

export const APP_STORE_URL = "https://apps.apple.com/us/app/codelet/id1517315454";

// Official Apple badge, used unmodified per Apple's guidelines.
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
    </div>
  );
}
