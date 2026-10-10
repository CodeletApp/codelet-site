import React from "react";

const FEATURES = [
  {
    icon: "/icons/bird.png",
    title: "Learn Anywhere",
    text: "Practice coding questions anywhere and anytime.",
  },
  {
    icon: "/icons/mobile.png",
    title: "Master The Process",
    text:
      "Become an expert at identifying and analyzing core patterns and approaches.",
  },
  {
    icon: "/icons/analytics.png",
    title: "View Your Progress",
    text: "View how well you’re doing and where you can improve.",
  },
];

export function SectionTwo() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        <h2 className="features__heading">Why Codelet?</h2>
        <div className="features__grid">
          {FEATURES.map(({ icon, title, text }) => (
            <div className="feature" key={title}>
              <img className="feature__icon" src={icon} alt="" />
              <h3 className="feature__title">{title}</h3>
              <p className="feature__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
