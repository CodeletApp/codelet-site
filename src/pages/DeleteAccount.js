import React, { useEffect } from "react";
import Loading from "../components/Loading";

export const DeleteAccount = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/UELT9XXTLvTeNzxn9";
  });

  return <Loading />;
};
