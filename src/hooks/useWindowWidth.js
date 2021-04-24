import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const onWindowChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", onWindowChange);

    return () => {
      window.removeEventListener("resize", onWindowChange);
    };
  }, [width]);

  return width;
};

export default useWindowWidth;
