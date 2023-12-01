export const transpose = (lines) => {
  const maxWidth = Math.max(0, ...lines.map((x) => x.length));
  // initializing an array of width with undef... js being js
  const emptyArray = [...Array(maxWidth)];
  // reduce from right just to check the last char and put spaces on the left if needed
  return emptyArray.map((_, i) => lines.reduceRight((acc, row) => (row[i] || (acc ? ' ' : '')) + acc, ''));
};



