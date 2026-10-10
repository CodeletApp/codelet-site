import React from "react";

// CSS-drawn phone frame around a raw app screenshot.
// `device` is "iphone" (Dynamic Island) or "android" (punch-hole camera).
export function DeviceFrame({ device, src, alt, className = "" }) {
  return (
    <div className={`device device--${device} ${className}`}>
      <div className="device__screen">
        <img src={src} alt={alt} />
        {device === "android" && <span className="device__gesture-bar" />}
      </div>
    </div>
  );
}
