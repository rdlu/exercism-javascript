import { slices } from './series';

describe('Series', () => {
  test('slices of size 1', () => {
    expect(slices('01234', 1)).toEqual(['0', '1', '2', '3', '4']);
  });

  test('slices of size 2', () => {
    expect(slices('01234', 2)).toEqual(["01", "12", "23", "34"]);
  });

  test('slices of size 3', () => {
    expect(slices('01234', 3)).toEqual(["012", "123", "234"]);
  });

  test('slices same size as string', () => {
    expect(slices("01234", 5)).toEqual(["01234"]);
  });

  test('slices using text instead digits', () => {
    expect(slices('rod', 2)).toEqual(["ro", "od"]);
  });

  test('slices with size longer than string return empty list', () => {
    expect(slices('01234', 6)).toEqual([]);
  });

  test("slices with size zero or negative return empty list", () => {
    expect(slices("01234", -1)).toEqual([]);
    expect(slices("01234", 0)).toEqual([]);
  });
});
