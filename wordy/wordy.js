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

const extractNum = (token) => {
  const num = parseInt(token, 10);
  if (isNaN(num)) {
    throw new Error("Syntax error");
  }
  return num;
}

const extractOperation = (token, total) => {
  checkInt(total);

  const operations = {
    "plus": x => total + x,
    "minus": x => total - x,
    "divided": x => Math.floor(total / x),
    "multiplied": x => total * x,
  };

  if (!(token in operations)) {
    if (isNaN(parseInt(token))) {
      throw new Error("Unknown operation");
    }
    throw new Error("Syntax error");
  }

  return operations[token];
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

const checkInt = (value) => {
  if (!Number.isInteger(value)) {
    throw new Error('Syntax error');
  }
};
