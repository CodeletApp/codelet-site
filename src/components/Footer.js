import React from "react";

export function Footer() {
  return (
    <div className="fixed-footer">
      <a
        className="footer-link"
        href="codelet.app/terms"
      >
        Terms & Conditions
      </a>
      <a
        className="footer-link"
        href="codelet.app/privacy"
      >
        Privacy Policy
      </a>
      <a
        className="footer-link"
        href="https://docs.google.com/forms/d/e/1FAIpQLScdPx0TSDPYBsEKT2buMK0SkpjcPrze5Ms0IhTw5Yl4vTpxLg/viewform?usp=sf_link"
      >
        Join the Beta
      </a>
    </div>
  );
}
