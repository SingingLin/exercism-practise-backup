//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// // 1. COLORS 必須是陣列，順序代表 0 ~ 9
// export const COLORS = [
//   "black", "brown", "red", "orange", "yellow", 
//   "green", "blue", "violet", "grey", "white"
// ];

// // 2. 使用 JavaScript 陣列的 indexOf 方法來找出數字
// export const colorCode = (color) => {
//   return COLORS.indexOf(color);
// };

const COLOR_MAP = {
  black: 0, brown: 1, red: 2, orange: 3, yellow: 4,
  green: 5, blue: 6, violet: 7, grey: 8, white: 9
};

export const colorCode = (color) => {
  return COLOR_MAP[color];
};

// 額外導出題目要求的 COLORS 陣列
export const COLORS = Object.keys(COLOR_MAP);
