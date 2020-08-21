export const gigasecond = (date) => {
  const date_in_miliseconds = date.getTime();
  const gigasecond_in_miliseconds = 1e12;
  const sum = date_in_miliseconds + gigasecond_in_miliseconds;
  return new Date(sum);
};