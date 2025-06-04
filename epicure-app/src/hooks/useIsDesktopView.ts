import { useState, useEffect } from "react";

export function useIsDesktopView(): boolean {
  const [isAboveThreshold, setIsAboveThreshold] = useState<boolean>(false);

  useEffect(() => {
    const updateMode = () => {
      setIsAboveThreshold(window.innerWidth > 1023);
    };

    updateMode();
    window.addEventListener("resize", updateMode);
    return () => {
      window.removeEventListener("resize", updateMode);
    };
  }, []);

  return isAboveThreshold;
}