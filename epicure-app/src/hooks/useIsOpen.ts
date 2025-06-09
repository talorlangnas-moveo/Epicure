import { useState, useEffect } from 'react';

export const useIsOpen = (openingTime: string, closingTime: string): boolean => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkIsOpen = () => {
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      const [openingHours, openingMinutes] = openingTime.split(':').map(Number);
      const [closingHours, closingMinutes] = closingTime.split(':').map(Number);

      const openingTimeInMinutes = openingHours * 60 + openingMinutes;
      const closingTimeInMinutes = closingHours * 60 + closingMinutes;

      setIsOpen(
        currentTime >= openingTimeInMinutes && currentTime < closingTimeInMinutes
      );
    };

    checkIsOpen();
    const interval = setInterval(checkIsOpen, 60000);
    return () => clearInterval(interval);
  }, [openingTime, closingTime]);

  return isOpen;
}; 