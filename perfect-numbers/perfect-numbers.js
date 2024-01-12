const range = (start, end) => new Array(end).fill(start).map((n, i) => n + i)
const factors = (n) => range(1, Math.floor(n / 2)).filter(elem => n % elem === 0)

export const classify = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  const nFactors = factors(number)
  const sum = nFactors.reduce((total, factor) => total += factor, 0)

  if (sum === number) {
    return 'perfect';
  }

  if (sum > number) {
    return 'abundant';
  }

  return 'deficient';
};
