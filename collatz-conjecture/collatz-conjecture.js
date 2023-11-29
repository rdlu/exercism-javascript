export const steps = (num) => {
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }

  return count;
};
