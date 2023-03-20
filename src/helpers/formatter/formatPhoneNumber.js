/**
 * Format Singapore phone number (always 4 digits of number)
 * @param {string} number
 * @return {string} => 1234 xxxx
 */
const formatPhoneNumber = number => {
  const phoneArr = number.split(' ');
  return `${phoneArr[0]} XXXX`;
};

export default formatPhoneNumber;
