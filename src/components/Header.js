import React from "react";
import { Link, useLocation } from "react-router-dom";

// Pages that already render their own branding / navigation
const HIDDEN_ON = ["/login", "/admin/login", "/questions", "/edit-question"];

export function Header() {
  const { pathname } = useLocation();

  if (HIDDEN_ON.some((path) => pathname.startsWith(path))) {
    return null;
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" aria-label="Codelet home">
          <img src="/logos/logo-large-blue.png" alt="Codelet" />
        </Link>
        <nav className="header__nav" aria-label="Main">
          <Link className="header__link" to={{ pathname: "/", hash: "#features" }}>
            Features
          </Link>
          <Link
            className="header__cta"
            to={{ pathname: "/", hash: "#download" }}
          >
            Get the App
          </Link>
        </nav>
      </div>
    </header>
  );
}
