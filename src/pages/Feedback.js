import React, { useEffect } from "react";
import Loading from "../components/Loading";

export const Feedback = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/tgwrcaNJMJciME4T9";
  });

  return <Loading />;
};
