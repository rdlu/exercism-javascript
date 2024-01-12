export const answer = (question) => {
  let tokens = cleanQuestion(question).split(' ');
  let result = (x) => x;
  if (tokens.length < 1) throw new Error("Syntax error");

  while (tokens.length > 1) {
    const [raw_num, raw_op, ...rest] = tokens;

    result = extractOperation(raw_op, result(extractNum(raw_num)));
    tokens = rest;
  }

  return result(extractNum(tokens[0]));
};

const throws = (err) => { throw err };
const extractNum = (token) => {
  return Number(token) || throws(new Error("Syntax error"));
}
const operations =  {
    "plus": (x, y) => x + y,
    "minus": (x, y) => x - y,
    "divided": (x, y) => x / y,
    "multiplied": (x, y) => x * y,
};
const validOps = Object.keys(operations);

const extractOperation = (token, total) => {
  if (!validOps.includes(token)) {
    // weird specs
    if (parseInt(token)) {
      throw new Error("Syntax error");
    }

    throw new Error("Unknown operation");
  }

  return (y) => operations[token].apply(this, [total, y]);
};

const cleanQuestion = (question) => {
  if (!question.toLowerCase().startsWith("what is")) {
    throw new Error("Unknown operation");
  }

  return question.toLowerCase()
    .replace("what is", "")
    .replace("?", "")
    .replaceAll(" by", "")
    .trim();
}

