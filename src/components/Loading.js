import React from "react";
import spinner from "../assets/spinner.gif";

export default () => (
  <div
    style={{
      width: "100%",
      height: window.innerHeight,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={spinner}
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
      alt="Loading..."
    />
  </div>
);
