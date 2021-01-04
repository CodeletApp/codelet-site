import React from "react";
import { SectionOne } from "../components/sectionOne";
import { SectionTwo } from "../components/sectionTwo";
import SectionThree from "../components/sectionThree";

export const Landing = () => {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};
