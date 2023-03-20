import { useState } from 'react';

const useCard = () => {
  const [showText, setShowText] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const toggleRevealPhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const revealText = () => {
    setShowText(true);
  };

  return {
    showText,
    showPhoneNumber,
    toggleRevealPhoneNumber,
    revealText
  };
};

export default useCard;
