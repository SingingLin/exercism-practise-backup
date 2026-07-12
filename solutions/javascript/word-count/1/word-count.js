//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (text) => {
  // \b 代表單字的邊界，\w+ 代表一個以上的英數字或底線
  // '\w+ 代表後面允許接上撇號縮寫
  const regex = /\b\w+('\w+)?\b/g;
  const match = text.toLowerCase().match(regex);

  let counter = {};
  for (const val of match) {
    counter[val] = (counter[val] || 0) + 1;
  }

  return counter;
};
