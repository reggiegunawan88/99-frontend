import { useState } from 'react';

const useCard = data => {
  const [showText, setShowText] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const toggleRevealPhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const revealText = () => {
    setShowText(true);
  };

  const formatDescriptionText = () => {
    const description = data?.description.replace(/(\d)\s+(?=\d)/g, `$1`);
    if (showPhoneNumber) {
      return description;
    }
    const result = description.replace(
      /[6|8|9]\d{7}/g,
      matched => `<span>${matched.replace(/.{0,4}$/, '')}XXXX<span/>` // replace all matched SG phone num format
    );
    return result;
  };

  return {
    showText,
    toggleRevealPhoneNumber,
    revealText,
    formatDescriptionText
  };
};

export default useCard;
