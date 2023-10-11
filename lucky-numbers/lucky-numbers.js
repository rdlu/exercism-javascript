// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let x = Number(array1.join(""));
  let y = Number(array2.join(""));
  return x + y;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const digits = String(value);
  return digits == digits.split("").reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const num = Number(input);

  if (num > 0) {
    return "";
  }

  if (input) {
    return "Must be a number besides 0";
  }
  return "Required field";
}
