//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  // return str.split("").reverse().join("");

  let reverseStr = '';
  for (let i = str.length - 1; i >= 0 ; i--) {
    reverseStr += str[i]
  }
  return reverseStr;
};
