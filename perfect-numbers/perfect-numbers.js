const range = (start, end) => new Array(end).fill(start).map((n, i) => n + i)
const sum = (arr) => arr.reduce((total, cur) => total += cur, 0)

const factors = (n) => range(1, Math.floor(n / 2)).filter(elem => n % elem === 0)

export const classify = (number) => {
  if (number <= 0 || !Number.isInteger(number)) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  const div_sum = sum(factors(number))

  if (div_sum === number) {
    return 'perfect'
  }

  if (div_sum > number) {
    return 'abundant'
  }

  return 'deficient'
}
