export const transpose = (lines) => {
  const maxWidth = Math.max(0, ...lines.map((x) => x.length));
  // reduce from right just to check the last char and put spaces on the left if needed
  const reverseConcat = (rows) => (_, i) => rows.reduceRight((acc, row) => (row[i] || (acc ? ' ' : '')) + acc, '');
  // `from` is more sane than destruct
  return Array.from({ length: maxWidth }, reverseConcat(lines))
};



