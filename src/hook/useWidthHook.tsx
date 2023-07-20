import { useEffect, useState } from "react";

// Esse hook retorna o valor da window
export const useWidthHook = () => {
  const [windowSize, setWindowSize] = useState(0);

  const handleUpdateScreenWidth = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    handleUpdateScreenWidth();
    window.addEventListener("resize", handleUpdateScreenWidth);

    const removeEvent = () => {
      window.removeEventListener("resize", handleUpdateScreenWidth);
    };

    return () => removeEvent();
  }, []);

  return { windowSize };
};
