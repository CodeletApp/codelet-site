import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav" aria-label="Footer">
        <Link className="footer__link" to="/">
          Home
        </Link>
        <Link className="footer__link" to="/terms">
          Terms & Conditions
        </Link>
        <Link className="footer__link" to="/privacy">
          Privacy Policy
        </Link>
        <Link className="footer__link" to="/feedback">
          Leave Feedback
        </Link>
        <Link className="footer__link" to="/delete-account">
          Delete Account
        </Link>
      </nav>
      <p className="footer__copy">
        © {new Date().getFullYear()} Codelet LLC
      </p>
    </footer>
  );
}
