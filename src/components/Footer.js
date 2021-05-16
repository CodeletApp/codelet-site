import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer">
      <Link className="footer__link" to="/">
        Home
      </Link>
      <Link className="footer__link" to="/terms">
        Terms & Conditions
      </Link>
      <div className="footer__codelet">
        <img
          className="logo"
          src="/logos/codelet-c.png"
          alt="Large Codelet Logo"
        />
        <p>Codelet 2021 </p>
      </div>
      <Link className="footer__link" to="/privacy">
        Privacy Policy
      </Link>
      <Link className="footer__link" to="/feedback">
        Leave Feedback
      </Link>
    </div>
  );
}
