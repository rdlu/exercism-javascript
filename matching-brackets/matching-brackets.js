export const isPaired = (input) => {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const closing = Object.values(brackets);
  const stack = [];

  for (const char of input) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else if (closing.includes(char)) {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
