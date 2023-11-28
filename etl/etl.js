//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (input) => {
  let output = {};

  for (let score in input) {
    let letters = input[score];

    letters.forEach((letter) => {
      output[letter.toLowerCase()] = parseInt(score);
    });
  }

  return output;
};
