import { useState, useEffect } from "react";

export function useBreakpoint(threshold: number = 1023): boolean {
  const [isAboveThreshold, setIsAboveThreshold] = useState<boolean>(false);

  useEffect(() => {
    const updateMode = () => {
      setIsAboveThreshold(window.innerWidth > threshold);
    };

    updateMode();
    window.addEventListener("resize", updateMode);
    return () => {
      window.removeEventListener("resize", updateMode);
    };
  }, [threshold]);

  return isAboveThreshold;
}