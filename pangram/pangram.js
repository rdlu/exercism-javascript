export const isPangram = (str) => {
  // filtering non letters, aligning case
  const letters = str.toLowerCase().match(/[a-z]/g);
  // adding to a set
  const maybe_alphabet = new Set(letters)
  // is a true alphabet?
  return maybe_alphabet.size === 26;
};