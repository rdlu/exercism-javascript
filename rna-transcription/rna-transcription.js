export const toRna = str => {
  const mapping = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  };

  return str.replace(/[CGAT]/g, item => mapping[item]);
};