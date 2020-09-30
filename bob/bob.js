export function response(message) {
  const q = message.trim()
  if (isQuestion(q) && isYell(q)) return "Calm down, I know what I'm doing!"
  if (isQuestion(q)) return "Sure."
  if (isYell(q)) return "Whoa, chill out!"
  if (isSilence(q)) return "Fine. Be that way!"
  return "Whatever."
}

function isQuestion(q) {
  return q.slice(-1) === '?'
}

function isYell(q) {
  return q === q.toUpperCase() && (q.slice(-1) === '!' || isNaN(Number(q.slice(-2, -1))))
}

function isSilence(q) {
  return q === ''
}

export const hey = response