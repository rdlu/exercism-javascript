// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
// JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
// 1e12 = you have 1e9 (1 with 9 zeroes for gigaseconds) plus 3 zeroes (due to millisecond conversion)
export const gigasecond = date => new Date(date.getTime() + 1e12);