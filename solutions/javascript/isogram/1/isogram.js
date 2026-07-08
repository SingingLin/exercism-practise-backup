//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (str) => {
  const newStr = str.toLowerCase().replace(/[^a-z]/g, '');
  return new Set(newStr).size === newStr.length;
};
