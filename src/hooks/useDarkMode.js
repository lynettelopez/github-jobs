import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("light");

  const setEverywhere = (mode) => {
    window.localStorage.setItem("theme", mode);
    setMode(mode);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setEverywhere("dark");
    } else {
      setEverywhere("light");
    }
  };

  useEffect(() => {
    const localMode = window.localStorage.getItem("theme");
    if (
      window.matchMedia?.("(prefers-color-scheme: dark)").matches &&
      !localMode
    ) {
      setEverywhere("dark");
    } else if (localMode) {
      setMode(localMode);
    } else {
      setEverywhere("light");
    }
  }, []);

  return [mode, toggleMode];
};

export default useDarkMode;
