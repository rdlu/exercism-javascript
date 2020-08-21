export const mapping = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = (str) => {
  return str.split('').map(i => mapping[i]).join('')
};
