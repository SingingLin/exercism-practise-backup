//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isValid() {
    const [a, b, c] = this.sides;
    const allPositive = a > 0 && b > 0 && c > 0;
    const passInequality = (a + b >= c) && (a + c >= b) && (b + c >= a);
    
    return allPositive && passInequality;
  }

  get isEquilateral() {
    // 不重複的邊長只有 1 種（代表三邊相等）
    return this.isValid && new Set(this.sides).size === 1;
  }

  get isIsosceles() {
    // 不重複的邊長有 1 種或 2 種（等邊也是一種等腰）
    return this.isValid && new Set(this.sides).size <= 2;
  }

  get isScalene() {
    // 不重複的邊長有 3 種（三邊都不同）
    return this.isValid && new Set(this.sides).size === 3;
  }
}
