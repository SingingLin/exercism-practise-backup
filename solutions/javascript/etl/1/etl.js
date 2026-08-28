//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let expected = {};
  for (const item in old) {
    for (const ele of old[item]) {
      expected[ele.toLowerCase()] = Number(item);
    }
  }
  return expected;
};
