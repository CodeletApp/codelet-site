import React from "react";
import { SectionOne } from "./sectionOne";
import { SectionTwo } from "./sectionTwo";
import SectionThree from "./sectionThree";
import {Footer} from "./Footer"

export const Landing = () => {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
};
