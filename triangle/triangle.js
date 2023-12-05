export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.isTriangle = this.sides.every(side => side > 0);
  }

  get isEquilateral() {
    return this.isTriangle && this.sides.every(side => side === this.sides[0]);
  }

  get isIsosceles() {
    return this.isTriangle &&
      this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2] || this.sides[0] === this.sides[2];
  }

  get isScalene() {
    return this.isTriangle &&
      this.sides[0] !== this.sides[1] && this.sides[1] !== this.sides[2] && this.sides[0] !== this.sides[2];
  }
}
