import React from "react";
export function Footer() {
  function scrollToMiddle() {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.querySelector(".section2").offsetTop,
    });
  }
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
    </div>
  );
}
