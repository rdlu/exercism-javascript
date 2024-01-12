export const answer = (question) => {
  let tokens = cleanQuestion(question).split(' ');
  if (tokens.length < 1) throw new Error("Syntax error");

  // identity function, avoids checking results is a function later
  let result = (x) => x;
  while (tokens.length > 1) {
    const [raw_num, raw_op, ...rest] = tokens;

    result = extractOperation(raw_op, result(extractNum(raw_num)));
    tokens = rest;
  }

  return result(extractNum(tokens[0]));
};

// token processing related
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

// generic utilities
const throws = (err) => { throw err };
const extractNum = (token) => {
  return Number(token) || throws(new Error("Syntax error"));
}

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

