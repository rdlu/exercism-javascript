export class Series {
  constructor(input) {
    this._digits = input.split('').map((v) => parseInt(v));
  }

  get digits() {
    return this._digits;
  }

  slices(size) {
    const result = [];
    for (let i = 0; i <= this.digits.length - size; i++) {
      result.push(this.digits.slice(i, i + size));
    }
    return result;
  }
}
