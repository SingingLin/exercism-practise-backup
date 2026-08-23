//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const pangram = "abcdefghijklmnopqrstuvwxyz";
  const newStr = [
    ...new Set(
      str
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .split("")
      .sort(),
    ),
  ].join("");
  return pangram === newStr;
};
