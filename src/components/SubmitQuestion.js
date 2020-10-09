import React, { useEffect } from "react";
import Loading from "./Loading";

export const SubmitQuestion = () => {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/18EKDLIZOTYrTogTr5qoPpMAAwEkpIYdr8YorxUdLhyg/viewform?edit_requested=true";
  });

  return <Loading />;
};
