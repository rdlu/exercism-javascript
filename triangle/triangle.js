export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.uniqueSides = new Set(sides);
  }

  get isEquilateral() {
    return this.isValid() && this.uniqueSides.size === 1;
  }

  get isIsosceles() {
    return this.isValid() && (this.uniqueSides.size === 1 || this.uniqueSides.size === 2);
  }

  get isScalene() {
    return this.isValid() && this.uniqueSides.size === 3;
  }

  isValid() {
    let [x, y, z] = [...this.sides];
    const validMinLength = this.sides.every(v => v > 0);
    const validSides = ((x + y >= z) && (y + z >= x) && (x + z >= y));

    return validMinLength && validSides;
  }
}
