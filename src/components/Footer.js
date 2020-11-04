import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="fixed-footer">
      <Link className="footer-link" to="/">
        Home
      </Link>
      <Link className="footer-link" to="/submit-question">
        Submit A Question
      </Link>
      <Link className="footer-link" to="/terms">
        Terms & Conditions
      </Link>
      <Link className="footer-link" to="/privacy">
        Privacy Policy
      </Link>
      <a
        className="footer-link"
        href="https://docs.google.com/forms/d/e/1FAIpQLScdPx0TSDPYBsEKT2buMK0SkpjcPrze5Ms0IhTw5Yl4vTpxLg/viewform?usp=sf_link"
      >
        Join the Beta
      </a>
    </div>
  );
}
