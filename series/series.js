/**
 * Return all substrings of `size`, given a string `s`. 
 * If `size` is greater than the length of `s`, or less than 1, return an empty list.
 * @param {string} s - A string to slice.
 * @param {Number} size - The size of each slice.
 */
export function slices(s, size) {
  const result = [];
  if (size < 1) return result;
  for (let i = 0; i <= s.length - size; i++) {
    result.push(s.slice(i, i + size));
  }
  return result;
}
